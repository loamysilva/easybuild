type StepLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function StepLayout({
  title,
  subtitle,
  children,
}: StepLayoutProps) {
  return (
    <section className="max-w-5xl w-full mx-auto text-center">
      
      {subtitle && (
        <p className="text-zinc-400 mb-3">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-bold mb-10">
        {title}
      </h2>

      {children}

    </section>
  );
}