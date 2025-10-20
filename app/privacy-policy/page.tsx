import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Trophy, Shield } from 'lucide-react'

export const metadata = {
    title: 'Privacy Policy - RBL',
    description: 'Privacy Policy for Road to Battle League (RBL) website',
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-20">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/#events" className="hover:text-primary transition-colors">
                            Events
                        </Link>
                        <span>/</span>
                        <span className="text-foreground">Privacy Policy</span>
                    </div>
                </div>

                {/* Hero Banner */}
                <div className="relative bg-gradient-to-br from-primary/20 via-background to-accent/20 border-y border-border">
                    <div className="absolute inset-0 bg-[url('/images/one-pixel-brush-as1.jpg')] bg-cover bg-center opacity-40" />
                    <div className="relative container mx-auto px-4 py-16">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-primary mb-2 tracking-wider">LEGAL</div>
                                    <h1 className="text-4xl lg:text-5xl font-black mb-4">Privacy Policy</h1>
                                    <p className="text-muted-foreground">Effective date: October 20, 2025</p>
                                </div>
                                <div className="lg:text-right">
                                    <div className="text-sm text-muted-foreground mb-2">Contact</div>
                                    <a href="mailto:bivystudioesport@gmail.com" className="text-primary hover:underline">
                                        bivystudioesport@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Information We Collect</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We may collect information that you provide directly to us, such as your name, email address, and any other information you submit via contact forms or registration. We also automatically collect certain information about your device and usage, including IP address, browser type, pages visited, and referring URL.
                                    </p>
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">How We Use Your Information</h3>
                                    <p className="text-muted-foreground leading-relaxed">We use the information we collect to respond to inquiries, provide and improve our services, personalize your experience, communicate updates, and comply with legal obligations.</p>
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Cookies and Tracking</h3>
                                    <p className="text-muted-foreground leading-relaxed">We may use cookies and similar tracking technologies to track activity on our service and hold certain information. You can control cookies through your browser settings.</p>
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Third-Party Services</h3>
                                    <p className="text-muted-foreground leading-relaxed">We may share information with third-party service providers who perform services on our behalf (hosting, analytics, email delivery). These providers are contractually bound to protect your data and only process it for the purposes we specify.</p>
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">Your Rights</h3>
                                    <p className="text-muted-foreground leading-relaxed">Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information. To exercise these rights, contact us at <a href="mailto:bivystudioesport@gmail.com" className="text-primary">bivystudioesport@gmail.com</a>.</p>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>
                                            <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link href="/terms" className="text-primary hover:underline">Terms &amp; Conditions</Link>
                                        </li>
                                        <li>
                                            <a href="https://discord.gg/YVVbjYGFcD" className="text-primary hover:underline">Join our Discord</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-lg font-bold mb-4">Hosted By</h3>
                                    <div className="flex items-center gap-3">
                                        <img src="/images/bivy-studio-logo.png" alt="Bivy Studio" className="w-12 h-12 rounded-xl" />
                                        <div>
                                            <div className="font-bold">Bivy Studio</div>
                                            <div className="text-sm text-muted-foreground">Official Host</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-lg font-bold mb-4">Contact</h3>
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-primary" />
                                        <div>
                                            <div className="text-sm">For privacy requests:</div>
                                            <a href="mailto:bivystudioesport@gmail.com" className="text-primary hover:underline">bivystudioesport@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
