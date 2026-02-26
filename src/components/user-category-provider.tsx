"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type UserCategory = "B2B" | "B2C";

interface UserCategoryContextType {
    category: UserCategory;
    setCategory: (category: UserCategory) => void;
}

const UserCategoryContext = createContext<UserCategoryContextType | undefined>(undefined);

export function UserCategoryProvider({ children }: { children: React.ReactNode }) {
    const [category, setCategory] = useState<UserCategory>("B2B");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("socialniche_category");
        if (saved && (saved === "B2B" || saved === "B2C")) {
            setCategory(saved);
        }
    }, []);

    const updateCategory = (newCategory: UserCategory) => {
        setCategory(newCategory);
        localStorage.setItem("socialniche_category", newCategory);
    };

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <UserCategoryContext.Provider value={{ category, setCategory: updateCategory }}>
            {children}
        </UserCategoryContext.Provider>
    );
}

export function useUserCategory() {
    const context = useContext(UserCategoryContext);
    if (context === undefined) {
        throw new Error("useUserCategory must be used within a UserCategoryProvider");
    }
    return context;
}
