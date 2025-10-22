import { Button } from "@/components/ui/button"
import { Youtube, Twitch, Radio } from "lucide-react"

export function LivestreamSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Radio className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Watch The Action Live</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't miss a single moment! Follow our live streams to watch intense battles, epic plays, and crowning
            moments as teams compete for glory.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Youtube className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">YouTube</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe for tournament highlights, player interviews, and full match replays
              </p>
              <a href="https://www.youtube.com/@RoadToBattleLeague--" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-red-500 hover:bg-red-600">
                  <Youtube className="w-5 h-5 mr-2" />
                  Subscribe on YouTube
                </Button>
              </a>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Twitch className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Twitch</h3>
              <p className="text-muted-foreground mb-6">
                Follow for live tournament streams, real-time commentary, and community chat
              </p>
              <a href="https://www.twitch.tv/bivystudioesport" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-purple-500 hover:bg-purple-600">
                  <Twitch className="w-5 h-5 mr-2" />
                  Follow on Twitch
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground">
              <Radio className="w-4 h-4 inline mr-2" />
              Live streams start 15 minutes before each tournament match. Get notified by following us on both
              platforms!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
