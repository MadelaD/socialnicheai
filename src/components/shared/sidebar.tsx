"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    WandSparkles,
    TrendingUp,
    Users,
    CalendarDays,
    BarChart3,
    Settings
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const routes = [
    {
        label: "Dashboard",
        icon: Home,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Generate",
        icon: WandSparkles,
        href: "/generate",
        color: "text-violet-500",
    },
    {
        label: "Trends",
        icon: TrendingUp,
        href: "/trends",
        color: "text-pink-500",
    },
    {
        label: "Influencers",
        icon: Users,
        href: "/influencers",
        color: "text-emerald-500",
    },
    {
        label: "Calendar",
        icon: CalendarDays,
        href: "/calendar",
        color: "text-amber-500",
    },
    {
        label: "Analytics",
        icon: BarChart3,
        href: "/analytics",
        color: "text-blue-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
];

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative h-8 w-8 mr-4">
                        {/* You can replace this with a proper Logo component/image */}
                        <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg w-full h-full flex items-center justify-center font-bold text-xl">S</div>
                    </div>
                    <h1 className="font-bold text-2xl tracking-tight">
                        SocialNiche AI
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
