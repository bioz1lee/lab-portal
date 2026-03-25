interface PageBannerProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function PageBanner({ subtitle, title, description }: PageBannerProps) {
  return (
    <section className="bg-crimson relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-crimson-dark/40 via-transparent to-ivory/[0.06]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-3">{subtitle}</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{title}</h1>
        {description && <p className="mt-3 text-white/70">{description}</p>}
      </div>
    </section>
  );
}
