import { Button } from "@/components/ui/button"
import { Trophy, Users, Gamepad2 } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/header-RTDL-peakpx.jpg"
          alt="CODM Battle Scene"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Small label removed as requested */}

          {/* Logo removed from hero as requested */}
          <div className="mb-8 flex justify-center"></div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 text-balance leading-[0.95] tracking-tight">
            Create Your Team And Win The Tournament Now
          </h1>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              RBL, the place where you can meet CODM players around the world, create a team, and win tournaments together.
            </p>
            <p className="text-xl md:text-2xl font-bold text-foreground mb-4">What else? Create your team now!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="https://discord.gg/YVVbjYGFcD" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-10 py-7 font-bold">
                <DiscordIcon className="w-5 h-5 mr-2" />
                Join Our Discord
              </Button>
            </a>
          </div>

          {/* Competition Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">Tournament Status</div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="font-bold text-accent">Active</span>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">Next Event</div>
              <div className="font-bold">October 28, 2025</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">Prize Pool</div>
              <div className="flex items-center gap-2 justify-center">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="font-bold text-primary">TBA</span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Community</h3>
              <p className="text-muted-foreground">Connect with CODM players from around the world</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Gamepad2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive CODM</h3>
              <p className="text-muted-foreground">Compete in Call of Duty Mobile tournaments</p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Win Prizes</h3>
              <p className="text-muted-foreground">Compete for amazing prizes and glory</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
