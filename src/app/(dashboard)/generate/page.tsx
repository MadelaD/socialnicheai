"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WandSparkles, Sparkles, Copy, CheckCircle2, RotateCcw, ThumbsUp, ThumbsDown, Image as ImageIcon, Video, CalendarClock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useUserCategory } from "@/components/user-category-provider";
import { Switch } from "@/components/ui/switch";

export default function GeneratePage() {
    const { category } = useUserCategory();
    const isB2B = category === "B2B";

    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [generated, setGenerated] = useState(false);
    const [generateMedia, setGenerateMedia] = useState(false);

    const handleGenerate = () => {
        setLoading(true);
        // Simulate generation delay
        setTimeout(() => {
            setLoading(false);
            setGenerated(true);
        }, 2000);
    };

    const platforms = isB2B
        ? ["LinkedIn", "X / Twitter", "YouTube", "Newsletter", "Blog"]
        : ["Instagram", "TikTok", "Facebook", "X / Twitter", "YouTube"];

    const inspirePrompt = isB2B
        ? "Trending: How AI is reshaping B2B enterprise sales cycles."
        : "Trending: The rise of sustainable fashion drops for Gen Z.";

    const placeholderText = isB2B
        ? "e.g. Generate 3 LinkedIn posts about our new enterprise software update. Focus on ROI, security, and deployment speed."
        : "e.g. Generate 3 Instagram posts highlighting our new summer collection. Focus on eco-friendly materials and vibrant colors.";

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight">AI Content Generator</h2>
                <p className="text-muted-foreground">
                    {isB2B
                        ? "Create highly engaging, completely original thought leadership tailored to your B2B audience."
                        : "Create viral, highly engaging content tailored to your consumer audience."}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Input Section */}
                <div className="lg:col-span-5 space-y-6">
                    <Card>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <Label>What do you want to post about?</Label>
                                    <Button variant="ghost" size="sm" className="text-xs text-primary" onClick={() => setPrompt(inspirePrompt)}>
                                        <Sparkles className="w-3 h-3 mr-1" /> Inspire Me
                                    </Button>
                                </div>
                                <Textarea
                                    placeholder={placeholderText}
                                    className="min-h-[150px] resize-none text-base"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                />
                            </div>

                            <div className="space-y-3">
                                <Label>Target Platforms</Label>
                                <div className="flex flex-wrap gap-2">
                                    {platforms.map((platform) => (
                                        <Badge key={platform} variant="outline" className="cursor-pointer hover:bg-primary/5 py-1.5 px-3">
                                            {platform}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>{isB2B ? "Executive Tone" : "Brand Voice"}</Label>
                                    <Input placeholder={isB2B ? "e.g. Professional, Authoritative" : "e.g. Fun, Engaging, Witty"} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Post Type</Label>
                                    <Input placeholder={isB2B ? "e.g. Article, Thread, Webinar" : "e.g. Reel Script, Carousel"} />
                                </div>
                            </div>

                            {/* Media Generation Toggle */}
                            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                                <div className="space-y-0.5">
                                    <Label className="text-base font-semibold flex items-center">
                                        <ImageIcon className="w-4 h-4 mr-2 text-primary" /> Auto-Generate Media
                                    </Label>
                                    <p className="text-sm text-muted-foreground">
                                        Use AI (DALL-E 3 / Pika) to create images and video clips.
                                    </p>
                                </div>
                                <Switch checked={generateMedia} onCheckedChange={setGenerateMedia} />
                            </div>

                            <Button
                                className="w-full text-lg h-12 mt-4 transition-all"
                                onClick={handleGenerate}
                                disabled={loading || prompt.length < 5}
                            >
                                {loading ? (
                                    <span className="flex items-center animate-pulse">
                                        <WandSparkles className="mr-2 h-5 w-5 animate-spin-slow" /> Brewing viral magic...
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        <WandSparkles className="mr-2 h-5 w-5" /> Generate Magic
                                    </span>
                                )}
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Output Section */}
                <div className="lg:col-span-7">
                    <Card className={`h-full border-dashed border-2 relative overflow-hidden transition-colors ${generated ? 'border-border border-solid bg-card' : 'border-border/50 bg-muted/20'}`}>
                        {!generated && !loading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-8 text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-medium text-foreground">Awaiting your command</h3>
                                <p>Fill out the details on the left, and watch the AI craft perfect, highly-optimized content tailored for each selected platform.</p>
                            </div>
                        )}

                        {loading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-6 bg-background/50 backdrop-blur-sm z-10">
                                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-lg font-medium animate-pulse">
                                    {generateMedia ? "Generating text, reasoning images, and rendering video clips..." : "Analyzing trends & enforcing originality..."}
                                </p>
                            </div>
                        )}

                        {generated && (
                            <CardContent className="p-0 h-full flex flex-col animate-in fade-in zoom-in-95 duration-500">
                                <div className="p-4 border-b bg-muted/40 flex justify-between items-center">
                                    <div className="flex border rounded-full px-3 py-1 bg-green-500/10 text-green-600 items-center text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 mr-2" /> 100% Original Content
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-green-500"><ThumbsUp className="w-4 h-4" /></Button>
                                        <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-red-500"><ThumbsDown className="w-4 h-4" /></Button>
                                    </div>
                                </div>

                                <Tabs defaultValue={isB2B ? "linkedin" : "instagram"} className="w-full flex-1 flex flex-col">
                                    <div className="px-6 pt-4">
                                        <TabsList className="grid w-full grid-cols-3">
                                            {isB2B ? (
                                                <>
                                                    <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
                                                    <TabsTrigger value="twitter">X / Twitter</TabsTrigger>
                                                    <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
                                                </>
                                            ) : (
                                                <>
                                                    <TabsTrigger value="instagram">Instagram</TabsTrigger>
                                                    <TabsTrigger value="tiktok">TikTok</TabsTrigger>
                                                    <TabsTrigger value="facebook">Facebook</TabsTrigger>
                                                </>
                                            )}
                                        </TabsList>
                                    </div>

                                    <div className="flex-1 p-6 relative">
                                        {isB2B ? (
                                            <TabsContent value="linkedin" className="h-full m-0 space-y-4">
                                                <div className="border rounded-xl shadow-sm bg-white dark:bg-zinc-900 overflow-hidden max-w-lg mx-auto">
                                                    <div className="flex items-center p-4 border-b">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 mr-3 flex items-center justify-center text-white font-bold text-sm">You</div>
                                                        <div>
                                                            <span className="font-semibold text-sm">Your Executive Name</span>
                                                            <p className="text-xs text-muted-foreground">B2B SaaS Leader | Innovating Enterprise Tech</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 text-sm space-y-3 max-h-[350px] overflow-y-auto">
                                                        <p>Many SaaS companies struggle with churn because they treat customer success as a reactive support function, not a proactive growth engine. 💡</p>

                                                        {generateMedia && (
                                                            <div className="my-4 aspect-video bg-muted rounded-lg flex flex-col items-center justify-center text-muted-foreground relative overflow-hidden group border border-border">
                                                                <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                                                                <span className="text-xs font-medium">Auto-generated Infographic (DALL·E 3)</span>
                                                                <span className="text-[10px] opacity-70">"3 SaaS Retention Frameworks Chart"</span>
                                                            </div>
                                                        )}

                                                        <p>Here are 3 frameworks we deployed at [YourBrand] to reduce enterprise churn by 14% last quarter:</p>
                                                        <p>1️⃣ Value-based onboarding over feature-based onboarding.<br />
                                                            2️⃣ Executive business reviews (EBRs) every 90 days, no exceptions.<br />
                                                            3️⃣ Tying CS compensation to net revenue retention, not just renewals.</p>
                                                        <p>What strategy had the biggest impact on your retention metrics? Let's discuss in the comments. 👇</p>
                                                        <p className="text-blue-600 dark:text-blue-400">#CustomerSuccess #SaaSGrowth #B2B #Leadership</p>
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        ) : (
                                            <TabsContent value="instagram" className="h-full m-0 space-y-4">
                                                <div className="border rounded-xl shadow-sm bg-white dark:bg-zinc-900 overflow-hidden max-w-sm mx-auto">
                                                    <div className="flex items-center justify-between p-3 border-b">
                                                        <div className="flex items-center">
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 mr-2 flex items-center justify-center text-white font-bold text-xs">B</div>
                                                            <span className="font-semibold text-sm">YourBrand</span>
                                                        </div>
                                                        <span className="text-xl font-bold pb-2">...</span>
                                                    </div>

                                                    {/* Media area for IG */}
                                                    <div className="aspect-square bg-muted flex flex-col items-center justify-center text-muted-foreground relative overflow-hidden border-b border-border">
                                                        {generateMedia ? (
                                                            <>
                                                                <Video className="w-10 h-10 mb-2 opacity-50" />
                                                                <span className="text-xs font-medium bg-black/50 text-white px-2 py-1 rounded-md mb-1 absolute bottom-2 right-2 flex items-center gap-1">
                                                                    <Sparkles className="w-3 h-3" /> Pika Video
                                                                </span>
                                                                <span className="text-[10px] opacity-70 px-4 text-center">"Short looping clip of model wearing sustainable clothing in a sunny field"</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <ImageIcon className="w-10 h-10 mb-2 opacity-20" />
                                                                <span className="text-xs opacity-50">Image Placeholder</span>
                                                            </>
                                                        )}
                                                    </div>

                                                    <div className="p-4 text-sm space-y-2 max-h-[200px] overflow-y-auto">
                                                        <p>
                                                            <span className="font-semibold mr-2">YourBrand</span>
                                                            Fast fashion is out. Sustainable futures are IN. 🌱✨
                                                        </p>
                                                        <p>Meet our new summer collection, crafted entirely from 100% recycled materials and powered by renewable energy. Because looking good shouldn't cost the Earth.</p>
                                                        <p>Tap the link in our bio to shop the drop before it's gone! 🛍️</p>
                                                        <p className="text-blue-600 dark:text-blue-400">#EcoFashion #SustainableStyle #OOTD #Y2KAesthetic</p>
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        )}
                                        {/* Other Tabs Content Stubbed */}
                                        <TabsContent value="twitter" className="h-full m-0 hidden text-muted-foreground">X Thread Preview (1/5)</TabsContent>
                                        <TabsContent value="tiktok" className="h-full m-0 hidden text-muted-foreground">TikTok Script & Video Preview</TabsContent>
                                        <TabsContent value="newsletter" className="h-full m-0 hidden text-muted-foreground">Email Newsletter Draft</TabsContent>
                                    </div>

                                    <div className="p-4 border-t bg-muted/20 flex gap-2 justify-end">
                                        <Button variant="outline" size="sm">
                                            <RotateCcw className="w-4 h-4 mr-2" /> Regenerate
                                        </Button>
                                        {/* Mock Integration for Scheduling */}
                                        <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
                                            <CalendarClock className="w-4 h-4 mr-2" /> Schedule (Buffer)
                                        </Button>
                                        <Button size="sm">
                                            <Copy className="w-4 h-4 mr-2" /> Copy to Clipboard
                                        </Button>
                                    </div>
                                </Tabs>
                            </CardContent>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
}
