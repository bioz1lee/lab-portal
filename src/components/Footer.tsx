import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-crimson-dark text-white/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="MOsAIciSM" className="h-7" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm leading-relaxed text-white/70 mb-2 italic">
              Decoding Somatic Mosaicism with AI and Multi-Omics
            </p>
            <p className="text-sm leading-relaxed mt-3">
              School of Biosystems and Biomedical Sciences
              <br />
              College of Health Science, Korea University
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/research", label: "Research" },
                { href: "/publication", label: "Publications" },
                { href: "/members", label: "Members" },
                { href: "/join", label: "Join Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Contact</h3>
            <p className="text-sm">Principal Investigator</p>
            <p className="text-white font-medium text-sm">Prof. Taejeong Bae</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} MOsAIciSM Lab @ Korea University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
