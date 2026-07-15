"use client";

import { useState } from "react";

interface LabEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const events: LabEvent[] = [
  {
    date: "May, 2026",
    title: "Teacher's Day",
    description: "The lab celebrated Teacher's Day together with a cake and flowers.",
    image: "/teachers-day-2026.jpg",
  },
  {
    date: "May, 2025",
    title: "First Teacher's Day",
    description: "The lab celebrated its first Teacher's Day together.",
  },
];

function EventPhotoModal({
  event,
  onClose,
}: {
  event: LabEvent;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-crimson px-6 py-4 flex items-center justify-between">
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-white/70">
              {event.date}
            </span>
            <h3 className="text-lg font-bold text-white">{event.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors text-2xl leading-none shrink-0"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="w-full max-h-[70vh] object-contain bg-warm"
          />
        )}
      </div>
    </div>
  );
}

export default function EventsClient() {
  const [activeEvent, setActiveEvent] = useState<LabEvent | null>(null);

  return (
    <>
      <div className="space-y-6">
        {events.map((event, i) => {
          const clickable = !!event.image;
          return (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-crimson/20 ${
                clickable ? "cursor-pointer" : ""
              }`}
              onClick={clickable ? () => setActiveEvent(event) : undefined}
            >
              <div className="h-1.5 bg-gradient-to-r from-crimson to-ivory" />
              <div className="p-6">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-crimson bg-crimson/10 px-3 py-1 rounded-lg mb-3">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {event.title}
                  {clickable && (
                    <span className="ml-2 text-xs text-crimson font-normal align-middle">
                      View Photo
                    </span>
                  )}
                </h3>
                <p className="text-muted mt-2">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {activeEvent && (
        <EventPhotoModal event={activeEvent} onClose={() => setActiveEvent(null)} />
      )}
    </>
  );
}
