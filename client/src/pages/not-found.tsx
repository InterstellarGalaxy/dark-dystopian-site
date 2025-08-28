import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
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

      <main className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* 404 Typography */}
            <div className="space-y-4">
              <div className="font-mono text-xs text-accent tracking-widest uppercase">
                <span className="glyph">✿</span> Lost in the void
              </div>
              <h1 className="text-6xl md:text-8xl font-light leading-tight">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-muted-foreground">
                The artifact you seek<br />
                has <span className="text-accent-glow">vanished</span>
              </h2>
            </div>
            
            {/* Error Description */}
            <div className="space-y-6 max-w-lg mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This page has been consumed by the digital wasteland. 
                Perhaps you're looking for something from our collection?
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm font-mono text-muted-foreground">
                <span className="glyph">☉</span>
                <span>ERROR</span>
                <span className="glyph">⧉</span>
                <span>NOT FOUND</span>
                <span className="glyph">✿</span>
              </div>
            </div>

            {/* Navigation Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild variant="default" size="lg" data-testid="button-home">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" data-testid="button-search">
                <Link href="/#subscribe">
                  <Search className="mr-2 h-4 w-4" />
                  Join the Community
                </Link>
              </Button>
            </div>

            {/* SEO-friendly sitemap links */}
            <div className="pt-12 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Popular destinations:</p>
              <nav className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/" className="hover:text-accent transition-colors" data-testid="link-home">
                  Home
                </Link>
                <Link href="/philosophy" className="hover:text-accent transition-colors" data-testid="link-philosophy">
                  Philosophy
                </Link>
                <Link href="/sustainability" className="hover:text-accent transition-colors" data-testid="link-sustainability">
                  Sustainability
                </Link>
                <Link href="/community" className="hover:text-accent transition-colors" data-testid="link-community">
                  Community
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
