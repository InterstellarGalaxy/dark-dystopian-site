import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf, Droplets, Recycle, Sun } from "lucide-react";

export default function Sustainability() {
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
                <span className="glyph">✿</span> Sustainability
              </div>
            </div>

            {/* Main Content */}
            <article className="space-y-12">
              <header>
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                  Sustainable Materials:<br />
                  <span className="text-accent-glow">Our Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  From concept to creation, every decision we make is guided by our commitment to environmental responsibility and regenerative practices.
                </p>
              </header>

              {/* Sustainability Metrics */}
              <section className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-light text-accent-glow">100%</div>
                    <div className="text-sm text-muted-foreground">Plant-based fibers</div>
                  </div>
                </div>

                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center">
                    <Droplets className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-light text-accent-glow">90%</div>
                    <div className="text-sm text-muted-foreground">Water reduction</div>
                  </div>
                </div>

                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center">
                    <Recycle className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-light text-accent-glow">Zero</div>
                    <div className="text-sm text-muted-foreground">Waste to landfill</div>
                  </div>
                </div>

                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center">
                    <Sun className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-light text-accent-glow">Carbon</div>
                    <div className="text-sm text-muted-foreground">Negative goal</div>
                  </div>
                </div>
              </section>

              {/* Material Story */}
              <section className="space-y-8 max-w-3xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Revolutionary Materials</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our material palette consists entirely of next-generation sustainable fibers. We use lab-grown cotton alternatives, recycled ocean plastics transformed into high-performance textiles, and innovative biofabricated materials grown from agricultural waste.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Each material is selected not just for its environmental credentials, but for its ability to tell our story—the transformation from waste to wonder, from problem to solution.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Circular Design Philosophy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Every garment is designed for longevity and eventual return to the earth. Our modular construction allows for easy repair and customization, extending the life cycle of each piece indefinitely.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When a garment finally reaches the end of its journey, our take-back program ensures it's either upcycled into new pieces or composted safely, completing the circle of regeneration.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Supply Chain Transparency</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We work exclusively with suppliers who share our values and meet our rigorous environmental and social standards. Every step of our supply chain is traceable, from fiber production to final assembly.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our manufacturing partners are small-scale facilities that prioritize worker welfare, environmental stewardship, and quality craftsmanship over mass production efficiency.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Beyond Carbon Neutral</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our goal isn't just to minimize harm—it's to create positive impact. Through regenerative agriculture partnerships, carbon sequestration projects, and community reforestation initiatives, each Dark & Dystopian piece contributes to healing the planet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We're not just making clothes; we're cultivating a movement toward regenerative fashion that gives back more than it takes.
                  </p>
                </div>
              </section>

              {/* Impact Metrics */}
              <section className="bg-muted/20 rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-light">Environmental Impact per Garment</h2>
                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Water usage reduction:</span>
                      <span className="text-accent">2,700 liters saved</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CO2 emissions reduction:</span>
                      <span className="text-accent">8.5 kg prevented</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chemical use reduction:</span>
                      <span className="text-accent">95% decrease</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Biodegradability:</span>
                      <span className="text-accent">100% compostable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Durability increase:</span>
                      <span className="text-accent">300% longer lasting</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Recycled content:</span>
                      <span className="text-accent">60% post-consumer</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="border-t border-border pt-12">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Join the Sustainable Revolution</h3>
                    <p className="text-muted-foreground">
                      Be part of fashion's transformation toward regenerative practices.
                    </p>
                  </div>
                  <Button asChild size="lg" data-testid="button-subscribe">
                    <Link href="/#subscribe">
                      Get Early Access
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