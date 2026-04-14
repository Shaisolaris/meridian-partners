"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "./animate-on-scroll"
import { toast } from "sonner"

export function ContactCTA() {
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
    <section className="py-28 px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl text-center">
        <AnimateOnScroll>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8">
            Let&apos;s Build Something Exceptional Together
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <p className="text-lg text-primary-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you&apos;re an entrepreneur seeking growth capital, an institutional investor exploring emerging markets,
            or an advisor with a compelling opportunity—we&apos;d like to hear from you.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8" onClick={() => setShowForm(true)}>
              Start a Conversation <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 bg-transparent"
              onClick={() => toast.success("Download started", { description: "Investor materials PDF will open shortly." })}
            >
              Download Investor Materials
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    {showForm && (
      <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
        <div className="bg-white rounded-xl p-8 max-w-md w-full text-left" onClick={e => e.stopPropagation()}>
          {submitted ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Received</h3>
              <p className="text-gray-500 text-sm">A partner will be in touch within one business day.</p>
              <Button className="mt-6" onClick={() => { setShowForm(false); setSubmitted(false); }}>Close</Button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Start a Conversation</h3>
              <div className="space-y-4">
                <input placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900" />
                <input placeholder="Company / Organization" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900" />
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white">
                  <option>I&apos;m an Entrepreneur</option>
                  <option>I&apos;m an Investor</option>
                  <option>I&apos;m an Advisor</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Tell us about your opportunity..." rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 resize-none" />
                <Button className="w-full py-3" onClick={() => setSubmitted(true)}>Send Message</Button>
              </div>
            </>
          )}
        </div>
      </div>
    )}
    </>
  )
}
