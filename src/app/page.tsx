"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Users, CalendarClock, WandSparkles, MessageSquare, Instagram, Image as ImageIcon, Video, Linkedin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-500/15 blur-[120px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center p-6 lg:px-12 backdrop-blur-md border-b border-foreground/5 z-50 bg-background/80">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </div>
          <span className="font-bold text-xl tracking-tight">ContentVelocity AI</span>
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="hidden sm:flex">Log In</Button>
          </Link>
          <Link href="/onboarding">
            <Button>Start Free</Button>
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12 z-10 w-full max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <section className="text-center space-y-8 max-w-4xl mx-auto pt-2 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm font-semibold mb-6 shadow-sm cursor-default transition-shadow hover:shadow-purple-500/20"
            >
              <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400">Scale Your Brand's Voice with AI</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Scale Your Content at the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 drop-shadow-sm">
                Speed of Opportunity
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              ContentVelocity AI turns real-time trends and high-performing keywords into strategic content that drives traffic, engagement, and revenue — so your business grows faster across every platform.
            </p>

            <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto mb-8 font-medium">
              Discover emerging signals, generate high-converting posts, and stay ahead of competitors without the guesswork.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link href="/onboarding" className="w-full sm:w-auto">
                <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-blue-500/25 bg-blue-600 hover:bg-blue-700 text-white transition-all hover:scale-105 active:scale-95 group">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto hover:bg-muted transition-colors">
                Watch 2-Minute Demo
              </Button>
            </div>

            <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-10 opacity-80">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> 100% Original Content</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> No Credit Card Required</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> Cancel Anytime</span>
            </div>
          </motion.div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className="w-full py-20 border-t border-foreground/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need to Scale</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From idea generation to direct publishing, we've built the ultimate pipeline.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-md hover:border-purple-500/50">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <WandSparkles className="w-6 h-6 text-purple-500" />
                </div>
                <CardTitle>AI Content Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Generate original, high-performing posts, threads, and visuals tailored to your voice in seconds.
                </p>
                <div className="mt-4 text-xs font-medium text-purple-600 dark:text-purple-400">Save 10+ hours a week</div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-md hover:border-blue-500/50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle>Real-time Trend Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Identify emerging trends and keywords before your competitors to stay ahead.
                </p>
                <div className="mt-4 text-xs font-medium text-blue-600 dark:text-blue-400">Boost Engagement by 2x</div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-md hover:border-emerald-500/50">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>
                <CardTitle>Partner/Influencer Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Find relevant influencers and collaborators with active platform insights.
                </p>
                <div className="mt-4 text-xs font-medium text-emerald-600 dark:text-emerald-400">Drive High-Intent Leads</div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-md hover:border-orange-500/50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                  <CalendarClock className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle>Seamless Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Plan and publish across LinkedIn, X, Instagram, Facebook, and more with one-click ease.
                </p>
                <div className="mt-4 text-xs font-medium text-orange-600 dark:text-orange-400">Seamless Publishing</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="w-full py-20 border-t border-foreground/5 bg-muted/10 rounded-3xl px-8 my-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose ContentVelocity AI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Built precisely for marketers who need versatility without diluting quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary"><Sparkles className="w-5 h-5" /></div>
              <div>
                <h4 className="text-lg font-bold mb-2">AI-Powered Originality</h4>
                <p className="text-muted-foreground">Say goodbye to generic AI text. Our models include originality checks guaranteeing copyright-safe, unique content every time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-blue-500/10 flex-shrink-0 flex items-center justify-center text-blue-500"><Linkedin className="w-5 h-5" /></div>
              <div>
                <h4 className="text-lg font-bold mb-2">B2B-Specific Optimization</h4>
                <p className="text-muted-foreground">Generate thought leadership threads for LinkedIn and X perfectly tailored to nurture leads, drive pipeline, and establish executive authority.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-pink-500/10 flex-shrink-0 flex items-center justify-center text-pink-500"><Instagram className="w-5 h-5" /></div>
              <div>
                <h4 className="text-lg font-bold mb-2">B2C-Specific Virality</h4>
                <p className="text-muted-foreground">Craft viral Instagram Reels, TikTok scripts, and visually-rich campaigns designed to rapidly grow followers and accelerate D2C sales.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-500"><TrendingUp className="w-5 h-5" /></div>
              <div>
                <h4 className="text-lg font-bold mb-2">Shared Analytics Dashboard</h4>
                <p className="text-muted-foreground">Track everything in one place. Analytics per platform dynamically adjusted for B2B KPIs (leads) or B2C KPIs (views/conversions).</p>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES & SAMPLES SECTION */}
        <section className="w-full py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Whether you're selling enterprise software or sustainable fashion, we've got you covered.</p>
          </div>

          <Tabs defaultValue="b2b" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
              <TabsTrigger value="b2b" className="text-base font-medium">B2B: SaaS & Enterprise</TabsTrigger>
              <TabsTrigger value="b2c" className="text-base font-medium">B2C: Lifestyle & E-Commerce</TabsTrigger>
            </TabsList>

            <TabsContent value="b2b" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-left">
                  <Badge variant="outline" className="text-blue-500 border-blue-200 bg-blue-50 dark:bg-blue-900/30">B2B Use Case</Badge>
                  <h3 className="text-2xl font-bold">Scaling Executive Voice for SaaS</h3>
                  <p className="text-muted-foreground text-lg">"We used the AI to post weekly LinkedIn threads on churn reduction. It completely automated our thought leadership."</p>
                  <div className="grid grid-cols-2 gap-4 mt-6 border-t pt-6">
                    <div>
                      <div className="text-3xl font-bold text-foreground">2x</div>
                      <div className="text-sm text-muted-foreground">Increase in Inbound Leads</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">15hrs</div>
                      <div className="text-sm text-muted-foreground">Saved per week</div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Fake Post Mock */}
                <div className="border rounded-2xl bg-card shadow-xl overflow-hidden transform duration-300 hover:scale-[1.02] text-left">
                  <div className="bg-muted/40 px-4 py-3 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-sm">Generated LinkedIn Post</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0 h-6 dark:bg-green-900/30 dark:text-green-400">100% Original</Badge>
                  </div>
                  <div className="p-5 text-sm space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold">CEO</div>
                      <div>
                        <p className="font-bold leading-none mb-1">Tech Founder</p>
                        <p className="text-xs text-muted-foreground">Building the future of Enterprise Cloud</p>
                      </div>
                    </div>
                    <p>The transition from monolith to microservices isn't just a technical challenge—it's an organizational shift. 💡</p>

                    <div className="rounded-lg bg-muted flex flex-col items-center justify-center py-6 border border-border mt-3 relative overflow-hidden group">
                      <ImageIcon className="w-8 h-8 text-muted-foreground/50 mb-2" />
                      <span className="text-xs font-medium text-muted-foreground text-center px-4">AI Generated Infographic (DALL-E 3)</span>
                    </div>

                    <p className="text-blue-600 dark:text-blue-400">#SoftwareEngineering #SaaS #Leadership</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="b2c" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-left">
                  <Badge variant="outline" className="text-pink-500 border-pink-200 bg-pink-50 dark:bg-pink-900/30">B2C Use Case</Badge>
                  <h3 className="text-2xl font-bold">Driving Viral E-Commerce Sales</h3>
                  <p className="text-muted-foreground text-lg">"We generated Instagram reels on sustainable trends. The AI scripts matched our brand voice perfectly and saved us thousands on agency fees."</p>
                  <div className="grid grid-cols-2 gap-4 mt-6 border-t pt-6">
                    <div>
                      <div className="text-3xl font-bold text-foreground">+45%</div>
                      <div className="text-sm text-muted-foreground">Increase in Engagement</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">3x</div>
                      <div className="text-sm text-muted-foreground">Faster Content Production</div>
                    </div>
                  </div>
                </div>

                {/* Instagram Fake Reel Mock */}
                <div className="border rounded-2xl bg-card shadow-xl overflow-hidden transform duration-300 mx-auto w-full max-w-[320px] hover:scale-[1.02] text-left">
                  <div className="bg-muted/40 px-4 py-3 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <span className="font-semibold text-sm">Generated IG Reel</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0 h-6 dark:bg-green-900/30 dark:text-green-400">100% Original</Badge>
                  </div>
                  <div className="relative aspect-[9/16] bg-zinc-900 border-b flex flex-col items-center justify-center text-white">
                    <Video className="w-12 h-12 mb-2 opacity-50 text-white" />
                    <span className="text-xs font-medium bg-black/60 px-3 py-1.5 rounded-full mb-1 flex items-center gap-1 border border-white/20">
                      <Sparkles className="w-3 h-3 text-pink-400" /> Auto-Generated Pika Video
                    </span>
                    <span className="text-xs opacity-70 px-6 text-center mt-2">"Model walking in sustainable summer wear"</span>

                    <div className="absolute bottom-4 left-4 right-8 text-left">
                      <p className="font-bold text-sm mb-1">@eco_style</p>
                      <p className="text-xs line-clamp-2 shadow-black/50 drop-shadow-md">Fast fashion is out. Sustainable futures are IN. 🌱✨ Shop the new 100% recycled drop.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <div className="flex justify-center mt-12">
              <Link href="/onboarding">
                <Button size="lg" className="rounded-full shadow-lg">Generate Your Own Content</Button>
              </Link>
            </div>
          </Tabs>
        </section>

        {/* SOCIAL PROOF */}
        <section className="w-full py-20 border-t border-foreground/5 text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Marketers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-background text-left shadow-sm">
              <CardContent className="pt-6">
                <div className="flex text-yellow-500 mb-4">
                  ★ ★ ★ ★ ★
                </div>
                <p className="text-muted-foreground italic mb-6">"ContentVelocity AI completely transformed our B2B marketing. I used to spend hours ghostwriting for our executives—now I just configure the tone and let the AI generate a month's worth of LinkedIn threads in 5 minutes."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">MB</div>
                  <div>
                    <p className="font-bold text-sm">Marcus B.</p>
                    <p className="text-xs text-muted-foreground">CMO, Enterprise SaaS</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background text-left shadow-sm">
              <CardContent className="pt-6">
                <div className="flex text-yellow-500 mb-4">
                  ★ ★ ★ ★ ★
                </div>
                <p className="text-muted-foreground italic mb-6">"It made B2C content creation fun again! Finding trending sounds and generating visual hooks for TikTok and Instagram was our biggest bottleneck. Highly recommend to any consumer brand."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm">SL</div>
                  <div>
                    <p className="font-bold text-sm">Sarah L.</p>
                    <p className="text-xs text-muted-foreground">Founder, E-commerce Store</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-border bg-muted/20 py-12 px-6 lg:px-12 text-sm text-muted-foreground flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </div>
            <span className="font-bold text-foreground">ContentVelocity AI</span>
          </div>

          <div className="flex gap-6">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/dashboard" className="hover:text-foreground transition-colors">Login</Link>
          </div>

          <div className="flex gap-6 text-xs">
            <Link href="#" className="hover:underline">Privacy Policy (GDPR)</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-8 text-xs text-center">
          &copy; {new Date().getFullYear()} ContentVelocity AI. All rights reserved. Built for 2026.
        </div>
      </footer>
    </div>
  );
}
