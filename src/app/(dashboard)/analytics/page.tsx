"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoveUpRight, Users, Eye, MousePointerClick, TrendingUp } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight">Analytics & Insights</h2>
                <p className="text-muted-foreground">AI-predicted performance and cross-platform growth metrics.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: "Brand Reach (B2B)", value: "1.2M", increase: "+8%", icon: Eye },
                    { title: "High-Intent Leads", value: "142", increase: "+18%", icon: Users },
                    { title: "Pipeline Influenced", value: "$850K", increase: "+12.4%", icon: TrendingUp },
                    { title: "LinkedIn Engagement", value: "6.8%", increase: "+2.1%", icon: MousePointerClick },
                ].map((stat, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-green-500 flex items-center mt-1">
                                <MoveUpRight className="w-3 h-3 mr-1" /> {stat.increase} from last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="content">Content Performance</TabsTrigger>
                    <TabsTrigger value="audience">Audience Insights</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Growth Over Time</CardTitle>
                                <CardDescription>Followers and engagement across all linked platforms</CardDescription>
                            </CardHeader>
                            <CardContent className="pl-0 h-[300px] flex items-center justify-center border-t border-dashed mt-4 text-muted-foreground">
                                [ Chart Placeholder: Line Graph of Growth ]
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>AI Insights</CardTitle>
                                <CardDescription>Actionable recommendations based on your data</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    "Your 'SaaS Metrics' thought leadership performs 45% better on Tuesday mornings.",
                                    "Posts with a 'Data-Driven' tone generated 2x more LinkedIn bookmarks this week.",
                                    "Try tagging 3 enterprise influencers per thread for a predicted 15% increase in lead velocity."
                                ].map((insight, i) => (
                                    <div key={i} className="flex gap-4 items-start p-3 bg-primary/5 rounded-lg border border-primary/10">
                                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <p className="text-sm leading-relaxed">{insight}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
