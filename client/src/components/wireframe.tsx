import React from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function DarkDystopianWireframe() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const collections = [
    {
      id: "DD001",
      title: "DYSTOPIAN STEEL RINGS",
      subtitle: "316L Surgical Steel",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
      status: "AVAILABLE"
    },
    {
      id: "DD002", 
      title: "PHOENIX SEED GARMENTS",
      subtitle: "Biodegradable Rebellion",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      status: "PRE-ORDER"
    },
    {
      id: "DD003",
      title: "OCEANIC RESURRECTION",
      subtitle: "Seaweed & Bamboo",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      status: "SOLD OUT"
    },
    {
      id: "DD004",
      title: "SHADOW WALKER JACKET",
      subtitle: "Urban Decay Adaptation",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      status: "AVAILABLE"
    },
    {
      id: "DD005",
      title: "REVIVAL SUIT",
      subtitle: "Biomimetic Renewal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      status: "AVAILABLE"
    },
    {
      id: "DD006",
      title: "COLLECTIVE MANIFESTO",
      subtitle: "Community Co-Design",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      status: "COMING SOON"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-black">
        <div className="flex items-center justify-between p-4">
          <div className="text-sm font-bold tracking-widest">
            DARK & DYSTOPIAN
          </div>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-100 transition-colors"
            data-testid="menu-toggle"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-black">
            <nav className="p-4 space-y-4 text-sm">
              <a href="#" className="block hover:underline">COLLECTIONS</a>
              <a href="#" className="block hover:underline">PHILOSOPHY</a>
              <a href="#" className="block hover:underline">COMMUNITY</a>
              <a href="#" className="block hover:underline">CONTACT</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="p-4 border-b border-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="text-xs tracking-widest text-gray-500">
                  FUTUREWEAR REBELLION
                </div>
                <h1 className="text-4xl md:text-6xl font-light leading-tight">
                  LIGHT BORN<br />
                  FROM<br />
                  DARKNESS
                </h1>
                <p className="text-sm leading-relaxed max-w-md">
                  Community-driven creative rebellion against disposable culture. 
                  Eternal artifacts & regenerative design through collective uprising.
                </p>
              </div>
              
              <div className="aspect-square bg-gray-100 border border-black relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop"
                  alt="Dark Dystopian Hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white px-2 py-1 text-xs">
                  DD001 - STEEL REBELLION
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="p-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collections.map((item, index) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="aspect-square bg-gray-100 border border-black overflow-hidden relative">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-2 py-1 text-xs font-bold ${
                        item.status === 'AVAILABLE' ? 'bg-green-500 text-white' :
                        item.status === 'PRE-ORDER' ? 'bg-yellow-500 text-black' :
                        item.status === 'SOLD OUT' ? 'bg-red-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  {/* Item Info */}
                  <div className="mt-2 space-y-1">
                    <div className="text-xs text-gray-500 tracking-widest">
                      {item.id}
                    </div>
                    <div className="text-sm font-bold">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="p-4 border-t border-black bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold">☉</div>
                <div className="text-xs tracking-widest text-gray-500">SEEDLING</div>
                <div className="text-sm font-bold">FREE</div>
                <div className="text-xs">Underground access to manifestos</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold">⧉</div>
                <div className="text-xs tracking-widest text-gray-500">CREATOR</div>
                <div className="text-sm font-bold">$15/MO</div>
                <div className="text-xs">Vote on directions, quarterly artifacts</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold">✿</div>
                <div className="text-xs tracking-widest text-gray-500">VISIONARY</div>
                <div className="text-sm font-bold">$50/MO</div>
                <div className="text-xs">Shape brand transformation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="p-4 border-t border-black">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-4 max-w-md mx-auto">
              <h2 className="text-lg font-bold">JOIN THE UPRISING</h2>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS"
                  className="flex-1 p-3 border border-black border-r-0 text-sm font-mono bg-transparent placeholder-gray-500 focus:outline-none focus:bg-gray-50"
                  data-testid="email-input"
                />
                <button className="px-6 py-3 bg-black text-white text-sm font-bold hover:bg-gray-800 transition-colors" data-testid="subscribe-btn">
                  →
                </button>
              </div>
              <p className="text-xs text-gray-600">
                Early access to collections & community voting
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t border-black text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-gray-500">
              © 2024 DARK & DYSTOPIAN - CREATIVE REBELLION AGAINST DISPOSABLE CULTURE
            </div>
            <div className="flex space-x-4 text-xs">
              <a href="#" className="hover:underline">INSTAGRAM</a>
              <a href="#" className="hover:underline">TWITTER</a>
              <a href="#" className="hover:underline">CONTACT</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}