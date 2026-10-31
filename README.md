- Frontend: https://itelect4-project-it-4-b-ten.vercel.app
- Backend API: https://itelect4-backend-eight.vercel.app
- Backend Repo: https://github.com/goraphael703-lang/itelect4-backend.git

# itelect4-frontend
 
[![CI](https://github.com/meloimagpantay/itelect4-backend/actions/workflows/ci.yml/badge.svg)](https://github.com/meloimagpantay/itelect4-backend/actions/workflows/ci.yml)
 
The REST API behind the ITELECT4 class demo, end of Session 12: Express 5
in TypeScript, MongoDB Atlas through Mongoose, JWT login, and one route
that asks Gemini to review a project description.
 
- **Live API:** https://itelect4-backend-xxxx.vercel.app/api/health
- **Frontend repo:** https://github.com/meloimagpantay/itelect4-project
 
## Architecture
 
```mermaid
flowchart LR
  fe["itelect4-project<br/>React + Vite on Vercel"]
  be["itelect4-backend<br/>Express on Vercel"]
  db[("MongoDB Atlas")]
  ai["Gemini API"]
  fe -- "fetch + Bearer token" --> be
  be -- "Mongoose" --> db
  be -- "GEMINI_API_KEY" --> ai
```