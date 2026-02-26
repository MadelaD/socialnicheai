# SocialNiche AI

SocialNiche AI is an intuitive, modern SaaS web application that helps brands and creators generate original, high-quality social media content and discover relevant influencers/publishers. Built with Next.js 15, Tailwind CSS v4, Shadcn UI, Clerk, Supabase, and the Google Gemini 3.x API via Vercel AI SDK.

## Features
- **Personalized Onboarding**: Multi-step wizard creating dynamic brand profiles.
- **AI Content Generator**: Generate viral cross-platform content using Gemini 3.x with streaming output.
- **Trend & Keyword Analysis**: Live detection and suggestions for highly engaging current trends.
- **Influencer Discovery**: Mockup system highlighting data and match percentages for partners.
- **Robust UI/UX**: Dark mode, fully responsive grid layouts, and smooth animations using Shadcn UI.

## Local Setup

### 1. Requirements
- Node.js >= 18.x
- npm / yarn / pnpm

### 2. Environment Variables
1. Copy `.env.local` template:
    ```bash
    cp .env.local.example .env.local
    ```
2. Fill out `.env.local`:
   - **Clerk**: Get keys from [Clerk dashboard](https://clerk.dev/).
   - **Supabase**: Get `POSTGRES_URL` and `DIRECT_URL` from [Supabase dashboard](https://supabase.com/).
   - **Gemini AI SDK**: Get `GEMINI_API_KEY` from [Google AI Studio](https://aistudio.google.com/).
   - **Vercel KV**: Get keys from Vercel after integrating Redis KV on a project.

### 3. Database Initialization
Update your `schema.prisma` using your `DATABASE_URL` and push the structure:
```bash
npx prisma generate
npx prisma db push
```

### 4. Run Locally
```bash
npm install
npm run dev
```

## Deployment to Vercel

1. **Push your code to GitHub/GitLab**.
2. Go to [Vercel](https://vercel.com/new) and import the repository.
3. In the environment variables configuration, add all keys from `.env.local`.
4. Add the **Vercel KV**, **Vercel Postgres** (if not using Supabase), and **Clerk** integrations via Vercel Marketplace for one-click setups if desired.
5. Click **Deploy**. Vercel will automatically build (`npm run build`) and host your frontend and API routes flawlessly thanks to Next.js.
