import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export default function AllNewsPage() {
  const allNews = [
    {
      id: "rbl-season-2-announcement",
      title: "RBL Season 2 Announced - Bigger Prize Pool and More Teams",
      excerpt:
        "We're excited to announce the second season of Road to Battle League with enhanced features and bigger rewards for CODM players.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 15, 2025",
      category: "Announcement",
    },
    {
      id: "team-phoenix-victory",
      title: "Team Phoenix Dominates RBL Preshow Tournament",
      excerpt:
        "Team Phoenix showcased exceptional skill and teamwork to claim victory in the RBL Preshow event, setting the stage for the main tournament.",
      image: "/placeholder.svg?height=400&width=600",
      date: "October 24, 2025",
      category: "Results",
    },
    {
      id: "new-moderators-join",
      title: "Welcome Tiffany - New Server Moderator Joins RBL Team",
      excerpt:
        "We're thrilled to welcome Tiffany to our moderation team. Learn more about how our moderators help create the best tournament experience.",
      image: "/placeholder.svg?height=400&width=600",
      date: "October 20, 2025",
      category: "Community",
    },
    {
      id: "codm-meta-update",
      title: "CODM Meta Changes - How They Affect RBL Strategy",
      excerpt:
        "Recent updates to Call of Duty Mobile have shifted the competitive meta. Here's what RBL players need to know for upcoming tournaments.",
      image: "/placeholder.svg?height=400&width=600",
      date: "October 10, 2025",
      category: "Strategy",
    },
    {
      id: "bivy-studio-partnership",
      title: "Bivy Studio Becomes Official RBL Partner",
      excerpt:
        "Road to Battle League is proud to announce our partnership with Bivy Studio, bringing enhanced production quality to all our events.",
      image: "/placeholder.svg?height=400&width=600",
      date: "September 30, 2025",
      category: "Partnership",
    },
    {
      id: "registration-tips",
      title: "5 Tips for Successful RBL Tournament Registration",
      excerpt:
        "Make sure your team is ready for RBL tournaments with these essential registration tips and Discord setup guidelines.",
      image: "/placeholder.svg?height=400&width=600",
      date: "September 15, 2025",
      category: "Guide",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">All News</h1>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest RBL tournament news, results, and community updates
              </p>
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allNews.map((article) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                  <div className="group cursor-pointer h-full">
                    <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-primary transition-colors">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {article.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">{article.excerpt}</p>
                        <div className="flex items-center text-primary font-semibold text-sm">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
