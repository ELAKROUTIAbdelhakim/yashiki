import Image from "next/image";

import type { MenuItem } from "@/data/menu";

type MenuItemCardProps = {
  item: MenuItem;
};

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.72)] px-5 py-5 transition duration-300 hover:border-[rgba(90,110,97,0.2)] hover:bg-white sm:px-6">
      <div className="min-w-0">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <h3 className="pr-2 text-[clamp(1.5rem,2.4vw,1.9rem)] leading-[1.02] tracking-[-0.04em] text-[var(--ink)]">
            {item.name}
          </h3>
          <p className="shrink-0 rounded-full border border-[rgba(36,46,39,0.08)] bg-[rgba(255,255,255,0.72)] px-4 py-2 text-xs font-medium tabular-nums tracking-[0.08em] text-[var(--sage-deep)]">
            {item.price}€
          </p>
        </div>

        <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
          {item.description}
        </p>

        {item.badges?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[rgba(36,46,39,0.1)] bg-[rgba(245,238,228,0.7)] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--sage-deep)]"
              >
                {badge}
              </span>
            ))}
          </div>
        ) : null}

        {item.image ? (
          <details className="mt-5 overflow-hidden rounded-[1.3rem] border border-[rgba(36,46,39,0.1)] bg-[rgba(255,255,255,0.72)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--ink)] marker:content-none">
              <span>Voir l’aperçu du plat</span>
              <span className="rounded-full border border-[rgba(36,46,39,0.12)] px-3 py-1 text-[10px] text-[var(--sage-deep)]">
                Ouvrir
              </span>
            </summary>

            <div className="border-t border-[rgba(36,46,39,0.08)] p-3">
              <Image
                src={item.image}
                alt={item.imageAlt ?? item.name}
                className="aspect-[5/4] w-full rounded-[1rem] object-cover"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
              <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[var(--sage)]">
                {item.imageCaption ?? "Aperçu visuel"}
              </p>
            </div>
          </details>
        ) : null}
      </div>
    </article>
  );
}
