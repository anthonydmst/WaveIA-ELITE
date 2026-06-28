"use client";

export function StoreLocator() {
  return (
    <div
      className="relative aspect-video lg:aspect-21/9 rounded-2xl overflow-hidden border border-border group animate-scale-in"
    >
      <div className="absolute inset-0 bg-ocean/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92631.91254785668!2d-1.5997399!3d43.4510722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51152b0af31e33%3A0x40665174813a830!2sBiarritz!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(20%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
        title="Carte Intervention WaveIA Côte Basque"
      />
    </div>
  );
}

