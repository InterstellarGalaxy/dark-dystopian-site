import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Recycle, Zap, Users } from "lucide-react";

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-mono text-sm tracking-wider hover:text-accent transition-colors">
              <span className="glyph">☉</span> DARK & DYSTOPIAN
            </Link>
            <div className="font-mono text-xs text-muted-foreground">
              EST. <span className="glyph">⧉</span> 2024
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button asChild variant="ghost" size="sm" data-testid="button-back">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div className="font-mono text-xs text-accent tracking-widest uppercase">
                <span className="glyph">☉</span> Dystopian Hope
              </div>
            </div>

            {/* Main Content */}
            <article className="space-y-12">
              <header>
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                  Creative Freedom is<br />
                  Our <span className="text-accent-glow">Weapon</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  We exist in the tension between shadow and renewal, creating artifacts that serve as both 
                  weapons against waste and vessels for transformation. This is our manifesto of rebellious hope.
                </p>
              </header>

              {/* Core Rebellion Pillars */}
              <section className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Rebellious Quality</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Artifacts that defy disposable dystopia through eternal durability or regenerative design. 
                    Either lasts lifetimes or feeds new life—there is no middle ground in our rebellion against waste.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Collective Uprising</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Community-driven creative rebellion where members shape our direction. This isn't fashion designed 
                    for you—it's fashion designed with you, voted on by you, co-created through collective vision.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Recycle className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Provocative Hope</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Challenging systems through beauty, turning darkness into possibility. We refuse to choose 
                    between edge and empathy—every piece carries both, because the future needs rebels who believe in beauty.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Dystopian-to-Solarpunk</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Transforming waste culture into regenerative abundance. We're not just making sustainable fashion—
                    we're weaponizing creativity to forge a new path from disposable despair to regenerative hope.
                  </p>
                </div>
              </section>

              {/* Main Philosophy Content */}
              <section className="space-y-8 max-w-3xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Light Born from Darkness</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are "light born from darkness"—a collective that refuses to surrender to disposable culture's dystopian grip. 
                    Our aesthetic embraces the grit of our current reality while forging artifacts that embody solarpunk possibility.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every design carries both shadow and illumination. Dystopian steel rings laser-etched with coordinates of hope. 
                    Phoenix seed garments that bloom into wildflowers after their fashion life ends. Beauty born from rebellion, hope forged through resistance.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Weapons Against Waste Culture</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't create clothes—we forge weapons against disposable culture. Each artifact is designed with dual purpose: 
                    either to last lifetimes through eternal durability, or to create new life through regenerative transformation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our micro-batch exclusivity isn't about artificial scarcity—it's about authentic rebellion. Limited runs with unique 
                    hand-variations, community co-creation, and narrative-driven design that mocks mass production while nurturing meaningful connection.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">The Revolution We're Building</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This isn't just fashion—it's cultural rebellion. By joining Dark & Dystopian, you're not purchasing products—
                    you're joining a collective uprising against disposable culture, voting with your values, and co-creating the future through provocative hope.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Together, we transform dystopian reality into solarpunk possibility through "rebellion with purpose." 
                    Every artifact carries our manifesto: Creative freedom is our weapon, and we forge the future through collective creative resistance.
                  </p>
                </div>
              </section>

              {/* Call to Action */}
              <section className="border-t border-border pt-12">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Join the Creative Uprising</h3>
                    <p className="text-muted-foreground">
                      Be part of the collective rebellion. Shape the artifacts we forge together.
                    </p>
                  </div>
                  <Button asChild size="lg" data-testid="button-subscribe">
                    <Link href="/#subscribe">
                      Join the Dystopian Collective
                    </Link>
                  </Button>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}