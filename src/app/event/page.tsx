import type { Metadata } from "next";
import PageSection from "@/components/PageSection";
import EventsClient from "@/components/EventsClient";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Events",
};

export default function EventPage() {
  return (
    <>
      <section className="bg-crimson relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson-dark/40 via-transparent to-ivory/[0.06]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-3">Lab Life</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">News &amp; Events</h1>
        </div>
      </section>

      <PageSection title="Events">
        <EventsClient />
      </PageSection>

      <PageSection title="News">
        <div className="space-y-0">
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col sm:flex-row gap-1 sm:gap-6 items-start sm:items-baseline py-4 border-b border-border last:border-0 hover:bg-warm/50 -mx-4 px-4 rounded-lg transition-colors"
            >
              <span className="text-sm font-semibold text-crimson whitespace-nowrap sm:min-w-[150px]">
                {item.date}
              </span>
              <span className="text-muted group-hover:text-foreground transition-colors">{item.text}</span>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
