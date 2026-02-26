"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, CalendarClock, Link2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUserCategory } from "@/components/user-category-provider";
import { Badge } from "@/components/ui/badge";

export default function CalendarPage() {
    const { category } = useUserCategory();
    const isB2B = category === "B2B";
    const [isScheduling, setIsScheduling] = useState(false);

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 h-[calc(100vh-80px)] flex flex-col">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Content Calendar</h2>
                    <p className="text-muted-foreground">Schedule and manage your {isB2B ? "B2B " : "consumer "}cross-platform content visually.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="hidden md:flex"><CalendarIcon className="w-4 h-4 mr-2" /> Today</Button>
                    <div className="flex border rounded-md overflow-hidden">
                        <Button variant="ghost" size="icon" className="rounded-none h-10 w-10"><ChevronLeft className="h-4 w-4" /></Button>
                        <div className="flex items-center px-4 font-medium border-x">October 2026</div>
                        <Button variant="ghost" size="icon" className="rounded-none h-10 w-10"><ChevronRight className="h-4 w-4" /></Button>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button><Plus className="w-4 h-4 mr-2" /> Schedule Post</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Schedule Post</DialogTitle>
                                <DialogDescription>
                                    Publish directly or send to your Buffer / Hootsuite queues.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                    <Label>Platforms</Label>
                                    <div className="flex flex-wrap gap-2">
                                        {(isB2B ? ["LinkedIn", "X", "YouTube"] : ["Instagram", "TikTok", "Facebook"]).map(platform => (
                                            <Badge key={platform} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                                {platform}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Content Body</Label>
                                    <Textarea placeholder="Write your post here or paste from the Generator..." className="min-h-[100px]" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Date</Label>
                                        <Input type="date" defaultValue="2026-10-15" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Time</Label>
                                        <Input type="time" defaultValue="09:00" />
                                    </div>
                                </div>
                                <div className="space-y-2 pt-2 border-t mt-2">
                                    <Label className="flex items-center text-muted-foreground">
                                        <Link2 className="w-4 h-4 mr-1" /> Integration Route
                                    </Label>
                                    <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option>Buffer API (Default Queue)</option>
                                        <option>Hootsuite Drafts</option>
                                        <option>Direct OAuth Publishing</option>
                                    </select>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={() => setIsScheduling(true)} disabled={isScheduling}>
                                    {isScheduling ? "Sending to Buffer..." : <><CalendarClock className="w-4 h-4 mr-2" /> Schedule via Buffer</>}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                </div>
            </div>

            <Card className="flex-1 flex flex-col">
                <CardHeader className="p-0 border-b">
                    <div className="grid grid-cols-7 text-center font-medium text-sm py-4">
                        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 p-0 grid grid-cols-7 grid-rows-5">
                    {/* Mockup Calendar Grid */}
                    {Array.from({ length: 35 }).map((_, i) => (
                        <div key={i} className="border-b border-r p-2 hover:bg-muted/10 transition group relative">
                            <span className={`text-sm font-medium ${i === 15 ? 'bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center' : 'text-muted-foreground'}`}>{i < 31 ? i + 1 : i - 30}</span>

                            {i === 12 && (
                                <div className="mt-1 text-xs px-2 py-1 bg-pink-500/10 text-pink-600 rounded truncate cursor-grab border border-pink-500/20">
                                    {isB2B ? "Webinar Promo" : "Instagram: Fall Launch"}
                                </div>
                            )}
                            {i === 15 && (
                                <div className="mt-1 text-xs px-2 py-1 gap-1 flex flex-col">
                                    <div className="bg-sky-500/10 text-sky-600 rounded truncate px-2 py-1 cursor-grab border border-sky-500/20">X: Thought Thread</div>
                                    <div className="bg-blue-600/10 text-blue-700 rounded truncate px-2 py-1 cursor-grab border border-blue-600/20">{isB2B ? "LinkedIn: CEO update" : "TikTok: Viral Dance"}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
