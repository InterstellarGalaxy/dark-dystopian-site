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
                <span className="glyph">🌱</span> Regenerative Rebellion
              </div>
            </div>

            {/* Main Content */}
            <article className="space-y-12">
              <header>
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                  Weapons Against<br />
                  <span className="text-accent-glow">Waste Culture</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  Our artifacts challenge disposable dystopia through dual-purpose design: either lasting lifetimes through eternal durability, 
                  or creating new life through regenerative transformation. This is sustainability as rebellion.
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
                  <h2 className="text-2xl font-light">Phoenix Seed Garments & Eternal Steel</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Dystopian Steel Rings are forged from 316L surgical steel—eternal durability that mocks disposable culture, 
                    laser-etched with coordinates of hope chosen by our collective. Phoenix Seed Garments are biodegradable clothing 
                    embedded with wildflower seeds: wear until worn, then plant to create beauty from destruction.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Oceanic Resurrection Collection transforms seaweed and bamboo into textiles that return safely to earth, 
                    challenging synthetic waste while nurturing regenerative cycles. Each material is selected as a weapon against waste culture.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Dual-Purpose Rebellion Design</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Either lasts lifetimes or feeds new life—there is no middle ground in our rebellion against disposable dystopia. 
                    Our micro-batch exclusivity with unique hand-variations ensures each artifact carries authentic rebellion, not artificial scarcity.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Community co-creation means our collective votes on designs, influences direction, and shapes the artifacts we forge together. 
                    When Phoenix Seed Garments complete their fashion journey, they bloom into wildflower gardens—transformation through creative resistance.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Community-Controlled Production</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our collective rebellion extends to production—we work with small-scale artisans who share our values and reject 
                    mass production's disposable dystopia. Every step mocks conventional supply chains through radical transparency and worker empowerment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Manufacturing partners are chosen by community influence, prioritizing creative resistance over efficiency. 
                    Quality craftsmanship becomes our weapon against waste culture—creating artifacts that challenge the system through lasting beauty.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Transforming Dystopia into Solarpunk Abundance</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't just minimize harm—we wage creative war against waste culture by creating positive regenerative impact. 
                    Through community-chosen reforestation coordinates, wildflower seeding projects, and carbon sequestration rebellion, 
                    each artifact contributes to healing the planet through provocative hope.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We're not just making fashion—we're forging a cultural movement that transforms dystopian reality into 
                    solarpunk possibility through collective creative resistance. Every purchase is a vote for regenerative abundance.
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