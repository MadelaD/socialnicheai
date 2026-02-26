"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Search, Filter, MessageSquare, Instagram, Twitter, ExternalLink, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Globe } from "lucide-react";
import { useUserCategory } from "@/components/user-category-provider";

export default function InfluencersPage() {
    const { category } = useUserCategory();
    const isB2B = category === "B2B";

    const influencers = isB2B ? [
        {
            id: 1,
            name: "Elena Rodriguez",
            handle: "Elena Rodriguez",
            platform: "LinkedIn",
            activePlatforms: ["LinkedIn", "X / Twitter"],
            followers: "128K",
            engagementRate: "4.2%",
            niche: "SaaS Marketing",
            matchScore: 98,
            bio: "Former CMO at top SaaS scale-ups. Writing about PLG, go-to-market strategies, and B2B growth.",
            recentPostMetrics: "Avg 5.3k likes • 120 comments"
        },
        {
            id: 2,
            name: "Marcus Chen",
            handle: "@techmarcus",
            platform: "Twitter",
            activePlatforms: ["X / Twitter", "Newsletter"],
            followers: "45K",
            engagementRate: "6.1%",
            niche: "Enterprise AI",
            matchScore: 91,
            bio: "Reviewing the latest in enterprise AI architecture and LLM deployment models for large corporations.",
            recentPostMetrics: "Avg 200 RTs • 1.5k likes"
        },
        {
            id: 3,
            name: "Sarah Jenkins",
            handle: "Sarah Jenkins",
            platform: "LinkedIn",
            activePlatforms: ["LinkedIn", "YouTube"],
            followers: "450K",
            engagementRate: "8.5%",
            niche: "Venture Capital",
            matchScore: 88,
            bio: "Partner at NextGen VC. Tweeting about SaaS metrics, fundraising, and startup board management.",
            recentPostMetrics: "Avg 100k views • 5k likes"
        },
        {
            id: 4,
            name: "David Alston",
            handle: "@dave_devops",
            platform: "Twitter",
            activePlatforms: ["X / Twitter", "LinkedIn", "Blog"],
            followers: "89K",
            engagementRate: "3.7%",
            niche: "DevOps & Cloud",
            matchScore: 82,
            bio: "Cloud architect. Breaking down complex AWS/Azure infrastructure for engineering leaders.",
            recentPostMetrics: "Avg 3k likes • 80 comments"
        }
    ] : [
        {
            id: 1,
            name: "Emma Style",
            handle: "@emmastyle",
            platform: "Instagram",
            activePlatforms: ["Instagram", "TikTok", "Pinterest"],
            followers: "850K",
            engagementRate: "7.2%",
            niche: "Sustainable Fashion",
            matchScore: 98,
            bio: "Lookbook creator focusing on thrifted, upcycled, and eco-friendly brands.",
            recentPostMetrics: "Avg 25k likes • 800 comments"
        },
        {
            id: 2,
            name: "Julian Rivera",
            handle: "@julian_eats",
            platform: "TikTok",
            activePlatforms: ["TikTok", "Instagram"],
            followers: "1.2M",
            engagementRate: "11.1%",
            niche: "Food & Wellness",
            matchScore: 91,
            bio: "Matcha addict and wellness enthusiast. Sharing aesthetic morning routines and recipes.",
            recentPostMetrics: "Avg 1M views • 150k likes"
        },
        {
            id: 3,
            name: "Chloe & Sam",
            handle: "@chloesam_home",
            platform: "Instagram",
            activePlatforms: ["Instagram", "YouTube Segment"],
            followers: "320K",
            engagementRate: "5.5%",
            niche: "Quiet Luxury Decor",
            matchScore: 88,
            bio: "Designing minimalist, old-money aesthetic homes on a budget.",
            recentPostMetrics: "Avg 12k likes • 400 saves"
        },
        {
            id: 4,
            name: "Tech Nostalgia",
            handle: "@y2kgadgets",
            platform: "TikTok",
            activePlatforms: ["TikTok", "X / Twitter"],
            followers: "540K",
            engagementRate: "9.7%",
            niche: "Retro Tech",
            matchScore: 82,
            bio: "Your daily dose of 2000s tech nostalgia. Flip phones and digital cameras are back.",
            recentPostMetrics: "Avg 500k views • 60k likes"
        }
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Influencer Discovery</h2>
                    <p className="text-muted-foreground">Find perfect {isB2B ? "industry leaders" : "creators"} for your next campaign.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search niche, handle..." className="pl-10" />
                    </div>
                    <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" /> Filters
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {influencers.map((inf) => (
                    <Card key={inf.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-20 bg-gradient-to-r from-primary/10 to-primary/5 text-primary flex items-center justify-end px-4 font-bold text-sm">
                            <Star className="w-4 h-4 mr-1 fill-primary" /> {inf.matchScore}% Match
                        </div>

                        <div className="px-6 relative flex justify-center">
                            <Avatar className="h-20 w-20 border-4 border-background -mt-10 mb-4">
                                <AvatarFallback className="bg-primary/20 text-primary font-bold text-xl">{inf.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </div>

                        <CardHeader className="pt-0 text-center pb-2">
                            <CardTitle className="text-lg">{inf.name}</CardTitle>
                            <CardDescription className="flex items-center justify-center gap-1 font-medium text-xs mt-1">
                                {inf.platform === 'Instagram' && <Instagram className="w-3 h-3 text-pink-500" />}
                                {inf.platform === 'Twitter' && <Twitter className="w-3 h-3 text-sky-500" />}
                                {inf.platform === 'LinkedIn' && <Linkedin className="w-3 h-3 text-blue-600" />}
                                {inf.platform === 'TikTok' && <svg className="w-3 h-3 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>}
                                {inf.handle}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4 text-center">
                            <div className="flex justify-center gap-2">
                                <Badge variant="secondary">{inf.niche}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {inf.bio}
                            </p>

                            {/* Active Platforms */}
                            <div className="text-xs text-muted-foreground pt-1 flex flex-col items-center">
                                <div className="flex items-center gap-1 mb-1">
                                    <Globe className="w-3 h-3" /> Active On:
                                </div>
                                <div className="flex flex-wrap gap-1 justify-center">
                                    {inf.activePlatforms.map(p => (
                                        <Badge key={p} variant="outline" className="text-[10px] px-1 py-0 h-4">{p}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 border rounded-lg p-3 bg-muted/40">
                                <div className="p-1">
                                    <p className="text-xs text-muted-foreground font-medium">Followers</p>
                                    <p className="font-bold text-sm">{inf.followers}</p>
                                </div>
                                <div className="p-1">
                                    <p className="text-xs text-muted-foreground font-medium">Engagement</p>
                                    <p className="font-bold text-sm text-green-600">{inf.engagementRate}</p>
                                </div>
                                <div className="col-span-2 pt-2 border-t mt-1">
                                    <p className="text-[10px] text-muted-foreground">{inf.recentPostMetrics}</p>
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="flex gap-2 bg-muted/20 border-t pt-4">
                            <Button variant="default" className="w-full" size="sm">
                                <MessageSquare className="w-4 h-4 mr-2" /> Reach Out
                            </Button>
                            <Button variant="outline" size="icon" className="w-10 shrink-0">
                                <ExternalLink className="w-4 h-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
