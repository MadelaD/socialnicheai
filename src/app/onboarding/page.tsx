"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUserCategory } from "@/components/user-category-provider";
import { Building2, ShoppingBag } from "lucide-react";

export default function OnboardingWizard() {
    const router = useRouter();
    const { category, setCategory } = useUserCategory();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        brandName: "",
        niche: "",
        targetAudience: "",
        platforms: [] as string[],
        voiceTone: "",
        goals: "",
    });

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    const handleComplete = async () => {
        setLoading(true);
        // In a real app, save formData to Supabase here
        setTimeout(() => {
            setLoading(false);
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <div className="h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
            <Card className="w-full max-w-2xl shadow-lg border-primary/10">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground font-medium">Step {step} of 4</span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`h-2 w-8 rounded-full ${step >= i ? 'bg-primary' : 'bg-primary/20'}`} />
                            ))}
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        {step === 1 && "How do you do business?"}
                        {step === 2 && `Welcome! Let's build your ${category} profile.`}
                        {step === 3 && "Where does your target audience live?"}
                        {step === 4 && `Define your ${category === "B2B" ? "executive" : "brand"} voice.`}
                    </CardTitle>
                    <CardDescription>
                        {step === 1 && "We'll tailor the entire ContentVelocity experience to your category."}
                        {step === 2 && `Tell the AI about your ${category === "B2B" ? "company" : "brand"} to generate hyper-relevant content.`}
                        {step === 3 && "Select the main channels you want to dominate."}
                        {step === 4 && `How should the AI sound when writing for your ${category === "B2B" ? "brand or executives" : "consumers"}?`}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-4">
                    {step === 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div
                                onClick={() => setCategory("B2B")}
                                className={`p-6 border rounded-xl cursor-pointer hover:border-primary transition flex flex-col items-center text-center space-y-3 ${category === 'B2B' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border'}`}
                            >
                                <div className="p-3 bg-muted rounded-full">
                                    <Building2 className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">B2B / SaaS</h3>
                                    <p className="text-sm text-muted-foreground">Software, consulting, enterprise, fintech, agencies</p>
                                </div>
                            </div>
                            <div
                                onClick={() => setCategory("B2C")}
                                className={`p-6 border rounded-xl cursor-pointer hover:border-primary transition flex flex-col items-center text-center space-y-3 ${category === 'B2C' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border'}`}
                            >
                                <div className="p-3 bg-muted rounded-full">
                                    <ShoppingBag className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">B2C / Lifestyle</h3>
                                    <p className="text-sm text-muted-foreground">E-commerce, retail, fashion, food, lifestyle creators</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-2">
                                <Label htmlFor="brandName">{category === "B2B" ? "Company or Executive Name" : "Brand or Creator Name"}</Label>
                                <Input
                                    id="brandName"
                                    placeholder={category === "B2B" ? "e.g. Acme SaaS / Jane Doe" : "e.g. EcoStyle Designs / Alex"}
                                    value={formData.brandName}
                                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="niche">{category} Niche / Industry</Label>
                                    <Input
                                        id="niche"
                                        placeholder={category === "B2B" ? "e.g. Fintech, Enterprise AI" : "e.g. Sustainable Fashion, Coffee"}
                                        value={formData.niche}
                                        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="targetAudience">Target Audience</Label>
                                    <Input
                                        id="targetAudience"
                                        placeholder={category === "B2B" ? "e.g. C-Suite Execs, DevOps Leaders" : "e.g. Gen Z, Yoga Enthusiasts"}
                                        value={formData.targetAudience}
                                        onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {(category === "B2B"
                                ? ["LinkedIn", "X / Twitter", "YouTube", "Newsletter", "Company Blog", "Webinars"]
                                : ["Instagram", "TikTok", "Facebook", "X / Twitter", "YouTube", "Pinterest"]
                            ).map((platform) => (
                                <div
                                    key={platform}
                                    onClick={() => {
                                        const isSelected = formData.platforms.includes(platform);
                                        setFormData(prev => ({
                                            ...prev,
                                            platforms: isSelected
                                                ? prev.platforms.filter(p => p !== platform)
                                                : [...prev.platforms, platform]
                                        }))
                                    }}
                                    className={`p-4 border rounded-xl cursor-pointer hover:border-primary transition ${formData.platforms.includes(platform) ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border'}`}
                                >
                                    <p className="font-medium text-center">{platform}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-2">
                                <Label htmlFor="voice">{category === "B2B" ? "Executive Voice" : "Brand Voice"} / Tone description</Label>
                                <Textarea
                                    id="voice"
                                    placeholder={category === "B2B" ? "e.g. Professional yet insightful, data-driven..." : "e.g. Fun, witty, inspiring, colorful..."}
                                    className="min-h-[100px]"
                                    value={formData.voiceTone}
                                    onChange={(e) => setFormData({ ...formData, voiceTone: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="goals">Main {category} Marketing Goals</Label>
                                <Input
                                    id="goals"
                                    placeholder={category === "B2B" ? "e.g. Lead generation, thought leadership" : "e.g. Drive sales, brand awareness, viral reach"}
                                    value={formData.goals}
                                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                                />
                            </div>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex justify-between border-t pt-6 bg-muted/40 rounded-b-xl">
                    <Button variant="outline" onClick={handleBack} disabled={step === 1 || loading}>
                        Back
                    </Button>
                    {step < 4 ? (
                        <Button onClick={handleNext} className="min-w-[100px]">
                            Continue
                        </Button>
                    ) : (
                        <Button onClick={handleComplete} disabled={loading} className="min-w-[150px]">
                            {loading ? "Generating Profile..." : "Complete Setup"}
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
