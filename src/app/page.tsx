"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <nav className="w-full flex justify-between items-center p-6 lg:px-12 backdrop-blur-sm border-b border-white/10 z-10 sticky top-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className="font-bold text-xl tracking-tight">SocialNiche</span>
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="hidden sm:flex">Log In</Button>
          </Link>
          <Link href="/onboarding">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-32 sm:pb-20 z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>The B2B Social Engine, Powered by AI</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Scale your B2B voice with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              zero cognitive load.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Stop guessing what works on LinkedIn and Twitter. SocialNiche AI analyzes live industry trends, discovers key B2B voices, and generates highly-original thought leadership tailored perfectly to your brand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/onboarding">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-primary/20">
                Start Generating Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> 100% Original Thought Leadership
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Real-time Industry Trend Analytics
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Executive Voice Personalization
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-32 w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Content Generator</h3>
            <p className="text-muted-foreground leading-relaxed">
              Generate compelling LinkedIn threads, Twitter thought leadership, and technical blog summaries in seconds. Our AI adapts to your executive tone.
            </p>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">B2B Trend Analysis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Stay ahead of the curve. We analyze millions of B2B conversations to highlight emerging trends in SaaS, fintech, enterprise AI, and more.
            </p>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Partner Discovery</h3>
            <p className="text-muted-foreground leading-relaxed">
              Find the right voices for your next campaign. Discover B2B influencers, industry analysts, and complimentary brands with deep data insights.
            </p>
          </div>
        </motion.div>

        {/* B2B Sample Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-32 w-full text-left"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See what the AI can create</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Generate high-converting, professional content tailored to B2B audiences on LinkedIn and Twitter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LinkedIn Sample */}
            <div className="border rounded-2xl bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
              <div className="bg-muted/40 px-4 py-3 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  <span className="font-semibold text-sm">LinkedIn Post</span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium dark:bg-green-900/30 dark:text-green-400">100% Original</span>
              </div>
              <div className="p-6 text-sm text-zinc-800 dark:text-zinc-200 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold">JD</div>
                  <div>
                    <p className="font-bold leading-none mb-1">Jane Doe</p>
                    <p className="text-xs text-muted-foreground">VP of Engineering at Acme Corp</p>
                  </div>
                </div>
                <p>The transition from monolith to microservices isn't just a technical challenge—it's an organizational shift. 💡</p>
                <p>Over the last 6 months, our team at Acme Corp has been dissecting our legacy systems. Here are 3 non-obvious lessons we learned the hard way:</p>
                <p>1️⃣ Conway's Law is ruthless. If your org chart is siloed, your microservices will be too.<br />
                  2️⃣ Observability isn't a "Phase 2" feature. If you can't trace a request on day one, you're flying blind.<br />
                  3️⃣ CI/CD pipelines need as much architectural thought as the application code.</p>
                <p>What's the hardest lesson your team learned during a major migration? Let's discuss below. 👇</p>
                <p className="text-blue-600 dark:text-blue-400 pt-2">#SoftwareEngineering #Microservices #TechLeadership #SaaS</p>
              </div>
            </div>

            {/* Twitter Thread Sample */}
            <div className="border rounded-2xl bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
              <div className="bg-muted/40 px-4 py-3 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  <span className="font-semibold text-sm">X (Twitter) Thread</span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium dark:bg-green-900/30 dark:text-green-400">100% Original</span>
              </div>
              <div className="p-6 text-sm text-zinc-800 dark:text-zinc-200 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-red-600 flex items-center justify-center text-white font-bold">MK</div>
                  <div>
                    <p className="font-bold leading-none mb-1">Mike Kline</p>
                    <p className="text-xs text-muted-foreground">@mkline_growth</p>
                  </div>
                </div>
                <p>B2B Marketing is broken.<br /><br />We're still acting like buyers want to read 40-page PDFs hidden behind 12-field registration forms.<br /><br />Here is the modern playbook for B2B growth in 2026. 🧵👇</p>
                <div className="pl-4 border-l-2 border-muted mt-4 space-y-4">
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">1/ Ungate your best content.</span><br />If your content is truly valuable, use it to build trust, not an email list. Trust converts faster than a forced newsletter subscription.</p>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">2/ Founder-led brands win.</span><br />People buy from people. If your CEO isn't posting insights on LinkedIn or X twice a week, you're leaving revenue on the table.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
