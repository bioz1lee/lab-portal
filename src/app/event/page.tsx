import type { Metadata } from "next";
import PageSection from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Event",
};

const events = [
  {
    date: "May, 2025",
    title: "First Teacher's Day",
    description: "The lab celebrated its first Teacher's Day together.",
  },
];

export default function EventPage() {
  return (
    <>
      <section className="bg-crimson relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-1/2 -right-1/4 w-2/3 h-full bg-gradient-to-l from-white/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-crimson-100 text-sm font-medium uppercase tracking-widest mb-3">Lab Life</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Events</h1>
        </div>
      </section>

      <PageSection title="Lab Events">
        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-crimson/20"
            >
              <div className="h-1.5 bg-gradient-to-r from-crimson to-teal" />
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
    </>
  );
}
