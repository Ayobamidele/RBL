import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Lock } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"
import Link from "next/link"

export function EventSection() {
  return (
    <section id="events" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Upcoming Events</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Don't miss out on our exciting tournaments and competitions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Preshow Event */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all hover:shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary font-semibold mb-1">OCTOBER 24, 2025</div>
                  <h3 className="text-2xl font-bold mb-2">Tournament Preshow</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join us for a practice tournament event! Test your skills, meet other players, and prepare for the
                    Grand Tournament. No prizes, just pure competition and fun.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Practice Event
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Registration Open
                </span>
              </div>
              <div className="flex gap-3">
                <Link href="/events/preshow" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    View Details
                  </Button>
                </Link>
                <a href="https://discord.gg/YVVbjYGFcD" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full flex-1" size="lg">
                    <DiscordIcon className="w-5 h-5 mr-2" />
                    Register
                  </Button>
                </a>
              </div>
            </div>

            {/* Main Tournament */}
            <div className="bg-card border-2 border-primary rounded-2xl p-8 hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-xl">
                MAIN EVENT
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary font-semibold mb-1">DECEMBER 28, 2025</div>
                  <h3 className="text-2xl font-bold mb-2">Grand Tournament</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ultimate CODM tournament is here! Compete with the best teams, showcase your skills, and claim
                    victory. Massive prizes await the champions!
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  CODM Tournament
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Big Prizes</span>
                <span className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  Opens December
                </span>
              </div>
              <div className="flex gap-3">
                <Link href="/events/grand-tournament" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    View Details
                  </Button>
                </Link>
                <Button className="flex-1" size="lg" disabled>
                  <Lock className="w-5 h-5 mr-2" />
                  Opens December
                </Button>
              </div>
            </div>
          </div>

          {/* Registration Info */}
          <div className="mt-12 bg-card border border-border rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Ready for the Preshow?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Preshow registration is now open! Join our Discord server to register your team or find teammates for the
              practice tournament. Our moderator Bami will guide you through the process.
            </p>
            <a href="https://discord.gg/YVVbjYGFcD" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8">
                <DiscordIcon className="w-5 h-5 mr-2" />
                Join Discord Server Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
