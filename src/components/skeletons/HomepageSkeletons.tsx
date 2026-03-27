// Skeleton loading components for Suspense boundaries

export function HeroSkeleton() {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_70%)]" />
      </div>
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pt-20">
        {/* Badge skeleton */}
        <div className="h-10 w-64 bg-white/5 rounded-full mb-8 animate-pulse" />
        {/* Title skeleton */}
        <div className="h-24 w-full max-w-4xl bg-white/5 rounded-2xl mb-8 animate-pulse" />
        {/* Subtitle skeleton */}
        <div className="h-16 w-full max-w-2xl bg-white/5 rounded-xl mb-12 animate-pulse" />
        {/* Buttons skeleton */}
        <div className="flex gap-6">
          <div className="h-14 w-48 bg-ocean/20 rounded-full animate-pulse" />
          <div className="h-14 w-48 bg-white/5 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export function FeaturesSkeleton() {
  return (
    <section className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-20">
          <div className="h-6 w-32 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-12 w-80 bg-white/5 rounded-xl mx-auto mb-6 animate-pulse" />
          <div className="h-8 w-96 bg-white/5 rounded mx-auto animate-pulse" />
        </div>
        {/* Cards skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 bg-card rounded-2xl border border-white/5 animate-pulse">
              <div className="w-12 h-12 bg-ocean/10 rounded-xl mb-4" />
              <div className="h-6 w-32 bg-white/5 rounded mb-3" />
              <div className="h-16 w-full bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSkeleton() {
  return (
    <section className="relative py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-6 w-24 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-64 bg-white/5 rounded-xl mx-auto animate-pulse" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 bg-card rounded-2xl border border-white/5 animate-pulse">
              <div className="w-14 h-14 bg-ocean/10 rounded-xl mb-6" />
              <div className="h-8 w-40 bg-white/5 rounded mb-4" />
              <div className="h-20 w-full bg-white/5 rounded mb-6" />
              <div className="h-10 w-full bg-ocean/20 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-6 w-32 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-72 bg-white/5 rounded-xl mx-auto animate-pulse" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 bg-card rounded-2xl border border-white/5 animate-pulse">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/5 rounded-full" />
                <div>
                  <div className="h-5 w-24 bg-white/5 rounded mb-2" />
                  <div className="h-4 w-32 bg-white/5 rounded" />
                </div>
              </div>
              <div className="h-24 w-full bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASkeleton() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-ocean/20 animate-pulse">
          <div className="px-8 py-20 lg:px-16 text-center">
            <div className="h-10 w-80 bg-white/10 rounded-xl mx-auto mb-4" />
            <div className="h-6 w-96 bg-white/10 rounded mx-auto mb-8" />
            <div className="h-14 w-48 bg-white/20 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocalSectionSkeleton() {
  return (
    <section className="relative py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="h-6 w-32 bg-white/5 rounded mb-4 animate-pulse" />
            <div className="h-12 w-80 bg-white/5 rounded-xl mb-6 animate-pulse" />
            <div className="h-24 w-full bg-white/5 rounded mb-8 animate-pulse" />
            <div className="h-12 w-40 bg-ocean/20 rounded-full animate-pulse" />
          </div>
          <div className="h-80 bg-white/5 rounded-2xl animate-pulse" />
        </div>
      </div>
    </section>
  );
}
