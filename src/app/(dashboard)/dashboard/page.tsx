"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MessageSquare, TrendingUp, Users, ShoppingBag, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUserCategory } from "@/components/user-category-provider";

export default function DashboardPage() {
    const { category } = useUserCategory();
    const isB2B = category === "B2B";

    const trends = isB2B ? [
        { title: "SaaS Churn Reduction Strategies", score: 98 },
        { title: "Enterprise AI Adoption KPIs", score: 94 },
        { title: "Product-Led Growth in Fintech", score: 89 }
    ] : [
        { title: "Sustainable Y2K Fashion", score: 98 },
        { title: "Matcha Skincare Routine", score: 96 },
        { title: "Quiet Luxury Aesthetics", score: 91 }
    ];

    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">{isB2B ? "B2B Dashboard" : "Creator Dashboard"}</h2>
                    <p className="text-muted-foreground mt-1">{isB2B ? "Scale your executive voice across platforms." : "Grow your audience and drive viral engagement."}</p>
                </div>
                <Button>
                    {isB2B ? "Generate B2B Concept" : "Generate Viral Idea"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>

            {/* Per-platform Summary Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {isB2B ? "LinkedIn Engagement" : "Instagram Growth"}
                        </CardTitle>
                        {isB2B ? <MessageSquare className="h-4 w-4 text-blue-600" /> : <Instagram className="h-4 w-4 text-pink-600" />}
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{isB2B ? "5.4%" : "+12.4%"}</div>
                        <p className="text-xs text-green-500 font-medium">
                            {isB2B ? "+1.2% from last month" : "+4.1% from last month"}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {isB2B ? "X (Twitter) Reach" : "TikTok Views"}
                        </CardTitle>
                        <TrendingUp className={`h-4 w-4 ${isB2B ? 'text-sky-500' : 'text-black dark:text-white'}`} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{isB2B ? "1.2M" : "4.5M"}</div>
                        <p className="text-xs text-green-500 font-medium">
                            {isB2B ? "+12% this week" : "+24% this week"}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Avg. Originality
                        </CardTitle>
                        <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">100%</div>
                        <p className="text-xs text-muted-foreground">
                            Safe for commercial use
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {isB2B ? "Executive Leads Mapped" : "Store Conversions"}
                        </CardTitle>
                        {isB2B ? <Users className="h-4 w-4 text-orange-500" /> : <ShoppingBag className="h-4 w-4 text-purple-500" />}
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{isB2B ? "84" : "1,204"}</div>
                        <p className="text-xs text-green-500 font-medium">
                            {isB2B ? "+14 new prospects" : "+14% higher CR"}
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>{isB2B ? "Recent LinkedIn Thought Pieces" : "Recent Visual Content / Reels"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {/* Carousel placeholder */}
                        <div className="h-[250px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg bg-muted/20 text-muted-foreground gap-4 px-6 text-center">
                            <ArrowRight className="h-8 w-8 text-muted-foreground/50" />
                            <p>{isB2B ? "No recent thought leadership generated yet." : "No recent viral posts generated yet."}</p>
                            <Button variant="outline" size="sm">Create your first {isB2B ? "B2B" : "consumer"} post</Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>{isB2B ? "Trending B2B Topics" : "Trending Consumer Topics"}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Trends stub */}
                        <div className="space-y-4">
                            {trends.map((trend, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs mr-3">
                                        #{i + 1}
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">{trend.title}</p>
                                        <div className="flex items-center text-xs text-muted-foreground gap-2 pt-1">
                                            <span className="flex items-center"><TrendingUp className="w-3 h-3 mr-1 text-green-500" /> Virality: {trend.score}%</span>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="h-8 text-xs">Draft</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
