"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
      return
    }

    // If the section isn't on this page (e.g., we're on /events/*), navigate to home with the hash
    // and attempt to scroll after navigation. This keeps navigation working from nested pages.
    const target = `/#${id}`
    if (window.location.pathname !== "/") {
      window.location.href = target
      // After navigation the browser will jump to the hash; still close the mobile menu
      setMobileMenuOpen(false)
      return
    }
    // If already on home but element wasn't found, give it a moment and try again
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 200)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/RBTL-logo.png" alt="Road to Battle League" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>

          <a href="https://discord.gg/YVVbjYGFcD" target="_blank" rel="noopener noreferrer">
            <Button className="hidden md:flex font-bold" size="lg">
              <DiscordIcon className="w-4 h-4 mr-2" />
              Join Discord
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Contact Us
            </button>
            <a href="https://discord.gg/YVVbjYGFcD" target="_blank" rel="noopener noreferrer">
              <Button className="w-full">Join Discord</Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
