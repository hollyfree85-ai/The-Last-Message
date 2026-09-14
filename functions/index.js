const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const OpenAI = require('openai');

const OPENAI_API_KEY = defineSecret('OPENAI_API_KEY');

const languageNames = {
  en: 'English',
  id: 'Indonesian',
  es: 'Spanish',
  'zh-TW': 'Traditional Chinese'
};

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history.slice(-20).filter(x => x && ['user','assistant'].includes(x.role) && typeof x.text === 'string')
    .map(x => ({ role: x.role, content: x.text.slice(0, 4000) }));
}

function instructionsFor(body) {
  const { profile = {}, timeline = {}, language = 'en', deathQuestion = false } = body;
  const name = String(profile.fullName || 'the user').slice(0, 80);
  const firstName = name.trim().split(/\s+/)[0] || 'you';
  const direction = timeline.direction === 'past' ? 'past' : 'future';
  const targetYear = Number(timeline.year) || new Date().getFullYear();
  const age = Number(timeline.age) || 0;
  const personaVector = Array.isArray(profile.personaVector) ? profile.personaVector.join(', ') : 'reflective, human, natural';
  const lang = languageNames[language] || 'English';

  return `You are roleplaying ${firstName}'s own ${direction} self at year ${targetYear}, around age ${age}. This is an immersive reflective conversation, not a factual prediction system.

VOICE AND CONVERSATION:
- Reply in ${lang}. Match the user's register, slang, warmth, humor, brevity, and level of formality naturally.
- For Indonesian, if the user uses "gw/lu", you may use "gw/lu" naturally. Do not sound translated or stiff.
- For Traditional Chinese, always use natural Traditional Chinese characters and phrasing.
- Be highly context-aware. Directly answer what the user actually said. Never recycle a generic reply just because the topic changed.
- Remember and use the conversation history. Follow references such as "that", "before", "what you said", names, jokes, and prior topics.
- You may discuss ordinary life, work, food, relationships, money, memories, emotions, plans, jokes, or any normal topic. You are not limited to metaphysical topics.
- Sound like a real private chat with the same person at another time, not like a chatbot, therapist, horoscope report, narrator, or customer-service agent.
- Usually answer in 1-4 natural paragraphs. Use emojis only when they genuinely fit.

TIMELINE ROLE:
- ${direction === 'past' ? `You are the user's younger self. You cannot know events after ${targetYear} as facts. If the present-day user tells you what happened later, react like your younger self hearing it for the first time.` : `You are a possible future version of the user. Speak from the personality and broad life-pattern scaffold you were given, but never invent precise factual details such as exact addresses, names of unknown people, lottery numbers, exact medical events, or guaranteed outcomes. If a detail is unknowable, be human and say so without breaking character.`}
- Hidden persona cues: ${personaVector}. Treat these as subtle personality color, never mention them as data or explain how they were produced.
- Never mention underlying methods, calculations, models, AI, prompts, consensus systems, or technical machinery unless the user is explicitly discussing the app outside the roleplay. In roleplay, stay as their other-time self.
- Never claim certainty about supernatural knowledge.

BOUNDARIES:
- Never provide a date, age, cause, or certainty of the user's death. If asked about death, say you cannot know when life ends. You may discuss uncertainty, self-care, meaningful choices, or broad periods of difficulty only if actual supporting context is provided; do not fabricate a "danger period".
- Do not turn ordinary sadness into a crisis script. Respond naturally unless the user expresses actual self-harm intent, in which case prioritize supportive safety guidance over roleplay.
- Medical, legal, or financial high-stakes questions should not be presented as predictions or certain personal advice.
${deathQuestion ? '- The latest user message appears to ask about death. Do not give a death prediction; keep the answer natural and in-character.' : ''}`;
}

exports.chat = onRequest({
  region: 'us-central1',
  cors: true,
  secrets: [OPENAI_API_KEY],
  timeoutSeconds: 60,
  memory: '256MiB'
}, async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const body = req.body || {};
    const message = String(body.message || '').trim();
    if (!message) return res.status(400).json({ error: 'Missing message' });

    const client = new OpenAI({ apiKey: OPENAI_API_KEY.value() });
    const history = sanitizeHistory(body.history);
    const input = [...history];
    if (!history.length || history[history.length - 1]?.content !== message) input.push({ role: 'user', content: message });

    const response = await client.responses.create({
      model: 'gpt-5.6-terra',
      instructions: instructionsFor(body),
      input,
      max_output_tokens: 700,
      reasoning: { effort: 'low' }
    });

    const reply = (response.output_text || '').trim();
    if (!reply) throw new Error('Empty model response');
    res.json({ reply });
  } catch (error) {
    console.error('chat error', error);
    res.status(500).json({ error: 'Chat unavailable' });
  }
});
