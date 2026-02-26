import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { UserCategoryProvider } from "@/components/user-category-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SocialNiche AI",
  description: "Supercharge your social media with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserCategoryProvider>
            {children}
            <Toaster />
          </UserCategoryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
