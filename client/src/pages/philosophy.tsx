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
                <span className="glyph">✿</span> Our Philosophy
              </div>
            </div>

            {/* Main Content */}
            <article className="space-y-12">
              <header>
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                  The Philosophy of<br />
                  <span className="text-accent-glow">Dystopian Fashion</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  In a world caught between collapse and renewal, fashion becomes more than aesthetics—it becomes a statement of hope, resistance, and transformation.
                </p>
              </header>

              {/* Core Principles */}
              <section className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Recycle className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Sustainable Futures</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Every garment is crafted from plant-based materials and recycled fibers, proving that sustainability and style are not mutually exclusive. We believe the future of fashion lies in regenerative practices.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Narrative Design</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Each piece tells a story of transformation—from dystopian decay to solarpunk renewal. Our designs embody the journey from darkness to light, from despair to hope.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Collective Impact</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Fashion is a tool for building community. Our limited collections create exclusive experiences that connect like-minded individuals committed to conscious consumption.
                  </p>
                </div>
              </section>

              {/* Main Philosophy Content */}
              <section className="space-y-8 max-w-3xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-light">The Duality of Design</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our aesthetic embraces the tension between destruction and creation. The dystopian elements—industrial textures, monochromatic palettes, deconstructed silhouettes—acknowledge the harsh realities of our environmental and social challenges.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Yet within this darkness, we weave threads of solarpunk optimism. Sustainable materials, regenerative processes, and community-focused design practices represent our commitment to a better future.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Artifacts of Transformation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't create clothes—we create artifacts. Each piece is a collector's item that represents a moment in time, a philosophy made tangible, a story waiting to be lived.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our collections are intentionally limited, not for artificial scarcity, but because true craftsmanship and sustainable practices don't scale infinitely. Quality over quantity. Meaning over mass production.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">The Future We Choose</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Fashion has the power to shape culture and influence behavior. By choosing Dark & Dystopian, you're not just purchasing clothing—you're investing in a vision of the future where style, sustainability, and social consciousness converge.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Join us in creating a narrative where fashion becomes a force for positive transformation, where every thread tells a story of hope, and where the future is not something that happens to us, but something we actively create.
                  </p>
                </div>
              </section>

              {/* Call to Action */}
              <section className="border-t border-border pt-12">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Join the Movement</h3>
                    <p className="text-muted-foreground">
                      Be part of the narrative. Get early access to our collections.
                    </p>
                  </div>
                  <Button asChild size="lg" data-testid="button-subscribe">
                    <Link href="/#subscribe">
                      Subscribe for Early Access
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