import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
            <div className="w-full max-w-md">
                <SignIn appearance={{ elements: { rootBox: "w-full", card: "w-full shadow-xl" } }} routing="hash" />
            </div>
        </div>
    );
}
