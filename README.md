# The Last Message — PWA V1.1

A minimal time-corridor PWA prototype with a real cloud conversation endpoint.

## What the user sees
- Full name
- Date of birth
- Birth time (optional)
- Short disclaimer
- Choose Past or Future
- Choose a year
- Chat with that version of themselves
- English / Indonesian / Spanish / Traditional Chinese

No metaphysical method names or technical engine details are shown in the app UI.

## Project layout
- `public/` — PWA frontend
- `functions/` — Firebase Function for real conversational AI
- `firebase.json` — Hosting + `/api/chat` rewrite

## Firebase deployment
1. Create a new Firebase project.
2. Install Firebase CLI and log in.
3. In this project folder run `firebase use --add` and select the new project.
4. Run `cd functions && npm install && cd ..`.
5. Store the API key securely: `firebase functions:secrets:set OPENAI_API_KEY`.
6. Deploy: `firebase deploy --only hosting,functions`.

The API key stays server-side in Firebase Secret Manager and is never placed in the browser code.

## Local UI preview
A normal static server can preview the UI, but real chat requires the Firebase Function. For example use Firebase emulator or deploy the project.

## Current interpretation layer
V1.1 contains only a deterministic hidden persona scaffold so UI/chat behavior can be built safely. It does **not** pretend the full historical interpretation engine is finished. The next phase can replace `personaVector` with the real hidden consensus output without changing the user-facing experience.
