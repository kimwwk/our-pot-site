import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function PrivacyPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <p className="text-muted-foreground mb-8">Last updated: January 3, 2026</p>
          </section>
        </div>
        <iframe
          src="/terms.html"
          className="w-full h-screen border-0 bg-white"
        />
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 our-pot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
