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
                <span className="glyph">✿</span> Community
              </div>
            </div>

            {/* Main Content */}
            <article className="space-y-12">
              <header>
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                  Building a<br />
                  <span className="text-accent-glow">Conscious Community</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  Fashion is more powerful when shared. Our community brings together conscious consumers, creative thinkers, and change-makers united by a common vision of sustainable style.
                </p>
              </header>

              {/* Community Pillars */}
              <section className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Collective Impact</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Together, we amplify the message that fashion can be a force for positive change. Every member contributes to our collective mission of transformation and renewal.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Shared Stories</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Each garment carries multiple narratives—the designer's vision, the maker's craft, and your personal story. Our community celebrates these intersecting tales.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-accent" />
                    <h2 className="text-xl font-medium">Values Alignment</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We unite people who prioritize quality over quantity, meaning over trends, and impact over appearance. Shared values create lasting connections.
                  </p>
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