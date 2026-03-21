import { useNavigate } from "react-router-dom"
import { ArrowRight, Building2, BarChart3, Zap, Globe, Heart, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-svh bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/30 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
                <span className="text-lg font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-semibold text-primary">Spark</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
                Features
              </button>
              <button className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
                About
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/login")}
                className="text-foreground"
              >
                Login
              </Button>
              <Button
                size="sm"
                onClick={() => navigate("/")}
                className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary hover:to-secondary"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2">
              <Zap className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Empowering Communities, One Facility at a Time
              </span>
            </div>

            <h1 className="font-plus-jakarta-sans bg-gradient-to-b from-primary via-primary to-primary/80 bg-clip-text py-6 text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
              Connecting Startups with Resources
            </h1>

            <p className="font-manrope mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
              Spark bridges the gap between ambitious entrepreneurs and the facilities they need to grow.
              Access shared resources, collaborate with peers, and scale your startup with confidence.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button
                size="lg"
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary hover:to-secondary"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:border-primary">
                Watch Demo
              </Button>
            </div>

            {/* Stats Row */}
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border/30 pt-12 sm:gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-bold text-primary sm:text-5xl">500+</div>
                <p className="text-sm text-foreground/60 sm:text-base">Active Startups</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-bold text-primary sm:text-5xl">50+</div>
                <p className="text-sm text-foreground/60 sm:text-base">Facilities Listed</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-bold text-primary sm:text-5xl">4.9★</div>
                <p className="text-sm text-foreground/60 sm:text-base">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-plus-jakarta-sans mb-4 text-4xl font-bold text-primary sm:text-5xl">
              Everything You Need
            </h2>
            <p className="font-manrope text-lg text-foreground/70">
              Spark simplifies every aspect of finding and managing facilities for your startup
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                Discovery Platform
              </h3>
              <p className="font-manrope text-foreground/70 leading-relaxed">
                Browse verified facilities tailored to your startup's specific needs and location.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                <BarChart3 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                Smart Booking
              </h3>
              <p className="font-manrope text-foreground/70 leading-relaxed">
                Seamless reservation system with flexible terms and instant confirmation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                <Building2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                Partner Network
              </h3>
              <p className="font-manrope text-foreground/70 leading-relaxed">
                Connect with institutional partners and growing portfolio of facilities.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                Growth Analytics
              </h3>
              <p className="font-manrope text-foreground/70 leading-relaxed">
                Track your facility usage and optimize your startup's resource allocation.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                Community Support
              </h3>
              <p className="font-manrope text-foreground/70 leading-relaxed">
                Access mentorship, networking events, and peer support from the community.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(24,15,44,0.06)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                Instant Integration
              </h3>
              <p className="font-manrope text-foreground/70 leading-relaxed">
                Quick onboarding with intuitive dashboards for startups and facility partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t border-border/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-plus-jakarta-sans mb-4 text-4xl font-bold text-primary sm:text-5xl">
              How It Works
            </h2>
            <p className="font-manrope text-lg text-foreground/70">
              Get started in just three simple steps
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Create Your Profile",
                description: "Sign up and tell us about your startup's needs and goals.",
              },
              {
                number: "02",
                title: "Explore Facilities",
                description: "Browse our curated selection of facilities matching your requirements.",
              },
              {
                number: "03",
                title: "Book & Grow",
                description: "Reserve your space and start scaling your startup with confidence.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/70">
                  <span className="font-plus-jakarta-sans text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-plus-jakarta-sans mb-2 text-xl font-bold text-primary">
                  {step.title}
                </h3>
                <p className="font-manrope text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
                {index < 2 && (
                  <div className="absolute -right-4 top-8 hidden text-2xl text-secondary/30 sm:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-12 text-center sm:p-16">
            <h2 className="font-plus-jakarta-sans mb-4 text-4xl font-bold text-primary-foreground sm:text-5xl">
              Ready to Scale?
            </h2>
            <p className="font-manrope mb-8 text-lg text-primary-foreground/90">
              Join hundreds of startups already using Spark to grow their business
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button
                size="lg"
                onClick={() => navigate("/register")}
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-foreground/5 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
                  <span className="text-sm font-bold text-primary-foreground">S</span>
                </div>
                <span className="font-semibold text-primary">Spark</span>
              </div>
              <p className="font-manrope text-sm text-foreground/70">
                Empowering startups with the facilities they need to grow.
              </p>
            </div>
            <div>
              <h4 className="font-plus-jakarta-sans mb-3 font-semibold text-primary">Product</h4>
              <ul className="font-manrope space-y-2 text-sm text-foreground/70">
                <li>
                  <button className="transition-colors hover:text-foreground">Features</button>
                </li>
                <li>
                  <button className="transition-colors hover:text-foreground">Pricing</button>
                </li>
                <li>
                  <button className="transition-colors hover:text-foreground">Security</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-plus-jakarta-sans mb-3 font-semibold text-primary">Company</h4>
              <ul className="font-manrope space-y-2 text-sm text-foreground/70">
                <li>
                  <button className="transition-colors hover:text-foreground">About</button>
                </li>
                <li>
                  <button className="transition-colors hover:text-foreground">Blog</button>
                </li>
                <li>
                  <button className="transition-colors hover:text-foreground">Contact</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-plus-jakarta-sans mb-3 font-semibold text-primary">Legal</h4>
              <ul className="font-manrope space-y-2 text-sm text-foreground/70">
                <li>
                  <button className="transition-colors hover:text-foreground">Privacy</button>
                </li>
                <li>
                  <button className="transition-colors hover:text-foreground">Terms</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border/30 pt-8">
            <p className="font-manrope text-center text-sm text-foreground/60">
              © 2026 Spark. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
