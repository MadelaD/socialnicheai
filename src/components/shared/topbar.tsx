"use client";

import { MobileSidebar } from "@/components/shared/mobile-sidebar";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export const Topbar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="flex w-full justify-end items-center gap-4">
                <ThemeToggle />
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">U</div>
            </div>
        </div>
    );
};
