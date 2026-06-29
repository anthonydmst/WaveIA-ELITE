import React from 'react';

export function RefonteApprocheSection() {
  const approaches = [
    {
      num: "01",
      title: "Votre site est esthétiquement dépassé ?",
      subtitle: "Direction Artistique & UI",
      content: "Notre Studio conçoit une interface moderne, fluide et élégante. Nous réalignons l'esthétique de votre site sur les standards actuels (typographies premium, mise en page épurée) pour restaurer instantanément la confiance de vos visiteurs dès les premières secondes de navigation."
    },
    {
      num: "02",
      title: "Votre site est devenu un frein à la conversion ?",
      subtitle: "Ingénierie UX & CRO",
      content: "Nous ne plaçons aucun bouton au hasard. Nous repensons intégralement l'architecture de l'information et vos tunnels d'acquisition. L'objectif : éliminer chaque clic inutile, réduire la charge cognitive et guider naturellement l'utilisateur vers la prise de contact ou l'acte d'achat."
    },
    {
      num: "03",
      title: "Votre site est lent et complexe à maintenir ?",
      subtitle: "Excellence Technique",
      content: "Fini les usines à gaz. Nous éradiquons votre dette technique en développant votre plateforme sur des fondations modernes, légères et sécurisées. Le résultat : un site ultra-rapide et un back-office intuitif qui vous rend 100 % autonome au quotidien, sans faire appel à un développeur pour chaque modification."
    },
    {
      num: "04",
      title: "Votre site est en décalage avec votre niveau d'expertise ?",
      subtitle: "Stratégie de Marque",
      content: "Nous réinjectons l'ADN de votre entreprise dans chaque pixel de votre plateforme. En alignant votre vitrine digitale avec votre niveau d'exigence réel, nous justifions vos prix et confirmons votre statut d'expert, vous redonnant la capacité de séduire et de signer des grands comptes."
    },
    {
      num: "05",
      title: "Votre site est invisible sur les moteurs de recherche ?",
      subtitle: "Architecture SEO-First",
      content: "Nous reconstruisons le socle de votre site pour les moteurs de recherche. En déployant une arborescence logique, des cocons sémantiques ciblés et un maillage interne optimisé, votre nouveau site est techniquement et sémantiquement configuré pour capter la demande qualifiée et dépasser vos concurrents sur Google."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,165,233,0.04)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-ocean uppercase tracking-[0.14em] mb-4">
            <div className="w-5 h-[1.5px] bg-primary"></div>
            NOTRE APPROCHE
            <div className="w-5 h-[1.5px] bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
            Transformer vos faiblesses actuelles en <span className="text-ocean">leviers de rentabilité</span>.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            À chaque point de friction correspond une solution d'ingénierie précise. Chez Waveia, nous ne faisons pas de rapiéçage. Nous appliquons une méthodologie de restructuration globale pour que votre nouveau site devienne votre meilleur actif commercial.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 animate-in delay-100">
          {approaches.map((item, idx) => (
            <div key={idx} className="glass-card relative overflow-hidden bg-card border-border/50 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center hover:border-ocean/40 transition-all duration-500 group hover:shadow-[0_10px_40px_rgba(14,165,233,0.08)] hover:-translate-y-1">
              {/* Massive Ghost Number */}
              <div className="absolute -right-4 -bottom-8 md:top-1/2 md:-translate-y-1/2 md:right-4 pointer-events-none transition-transform duration-700 group-hover:scale-110">
                <span className="font-heading font-black text-[100px] md:text-[180px] text-ocean/[0.04] leading-none select-none">{item.num}</span>
              </div>
              
              {/* Top Right Rectangle Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center justify-center bg-primary text-white text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1.5 md:px-4 md:py-2 rounded-md shadow-sm">
                {item.subtitle}
              </div>
              
              <div className="flex-1 relative z-10 w-full pt-2">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 group-hover:text-ocean transition-colors duration-300 md:pr-48">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[0.95rem] md:text-base max-w-3xl">
                  <strong className="text-emerald-500 font-bold mr-2">Notre solution ➔</strong>
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
