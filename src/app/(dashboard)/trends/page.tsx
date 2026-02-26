"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowUpRight, Search, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useUserCategory } from "@/components/user-category-provider";

export default function TrendsPage() {
    const { category } = useUserCategory();
    const isB2B = category === "B2B";

    const trends = isB2B ? [
        {
            id: 1,
            topic: "AI-Driven Sales Forecasting",
            virality: 98,
            keywords: ["#B2BSales", "PredictiveAI", "RevOps"],
            description: "A sudden spike in interest around replacing manual pipeline reviews with predictive AI models.",
            reach: "2.4M",
        },
        {
            id: 2,
            topic: "Product-Led Growth (PLG) for Enterprise",
            virality: 92,
            keywords: ["#PLG", "SaaSGrowth", "EnterpriseSoftware"],
            description: "Debates on how traditional top-down enterprise sales are being disrupted by modern PLG motions.",
            reach: "8.1M",
        },
        {
            id: 3,
            topic: "Reducing SaaS Churn 2026",
            virality: 85,
            keywords: ["#CustomerSuccess", "ChurnReduction", "SaaSMetrics"],
            description: "High engagement around proactive customer success frameworks over reactive support tickets.",
            reach: "1.2M",
        },
        {
            id: 4,
            topic: "Zero-Trust Security Adoption",
            virality: 89,
            keywords: ["#Cybersecurity", "ZeroTrust", "CIOInsights"],
            description: "CISO and CIO networks discussing the immediate transition to zero-trust architecture post-breaches.",
            reach: "4.5M",
        }
    ] : [
        {
            id: 1,
            topic: "Sustainable Tech Wear",
            virality: 98,
            keywords: ["#EcoFashion", "Recycled", "TechWear"],
            description: "A sudden spike in interest around clothing that integrates technology while using 100% recycled materials.",
            reach: "2.4M",
        },
        {
            id: 2,
            topic: "Quiet Luxury Aesthetics",
            virality: 92,
            keywords: ["#QuietLuxury", "Minimalist", "OldMoney"],
            description: "High-quality, minimalist clothing without overt logos is dominating TikTok and Instagram Reels.",
            reach: "8.1M",
        },
        {
            id: 3,
            topic: "Matcha Everything",
            virality: 85,
            keywords: ["#Matcha", "CafeAesthetic", "Wellness"],
            description: "From skincare to lattes, matcha-colored and flavored products are seeing huge engagement.",
            reach: "1.2M",
        },
        {
            id: 4,
            topic: "Nostalgic 2000s Gadgets",
            virality: 89,
            keywords: ["#Y2K", "RetroTech", "FlipPhones"],
            description: "Gen Z's obsession with early 2000s technology, specifically digital cameras and flip phones.",
            reach: "4.5M",
        }
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Trends & Keywords</h2>
                    <p className="text-muted-foreground">Discover what's going viral in your {isB2B ? "industry" : "consumer niche"} right now.</p>
                </div>
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search trends..." className="pl-10" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {trends.map((trend) => (
                    <Card key={trend.id} className="flex flex-col hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <TrendingUp className="w-24 h-24 text-primary" />
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                    <Zap className="h-3 w-3 mr-1" /> {trend.virality}% Virality
                                </Badge>
                                <span className="text-xs text-muted-foreground font-medium">{trend.reach} Reach</span>
                            </div>
                            <CardTitle className="text-xl">{trend.topic}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                            <p className="text-sm text-muted-foreground">
                                {trend.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {trend.keywords.map(kw => (
                                    <Badge key={kw} variant="outline" className="text-xs text-muted-foreground">{kw}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4 bg-muted/20">
                            <Button variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                Generate Idea <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
