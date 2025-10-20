"use client"

import { useEffect, useState } from "react"

type TimeLeft = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

function getTimeLeft(target: Date): TimeLeft {
    const now = new Date().getTime()
    const diff = Math.max(0, target.getTime() - now)

    const seconds = Math.floor(diff / 1000) % 60
    const minutes = Math.floor(diff / (1000 * 60)) % 60
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    return { days, hours, minutes, seconds }
}

export default function Countdown({ targetDate }: { targetDate: string }) {
    // Show a stable placeholder on the server to avoid hydration mismatches.
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Only start the timer on the client after mount
        setMounted(true)
        const target = new Date(targetDate)
        // set initial value immediately on mount
        setTimeLeft(getTimeLeft(target))
        const id = setInterval(() => {
            setTimeLeft(getTimeLeft(target))
        }, 1000)
        return () => clearInterval(id)
    }, [targetDate])

    // Render a neutral placeholder when not yet mounted (server and initial client render)
    if (!mounted) {
        return (
            <div className="flex gap-4 mb-6" aria-hidden>
                <div className="text-center">
                    <div className="text-4xl font-black text-primary">--</div>
                    <div className="text-xs text-muted-foreground">DAYS</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-black text-primary">--</div>
                    <div className="text-xs text-muted-foreground">HOURS</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-black text-primary">--</div>
                    <div className="text-xs text-muted-foreground">MIN</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-black text-primary">--</div>
                    <div className="text-xs text-muted-foreground">SEC</div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex gap-4 mb-6">
            <div className="text-center">
                <div className="text-4xl font-black text-primary">{timeLeft.days}</div>
                <div className="text-xs text-muted-foreground">DAYS</div>
            </div>
            <div className="text-center">
                <div className="text-4xl font-black text-primary">{String(timeLeft.hours).padStart(2, "0")}</div>
                <div className="text-xs text-muted-foreground">HOURS</div>
            </div>
            <div className="text-center">
                <div className="text-4xl font-black text-primary">{String(timeLeft.minutes).padStart(2, "0")}</div>
                <div className="text-xs text-muted-foreground">MIN</div>
            </div>
            <div className="text-center">
                <div className="text-4xl font-black text-primary">{String(timeLeft.seconds).padStart(2, "0")}</div>
                <div className="text-xs text-muted-foreground">SEC</div>
            </div>
        </div>
    )
}
