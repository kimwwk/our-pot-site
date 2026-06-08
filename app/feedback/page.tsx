import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CannyWidget } from "@/components/canny-widget"

export const metadata = {
  title: "Feedback — our-pot",
  description: "Share feature requests and feedback for our-pot. Vote on ideas and see what's coming next.",
}

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/our-pot-icon.png" alt="our-pot logo" width={36} height={36} className="rounded-lg" />
            <span className="text-2xl font-bold">our-pot</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Feedback</h1>
        <p className="text-muted-foreground mb-8">
          Have an idea or a feature request? Post it below, vote on what matters to you, and follow along as
          we build it.
        </p>

        <CannyWidget />
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Kivov Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
