import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormData = z.infer<typeof emailSchema>;

export default function Home() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
            <div className="font-mono text-xs text-muted-foreground">
              EST. <span className="glyph">⧉</span> 2024
            </div>
          </div>
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
                    <span className="glyph">✿</span> Futurewear Artifacts
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
                    Every artifact<br />
                    tells a story of<br />
                    <span className="text-accent-glow">transformation</span>
                  </h1>
                </div>
                
                <div className="space-y-6 max-w-lg">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We create collectible, narrative-driven garments from sustainable materials. 
                    Each piece invites you into an exclusive community of reflection and renewal.
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm font-mono text-muted-foreground">
                    <span className="glyph">☉</span>
                    <span>DYSTOPIAN GRIT</span>
                    <span className="glyph">⧉</span>
                    <span>SOLARPUNK RENEWAL</span>
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
                  <span className="glyph">⧉</span> Debut Collection
                </div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Genesis<br />
                  Artifacts
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Limited quantities. Unique variations.<br />
                  Each piece carries fragments of tomorrow.
                </p>
              </div>

              <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                {/* Collection Item 1 */}
                <div className="space-y-4 group">
                  <div className="font-mono text-xs text-muted-foreground tracking-wide">
                    ARTIFACT_001 <span className="glyph group-hover:text-accent transition-colors">☉</span>
                  </div>
                  <h3 className="text-xl font-medium">Shadow Walker Jacket</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Born from necessity in collapsed cities. Regenerative materials that adapt 
                    to urban decay while nurturing new growth.
                  </p>
                  <div className="font-mono text-xs text-accent">
                    12 VARIATIONS AVAILABLE
                  </div>
                </div>

                {/* Collection Item 2 */}
                <div className="space-y-4 group">
                  <div className="font-mono text-xs text-muted-foreground tracking-wide">
                    ARTIFACT_002 <span className="glyph group-hover:text-accent transition-colors">✿</span>
                  </div>
                  <h3 className="text-xl font-medium">Revival Suit</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Engineered for the architects of renewal. Biomimetic fabrics that 
                    blur the line between technology and nature.
                  </p>
                  <div className="font-mono text-xs text-accent">
                    8 VARIATIONS AVAILABLE
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
                  <span className="glyph">☉</span> Philosophy
                </div>
                <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                  Clothing as a medium<br />
                  for <span className="text-accent-glow">reflection</span><br />
                  and change
                </h2>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  In a world caught between collapse and renewal, we refuse to choose sides. 
                  Our garments embody the tension—the raw honesty of dystopian realities 
                  merged with the hopeful innovation of solarpunk futures.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Every stitch carries intention. Every fabric tells a story of transformation. 
                  We create not just clothing, but artifacts of conscious evolution—pieces that 
                  invite their wearers to question, reflect, and ultimately, transcend.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center">
                    <div className="font-mono text-xs text-accent mb-2">MATERIALS</div>
                    <div className="text-sm">100% Sustainable</div>
                  </div>
                  <div className="text-center">
                    <div className="font-mono text-xs text-accent mb-2">PRODUCTION</div>
                    <div className="text-sm">Limited Batches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Signup */}
        <section className="py-20 lg:py-30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                <span className="glyph">⧉</span> Community
              </div>
              
              <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                Join the Dark &<br />
                <span className="text-accent-glow">Dystopian Club</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Become part of an exclusive community that questions conventional fashion 
                and creates meaningful change. Early access, exclusive insights, and 
                connection with like-minded visionaries.
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

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
                <div className="text-center">
                  <div className="glyph text-2xl text-accent mb-4">☉</div>
                  <h3 className="font-medium mb-2">First Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Priority access to new collections before public release
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="glyph text-2xl text-accent mb-4">⧉</div>
                  <h3 className="font-medium mb-2">Exclusive Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Behind-the-scenes stories and design philosophy deep-dives
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="glyph text-2xl text-accent mb-4">✿</div>
                  <h3 className="font-medium mb-2">Community Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Influence future designs and participate in meaningful conversations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-mono text-sm tracking-wider mb-2">
                <span className="glyph">☉</span> DARK & DYSTOPIAN
              </div>
              <p className="text-xs text-muted-foreground">
                Futurewear artifacts for conscious transformation
              </p>
            </div>
            
            <div className="text-right">
              <div className="font-mono text-xs text-muted-foreground space-x-4">
                <span className="glyph">⧉</span>
                <span>SUSTAINABILITY</span>
                <span className="glyph">✿</span>
                <span>COMMUNITY</span>
                <span className="glyph">☉</span>
                <span>TRANSFORMATION</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
