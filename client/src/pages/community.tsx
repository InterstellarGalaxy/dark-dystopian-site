import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, MessageSquare, Heart, Star } from "lucide-react";

export default function Community() {
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
                <span className="glyph">⧉</span> The Dystopian Collective
              </div>
            </div>

            {/* Main Content */}
            <article className="space-y-12">
              <header>
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                  Join the Creative<br />
                  <span className="text-accent-glow">Uprising</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  Community-driven rebellion against disposable culture. Our collective transforms dystopian reality into 
                  solarpunk possibility through creative resistance. Vote on designs, co-create artifacts, lead the revolution.
                </p>
              </header>

              {/* Dystopian Collective Tiers */}
              <section className="space-y-8">
                <h2 className="text-2xl font-light">The Dystopian Collective: Tiered Community</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="border border-border rounded-lg p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="glyph text-2xl text-accent">☉</div>
                      <div>
                        <h3 className="text-xl font-medium">Seedling (Free)</h3>
                        <p className="text-sm text-accent font-mono">"JOIN THE UPRISING"</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Underground access to manifestos, early reveals, and design submission opportunities. 
                      Start your rebellion against disposable culture.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Access to brand manifestos</li>
                      <li>• Early collection reveals</li>
                      <li>• Design submission portal</li>
                    </ul>
                  </div>

                  <div className="border border-accent rounded-lg p-6 space-y-4 bg-accent/5">
                    <div className="flex items-center gap-3">
                      <div className="glyph text-2xl text-accent">⧉</div>
                      <div>
                        <h3 className="text-xl font-medium">Creator ($15/mo)</h3>
                        <p className="text-sm text-accent font-mono">"MOST REBELLIOUS"</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Vote on directions, quarterly exclusive artifacts, co-creation access, 
                      and 15% rebellion discount on all eternal artifacts.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Vote on product directions</li>
                      <li>• Quarterly exclusive artifacts</li>
                      <li>• Co-creation access</li>
                      <li>• 15% discount on all items</li>
                    </ul>
                  </div>

                  <div className="border border-accent rounded-lg p-6 space-y-4 bg-accent/10">
                    <div className="flex items-center gap-3">
                      <div className="glyph text-2xl text-accent">✿</div>
                      <div>
                        <h3 className="text-xl font-medium">Visionary ($50/mo)</h3>
                        <p className="text-sm text-accent font-mono">"LEAD THE REVOLUTION"</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Shape brand transformation, co-design pieces, monthly strategy calls, 
                      custom commissions, and 25% discount. Lead the collective uprising.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Shape brand transformation</li>
                      <li>• Co-design new pieces</li>
                      <li>• Monthly strategy calls</li>
                      <li>• Custom commissions</li>
                      <li>• 25% discount on all items</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Community Features */}
              <section className="space-y-8 max-w-3xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Exclusive Early Access</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Community members get first access to new collections, limited editions, and special collaborations. You're not just buying clothes—you're securing pieces of wearable art before they're available to the general public.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Each release includes detailed stories about the inspiration, materials, and craftsmanship behind every piece, deepening your connection to the garments you wear.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Behind-the-Scenes Insights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Get exclusive access to our design process, from initial concept sketches to final production. Watch your future wardrobe take shape through our transparent creation journey.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Learn about our sustainable suppliers, meet the artisans who craft each piece, and understand the environmental impact of every decision we make.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Community-Driven Design</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your voice shapes our future collections. Through surveys, feedback sessions, and collaborative discussions, community members directly influence design directions and material choices.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Special community-only pieces are created based on collective input, ensuring that your wardrobe reflects not just our vision, but our shared values and aesthetics.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-light">Educational Content</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Receive regular insights about sustainable fashion, care guides to extend the life of your garments, and tutorials on styling your Dark & Dystopian pieces for maximum impact.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Stay informed about industry developments, environmental initiatives, and the latest innovations in sustainable materials and ethical manufacturing.
                  </p>
                </div>
              </section>

              {/* Community Stats */}
              <section className="bg-muted/20 rounded-lg p-8">
                <h2 className="text-2xl font-light mb-6">Community Impact</h2>
                <div className="grid sm:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-light text-accent-glow">500+</div>
                    <div className="text-sm text-muted-foreground">Early adopters</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-light text-accent-glow">50K</div>
                    <div className="text-sm text-muted-foreground">Liters of water saved collectively</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-light text-accent-glow">95%</div>
                    <div className="text-sm text-muted-foreground">Member satisfaction rate</div>
                  </div>
                </div>
              </section>

              {/* Testimonial */}
              <section className="border-l-2 border-accent pl-6 space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <blockquote className="text-lg leading-relaxed">
                  "Being part of Dark & Dystopian isn't just about the clothes—it's about belonging to a movement. 
                  Every piece I own tells a story, and together, we're writing a new chapter for sustainable fashion."
                </blockquote>
                <cite className="text-sm text-muted-foreground">— Alex Chen, Community Member since 2024</cite>
              </section>

              {/* Call to Action */}
              <section className="border-t border-border pt-12">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Join Our Community</h3>
                    <p className="text-muted-foreground">
                      Be part of the sustainable fashion revolution from the very beginning.
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