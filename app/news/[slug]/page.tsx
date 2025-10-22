import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ArrowLeft, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const newsArticles: Record<string, any> = {
  "rbl-season-2-announcement": {
    title: "RBL Season 2 Announced - Bigger Prize Pool and More Teams",
    date: "December 15, 2025",
    category: "Announcement",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>We're thrilled to announce the second season of Road to Battle League (RBL), bringing even more excitement to the Call of Duty Mobile competitive scene!</p>
      
      <h2>What's New in Season 2</h2>
      <p>Season 2 of RBL will feature significant improvements based on community feedback from our inaugural season:</p>
      
      <ul>
        <li><strong>Increased Prize Pool:</strong> We've doubled the prize pool for Season 2, with more rewards distributed across top-performing teams</li>
        <li><strong>More Team Slots:</strong> Expanding from 16 to 32 teams to accommodate the growing RBL community</li>
        <li><strong>Enhanced Streaming:</strong> Professional production quality with multi-POV streams on YouTube and Twitch</li>
        <li><strong>New Tournament Format:</strong> Double elimination bracket to give teams more chances to prove themselves</li>
      </ul>
      
      <h2>Registration Details</h2>
      <p>Registration for RBL Season 2 opens on December 1st, 2025. Make sure your team is ready by joining our Discord server and completing the verification process.</p>
      
      <h2>Important Dates</h2>
      <ul>
        <li>Registration Opens: December 1, 2025</li>
        <li>Registration Closes: December 20, 2025</li>
        <li>Tournament Begins: December 28, 2025</li>
      </ul>
      
      <p>Join our Discord community today to stay updated and connect with other CODM players preparing for Season 2!</p>
    `,
  },
  "team-phoenix-victory": {
    title: "Team Phoenix Dominates RBL Preshow Tournament",
    date: "October 24, 2025",
    category: "Results",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Team Phoenix has emerged victorious in the RBL Preshow Tournament, showcasing exceptional skill and coordination throughout the competition.</p>
      
      <h2>Tournament Highlights</h2>
      <p>The preshow tournament featured 16 teams competing in intense Call of Duty Mobile matches. Team Phoenix demonstrated dominance from the group stage through the finals.</p>
      
      <h2>Final Match Recap</h2>
      <p>In a thrilling best-of-five finals series, Team Phoenix defeated Team Vortex 3-1, with standout performances from all team members. The final map on Standoff saw Phoenix execute a flawless strategy that secured their victory.</p>
      
      <h2>Player Performances</h2>
      <ul>
        <li><strong>Phoenix_Ace:</strong> MVP with 2.1 K/D ratio across all matches</li>
        <li><strong>Phoenix_Shadow:</strong> Clutch plays in critical rounds</li>
        <li><strong>Phoenix_Storm:</strong> Exceptional objective control</li>
      </ul>
      
      <p>Congratulations to Team Phoenix! We look forward to seeing them compete in the main RBL tournament in December.</p>
    `,
  },
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const article = newsArticles[params.slug]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/news">
              <Button variant="ghost" className="mb-6 -ml-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All News
              </Button>
            </Link>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{article.title}</h1>
            </div>

            {/* Featured Image */}
            <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-border">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Share Button */}
            <div className="flex justify-end mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-invert max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:text-muted-foreground prose-li:my-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Join the RBL Community</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest tournament news and connect with CODM players worldwide
              </p>
              <Button size="lg">Join Our Discord</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
