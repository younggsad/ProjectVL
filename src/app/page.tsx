import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function HomePage() {
  return (
   <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top_left,#0b0f1a_0%,#111827_80%)]">
    <div className="space-y-6 text-center">
      <h1 className={cn(
        "text-6xl font-semibold text-white drop-shadow-md",
        font.className,
        )}>
        Auth
      </h1>
      <p className="text-white text-lg">
        An authentication service
      </p>
      <div>
        <LoginButton>
        <Button variant={"secondary"} size="lg">
          Sign in
        </Button>
        </LoginButton>
      </div>
    </div>
   </main>
  );
}
