import Link from "next/link";
import ObfuscatedEmail from "./ObfuscatedEmail";

export default function Footer({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="bg-crimson-dark text-white/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${basePath}/logo.svg`} alt="MOsAIciSM" className="h-7" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm leading-relaxed text-white/70 mb-2 italic">
              Decoding Somatic Mosaicism with AI and Multi-Omics
            </p>
            <p className="text-sm leading-relaxed mt-3">
              School of Biosystems and Biomedical Sciences
              <br />
              College of Health Science, Korea University
              <br />
              Hana Science Hall B, Room 569A
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
            <p className="text-white font-medium text-sm">Prof. Taejeong Bae</p>
            <div className="text-sm mt-2 space-y-1">
              <p>Tel: +82 2-3290-5648</p>
              <p>Email: <ObfuscatedEmail user="tjbae" domain="korea.ac.kr" className="text-white/80" /></p>
              <p>Office: Hana Science Hall B, Room 569A</p>
            </div>
            <div className="flex gap-3 mt-3">
              <a href="https://scholar.google.com/citations?user=dvwtc1kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-xs text-white/50 hover:text-white transition-colors">Google Scholar</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs">
          &copy; 2024&ndash;{new Date().getFullYear()} MOsAIciSM Lab @ Korea University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
