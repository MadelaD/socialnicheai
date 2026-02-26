import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
            <div className="w-full max-w-md">
                <SignUp appearance={{ elements: { rootBox: "w-full", card: "w-full shadow-xl" } }} routing="hash" />
            </div>
        </div>
    );
}
