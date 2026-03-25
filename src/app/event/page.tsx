import type { Metadata } from "next";
import PageSection from "@/components/PageSection";

export const metadata: Metadata = {
  title: "News & Events",
};

const events = [
  {
    date: "May, 2025",
    title: "First Teacher's Day",
    description: "The lab celebrated its first Teacher's Day together.",
    type: "event" as const,
  },
];

const news = [
  { date: "March, 2026", text: "Minje Sung, Yujin Kim started their MS-Ph.D integrated program. Welcome!" },
  { date: "December, 2025", text: "Jaehyuk Jeon joined the lab as student intern. Welcome!" },
  { date: "November, 2025", text: "Ina Jeon joined the lab as incoming Master's student. Welcome!" },
  { date: "September, 2025", text: "Seoyeon Kim started her Ph.D program. Dongwon Yun started his Master's program. Welcome!" },
  { date: "July, 2025", text: "YuJin Kim joined the lab as student intern. Welcome!" },
  { date: "March, 2025", text: "Seoyeon Kim joined the lab as an incoming Ph.D student. Welcome!" },
  { date: "March, 2025", text: "Dongwon Yun, Minje Sung joined the lab as an incoming master's student. Welcome!" },
  { date: "November, 2024", text: "Jiwon Lee joined the Lab as student intern. Welcome!" },
  { date: "September, 2024", text: "The Genomic Analysis Lab opened." },
];

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
        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-crimson/20"
            >
              <div className="h-1.5 bg-gradient-to-r from-crimson to-ivory" />
              <div className="p-6">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-crimson bg-crimson/10 px-3 py-1 rounded-lg mb-3">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                <p className="text-muted mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection title="News">
        <div className="space-y-0">
          {news.map((item, i) => (
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
