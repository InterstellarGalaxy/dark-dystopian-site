import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Menu, X } from "lucide-react";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormData = z.infer<typeof emailSchema>;

export default function Home() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: EmailFormData) => {
      const response = await apiRequest("POST", "/api/subscribe", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Welcome to the Club",
        description: "You'll receive early access to our collections and exclusive insights.",
      });
    },
    onError: (error: any) => {
      const errorMessage = error.message || "Failed to subscribe. Please try again.";
      if (errorMessage.includes("409")) {
        toast({
          title: "Already Subscribed",
          description: "This email is already registered for early access.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Subscription Failed",
          description: errorMessage,
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (data: EmailFormData) => {
    subscribeMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-mono text-sm tracking-wider">
              <span className="glyph">☉</span> DARK & DYSTOPIAN
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/philosophy" className="text-sm hover:text-accent transition-colors" data-testid="link-philosophy">
                Philosophy
              </Link>
              <Link href="/sustainability" className="text-sm hover:text-accent transition-colors" data-testid="link-sustainability">
                Sustainability
              </Link>
              <Link href="/community" className="text-sm hover:text-accent transition-colors" data-testid="link-community">
                Community
              </Link>
              <div className="font-mono text-xs text-muted-foreground">
                EST. <span className="glyph">⧉</span> 2024
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:text-accent transition-colors"
              data-testid="button-mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  href="/philosophy" 
                  className="text-sm hover:text-accent transition-colors" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="link-philosophy-mobile"
                >
                  Philosophy
                </Link>
                <Link 
                  href="/sustainability" 
                  className="text-sm hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="link-sustainability-mobile"
                >
                  Sustainability
                </Link>
                <Link 
                  href="/community" 
                  className="text-sm hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="link-community-mobile"
                >
                  Community
                </Link>
                <div className="font-mono text-xs text-muted-foreground pt-2">
                  EST. <span className="glyph">⧉</span> 2024
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="grid-lines">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Typography Section */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="font-mono text-xs text-accent tracking-widest uppercase">
                    <span className="glyph">☉</span> Creative Rebellion
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
                    Light born<br />
                    from <span className="text-accent-glow">darkness</span><br />
                    through collective uprising
                  </h1>
                </div>
                
                <div className="space-y-6 max-w-lg">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A provocative futurewear movement that transforms dystopian grit into solarpunk hope. 
                    Join the rebellion against disposable culture through artifacts of lasting beauty and regenerative purpose.
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm font-mono text-muted-foreground">
                    <span className="glyph">☉</span>
                    <span>WEAPONS AGAINST WASTE</span>
                    <span className="glyph">⧉</span>
                    <span>VESSELS FOR TRANSFORMATION</span>
                    <span className="glyph">✿</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80" 
                  alt="Futuristic minimalist garment against concrete background" 
                  className="w-full h-auto object-cover rounded-sm shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Collection Preview */}
        <section className="py-20 lg:py-30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                  <span className="glyph">⧉</span> Revolutionary Products
                </div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Eternal<br />
                  Artifacts
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Either lasts lifetimes or feeds new life.<br />
                  Micro-batch exclusivity with community co-creation.
                </p>
              </div>

              <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                {/* Collection Item 1 */}
                <div className="space-y-4 group">
                  <div className="font-mono text-xs text-muted-foreground tracking-wide">
                    STEEL_001 <span className="glyph group-hover:text-accent transition-colors">☉</span>
                  </div>
                  <h3 className="text-xl font-medium">Dystopian Steel Rings</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    316L surgical steel rebellion symbols, laser-etched with coordinates of hope 
                    chosen by the collective. Eternal durability meets community vision.
                  </p>
                  <div className="font-mono text-xs text-accent">
                    COMMUNITY CO-DESIGNED
                  </div>
                </div>

                {/* Collection Item 2 */}
                <div className="space-y-4 group">
                  <div className="font-mono text-xs text-muted-foreground tracking-wide">
                    PHOENIX_002 <span className="glyph group-hover:text-accent transition-colors">✿</span>
                  </div>
                  <h3 className="text-xl font-medium">Phoenix Seed Garments</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Biodegradable clothing embedded with wildflower seeds. Wear until worn, 
                    then plant to create beauty from destruction. Life from fashion.
                  </p>
                  <div className="font-mono text-xs text-accent">
                    REGENERATIVE BY DESIGN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Philosophy */}
        <section className="py-20 lg:py-30 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                  <span className="glyph">☉</span> Dystopian Hope
                </div>
                <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                  Creative freedom<br />
                  is our <span className="text-accent-glow">weapon</span><br />
                  against disposable culture
                </h2>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  We exist in the tension between shadow and renewal, creating artifacts that serve as both 
                  weapons against waste and vessels for transformation. Our rebellion challenges disposable 
                  dystopia through beauty, turning darkness into living light.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Every piece carries both edge and empathy. We forge artifacts of rebellion that nurture hope—because 
                  the future needs rebels who believe in beauty and community-driven creative resistance.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center">
                    <div className="font-mono text-xs text-accent mb-2">REBELLION</div>
                    <div className="text-sm">
                      <Link href="/community" className="hover:text-accent transition-colors" data-testid="link-rebellion">
                        Community-Driven
                      </Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-mono text-xs text-accent mb-2">PURPOSE</div>
                    <div className="text-sm">
                      <Link href="/sustainability" className="hover:text-accent transition-colors" data-testid="link-purpose">
                        Regenerative Design
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild variant="outline" data-testid="button-learn-philosophy">
                    <Link href="/philosophy">
                      Join the Rebellion
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Signup */}
        <section id="subscribe" className="py-20 lg:py-30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                <span className="glyph">⧉</span> The Dystopian Collective
              </div>
              
              <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                Join the Creative<br />
                <span className="text-accent-glow">Uprising</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Become part of a community-driven rebellion against disposable culture. 
                Vote on designs, co-create artifacts, and transform dystopian reality 
                into solarpunk possibility through collective creative resistance.
              </p>

              {/* Email signup form */}
              {isSubmitted ? (
                <div className="max-w-md mx-auto p-6 border border-accent/20 rounded-sm bg-accent/5">
                  <div className="glyph text-2xl text-accent mb-4">✿</div>
                  <h3 className="font-medium mb-2">Welcome to the Community</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive early access notifications and exclusive updates.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="your.email@domain.com"
                              className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder-muted-foreground form-focus transition-all"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit"
                      disabled={subscribeMutation.isPending}
                      className="w-full px-6 py-3 bg-accent text-accent-foreground font-medium rounded-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50"
                      data-testid="button-subscribe"
                    >
                      {subscribeMutation.isPending ? "SUBSCRIBING..." : "REQUEST EARLY ACCESS"}
                    </Button>
                  </form>
                </Form>
              )}

              {/* Collective Tiers Grid */}
              <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
                <div className="text-center group">
                  <div className="glyph text-2xl text-accent mb-4">☉</div>
                  <h3 className="font-medium mb-2">Seedling (Free)</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Underground access to manifestos, early reveals, and design submissions
                  </p>
                  <div className="font-mono text-xs text-accent">
                    "JOIN THE UPRISING"
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="glyph text-2xl text-accent mb-4">⧉</div>
                  <h3 className="font-medium mb-2">Creator ($15/mo)</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Vote on directions, quarterly artifacts, co-creation access, 15% discount
                  </p>
                  <div className="font-mono text-xs text-accent">
                    "MOST REBELLIOUS"
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="glyph text-2xl text-accent mb-4">✿</div>
                  <h3 className="font-medium mb-2">Visionary ($50/mo)</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Shape brand transformation, co-design pieces, custom commissions, 25% discount
                  </p>
                  <div className="font-mono text-xs text-accent">
                    "LEAD THE REVOLUTION"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-mono text-sm tracking-wider mb-4">
                <span className="glyph">☉</span> DARK & DYSTOPIAN
              </div>
              <p className="text-sm text-muted-foreground mb-4 max-w-md">
                Light born from darkness. A provocative futurewear movement that transforms 
                dystopian grit into solarpunk hope through community-driven creative rebellion.
              </p>
              <nav className="flex flex-wrap gap-4 text-sm">
                <Link href="/philosophy" className="hover:text-accent transition-colors" data-testid="footer-link-philosophy">
                  Philosophy
                </Link>
                <Link href="/sustainability" className="hover:text-accent transition-colors" data-testid="footer-link-sustainability">
                  Sustainability
                </Link>
                <Link href="/community" className="hover:text-accent transition-colors" data-testid="footer-link-community">
                  Community
                </Link>
              </nav>
            </div>
            
            <div>
              <h4 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                Eternal Artifacts
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Dystopian Steel Rings</li>
                <li>Phoenix Seed Garments</li>
                <li>Oceanic Resurrection</li>
                <li>Community Co-Designs</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                Rebellion Pillars
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Weapons Against Waste</li>
                <li>Collective Uprising</li>
                <li>Provocative Hope</li>
                <li>Creative Resistance</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="font-mono text-xs text-muted-foreground">
              © 2024 Dark & Dystopian. Creative rebellion against disposable culture.
            </div>
            <div className="font-mono text-xs text-muted-foreground flex items-center space-x-4">
              <span className="glyph">⧉</span>
              <span>EST. 2024</span>
              <span className="glyph">✿</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
