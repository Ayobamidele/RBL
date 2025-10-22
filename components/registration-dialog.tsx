'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { DiscordIcon } from "@/components/icons/discord-icon"
import { ReactNode } from "react"

interface RegistrationDialogProps {
  trigger: ReactNode
}

export function RegistrationDialog({ trigger }: RegistrationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tournament Registration</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <DiscordIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Important: Discord Registration Required</h4>
                <p className="text-sm text-muted-foreground">
                  After filling out this form, you must also register on our Discord server to complete your registration.
                  All tournament updates and match coordination will happen on Discord.
                </p>
                <a href="https://discord.gg/YVVbjYGFcD" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="mt-3">
                    <DiscordIcon className="w-4 h-4 mr-2" />
                    Join Discord Server
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe9ZT5Un5tDmvQZgIiJgPdLYVVm6BbAwHVgYp4VnYeD0rfJKQ/viewform?embedded=true"
              width="100%"
              height="2400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
