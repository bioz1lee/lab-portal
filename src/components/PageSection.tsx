interface PageSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageSection({ title, children, className = "" }: PageSectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
          <span className="w-1 h-8 bg-crimson rounded-full" />
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
