"use client";

import { Check, X, Crown } from "lucide-react";

interface ComparisonRow {
  feature: string;
  us: string | boolean;
  them: (string | boolean)[];
}

interface Props {
  title: string;
  subtitle?: string;
  competitors: string[];
  rows: ComparisonRow[];
}

function renderValue(value: string | boolean) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-400 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-red-400/50 mx-auto" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

export function ComparisonTable({ title, subtitle, competitors, rows }: Props) {
  return (
    <section className="relative max-w-5xl mx-auto px-6 lg:px-8 w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 border border-ocean/20 text-ocean text-xs font-bold mb-4">
          <Crown className="w-3 h-3" />
          COMPARATIF
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground">{subtitle}</p>
        )}
      </div>
      
      <div className="overflow-x-auto animate-in">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left text-sm font-medium text-muted-foreground bg-card/30 rounded-tl-xl">
                Fonctionnalité
              </th>
              <th className="p-4 text-center bg-ocean/20 border-x-2 border-ocean/30">
                <div className="flex items-center justify-center gap-2 text-ocean font-bold">
                  <Crown className="w-4 h-4" />
                  WaveIA
                </div>
              </th>
              {competitors.map((comp, idx) => (
                <th
                  key={idx}
                  className={`p-4 text-center text-sm font-medium text-muted-foreground bg-card/30 ${
                    idx === competitors.length - 1 ? "rounded-tr-xl" : ""
                  }`}
                >
                  {comp}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`border-t border-glass-border ${idx % 2 === 0 ? "bg-glass-bg" : ""}`}
              >
                <td className="p-4 text-sm font-medium text-foreground">
                  {row.feature}
                </td>
                <td className="p-4 text-center bg-ocean/10 border-x-2 border-ocean/20 font-bold text-ocean">
                  {renderValue(row.us)}
                </td>
                {row.them.map((val, i) => (
                  <td key={i} className="p-4 text-center text-muted-foreground">
                    {renderValue(val)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Floating CTA */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          La différence est claire. Passez au niveau supérieur.
        </p>
      </div>
    </section>
  );
}

