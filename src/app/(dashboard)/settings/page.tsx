"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUserCategory } from "@/components/user-category-provider";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Instagram, Linkedin, Twitter, Settings as SettingsIcon, Link2, Bell, Shield, CalendarClock } from "lucide-react";

export default function SettingsPage() {
    const { category, setCategory } = useUserCategory();

    // Mock connected state
    const [connected, setConnected] = useState({
        buffer: true,
        linkedin: false,
        twitter: true,
        instagram: false
    });

    const toggleConnection = (platform: keyof typeof connected) => {
        setConnected(prev => ({ ...prev, [platform]: !prev[platform] }));
    };

    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage your brand profile, integrations, and application preferences.</p>
            </div>

            <Tabs defaultValue="integrations" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-grid">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="integrations">Integrations</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Category Preference</CardTitle>
                            <CardDescription>
                                Toggle the entire platform between B2B and B2C layouts. This changes your dashboard widgets, AI generation templates, and influencer networks.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Label className="text-sm font-medium">Platform Mode:</Label>
                                <div className="flex items-center space-x-2 border p-1 rounded-lg">
                                    <Button
                                        variant={category === "B2B" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setCategory("B2B")}
                                    >
                                        B2B / SaaS
                                    </Button>
                                    <Button
                                        variant={category === "B2C" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setCategory("B2C")}
                                    >
                                        B2C / Creator
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="integrations" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Scheduling & Publishing</CardTitle>
                            <CardDescription>
                                Connect your third-party scheduling tools or authenticate directly with social platforms to post directly from SocialNiche AI.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">

                            {/* Buffer Mock */}
                            <div className="flex items-center justify-between p-4 border rounded-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <CalendarClock className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold flex items-center gap-2">
                                            Buffer API Integration
                                            {connected.buffer && <Badge variant="secondary" className="bg-green-500/10 text-green-600"><CheckCircle2 className="w-3 h-3 mr-1" /> Connected</Badge>}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">Schedule generated posts directly to your Buffer queues.</p>
                                    </div>
                                </div>
                                <Button
                                    variant={connected.buffer ? "outline" : "default"}
                                    onClick={() => toggleConnection("buffer")}
                                >
                                    {connected.buffer ? "Disconnect" : "Connect Buffer"}
                                </Button>
                            </div>

                            <div className="space-y-4 pt-4 border-t">
                                <h4 className="font-semibold">Direct Social Connections</h4>
                                <p className="text-sm text-muted-foreground">Authenticate to post immediately without a scheduling tool.</p>

                                {/* LinkedIn Mock */}
                                <div className="flex items-center justify-between p-4 border rounded-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                            <Linkedin className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">LinkedIn</h4>
                                            <p className="text-sm text-muted-foreground">{connected.linkedin ? "Connected as Jane Doe" : "Not connected"}</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant={connected.linkedin ? "outline" : "secondary"} onClick={() => toggleConnection("linkedin")}>
                                        {connected.linkedin ? "Disconnect" : <><Link2 className="w-4 h-4 mr-2" /> Connect</>}
                                    </Button>
                                </div>

                                {/* Twitter Mock */}
                                <div className="flex items-center justify-between p-4 border rounded-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
                                            <Twitter className="w-5 h-5 text-sky-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">X / Twitter</h4>
                                            <p className="text-sm text-muted-foreground">{connected.twitter ? "Connected as @yourbrand" : "Not connected"}</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant={connected.twitter ? "outline" : "secondary"} onClick={() => toggleConnection("twitter")}>
                                        {connected.twitter ? "Disconnect" : <><Link2 className="w-4 h-4 mr-2" /> Connect</>}
                                    </Button>
                                </div>

                                {/* Instagram Mock */}
                                <div className="flex items-center justify-between p-4 border rounded-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                                            <Instagram className="w-5 h-5 text-pink-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Instagram Business</h4>
                                            <p className="text-sm text-muted-foreground">{connected.instagram ? "Connected" : "Requires Meta Business Account"}</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant={connected.instagram ? "outline" : "secondary"} onClick={() => toggleConnection("instagram")}>
                                        {connected.instagram ? "Disconnect" : <><Link2 className="w-4 h-4 mr-2" /> Connect</>}
                                    </Button>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Email & Push</CardTitle>
                        </CardHeader>
                        <CardContent className="h-32 flex items-center justify-center text-muted-foreground border-t border-dashed mt-4 mx-4 mb-4">
                            Notification settings placeholder.
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="billing" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Subscription & API Usage</CardTitle>
                        </CardHeader>
                        <CardContent className="h-32 flex items-center justify-center text-muted-foreground border-t border-dashed mt-4 mx-4 mb-4">
                            Billing placeholder.
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

        </div>
    );
}
