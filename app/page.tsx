import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Bot, Receipt, CheckCircle, Smartphone, ShieldCheck, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/our-pot-icon.png" alt="our-pot logo" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold">our-pot</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Button size="sm">Get the App</Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                In Google Play closed testing
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Your AI assistant
                <br />
                <span className="text-primary">for the household pot</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-6 text-pretty max-w-2xl mx-auto">
                Stop the tedious manual entry. Our AI proposes expense entries for you to review and approve.
                You stay in control while your assistant does the heavy lifting.
              </p>

              <p className="text-base text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto">
                We&apos;re currently in Google Play closed testing — click below to join the waitlist for early access.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScC0LbwBFXHehqtXHZ-1k6Xom55tHa-lU8Mb4yuEFcyQO4poA/viewform" target="_blank">
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" disabled>
                  iOS Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">AI that assists, never overrides</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Your intelligent expense tracking assistant that respects your authority
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="p-8 border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Proposals</h3>
                <p className="text-muted-foreground">
                  Tell your AI assistant about expenses in natural language. It drafts entries for your review.
                </p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">You Approve</h3>
                <p className="text-muted-foreground">
                  Nothing touches your ledger without your approval. Review, edit, or reject any AI proposal.
                </p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Bank Linking</h3>
                <p className="text-muted-foreground">
                  No need to connect your bank accounts. Your financial data stays yours.
                </p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Stored Locally</h3>
                <p className="text-muted-foreground">
                  Your expense data lives on your device, not on our servers.
                </p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Receipt className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Categories</h3>
                <p className="text-muted-foreground">
                  AI suggests categories based on context. You always have final say on how things are organized.
                </p>
              </Card>

              <Card className="p-8 border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Non-Destructive History</h3>
                <p className="text-muted-foreground">
                  Rejected proposals are archived, not deleted. Revisit past suggestions anytime.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How it works</h2>
              <p className="text-xl text-muted-foreground text-pretty">The propose and approve workflow</p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Tell Your Assistant</h3>
                <p className="text-muted-foreground">
                  Describe your expenses naturally: &quot;Coffee $4.50, groceries $82 at Woolworths&quot;
                </p>
              </div>

              <div className="text-center group">
                <div className="h-16 w-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/30 transition-all duration-300">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Review Proposals</h3>
                <p className="text-muted-foreground">
                  AI drafts expense entries with smart categorization. Edit or adjust as needed.
                </p>
              </div>

              <div className="text-center group">
                <div className="h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Approve to Record</h3>
                <p className="text-muted-foreground">
                  One tap to approve. Your expenses are recorded only when you say so.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-12 text-center bg-primary text-primary-foreground border-0 shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-shadow duration-300">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Ready to let AI handle the tedious stuff?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
                Track your household expenses with an assistant that respects your control
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScC0LbwBFXHehqtXHZ-1k6Xom55tHa-lU8Mb4yuEFcyQO4poA/viewform" target="_blank">
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" disabled>
                  iOS Coming Soon
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/our-pot-icon.png" alt="our-pot logo" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold">our-pot</span>
              </div>
              <p className="text-sm text-muted-foreground">AI-assisted expense tracking for your household</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#download" className="hover:text-foreground transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="mailto:support@our-pot.com" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>Support: support@our-pot.com</p>
            <p className="mt-2">&copy; 2026 Kivov Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
