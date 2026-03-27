// Generic page skeleton for other pages

export function PageHeaderSkeleton() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--ocean)_0%,transparent_50%)] opacity-20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="h-5 w-24 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-14 w-full max-w-xl bg-white/5 rounded-xl mx-auto mb-6 animate-pulse" />
          <div className="h-8 w-full max-w-2xl bg-white/5 rounded mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export function PageContentSkeleton() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 bg-card rounded-2xl border border-white/5 animate-pulse">
              <div className="h-48 bg-white/5 rounded-xl mb-4" />
              <div className="h-6 w-40 bg-white/5 rounded mb-3" />
              <div className="h-16 w-full bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FullPageSkeleton() {
  return (
    <div className="relative overflow-hidden">
      <PageHeaderSkeleton />
      <PageContentSkeleton />
    </div>
  );
}
