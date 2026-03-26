import Image from "next/image";
import Link from "next/link";

import logoSecondary from "@/imagee/logo-secondary.png";

type SiteBrandProps = {
  light?: boolean;
};

export default function SiteBrand({ light = false }: SiteBrandProps) {
  const tone = light ? "opacity-100" : "opacity-[0.88]";
  const textTone = light
    ? "text-[rgba(246,241,232,0.96)]"
    : "text-[var(--ink)]";
  const logoFx = light
    ? "brightness-[1.12] drop-shadow-[0_10px_24px_rgba(0,0,0,0.34)]"
    : "";
  const labelFx = light ? "drop-shadow-[0_8px_18px_rgba(0,0,0,0.28)]" : "";

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 transition hover:opacity-100"
      aria-label="Retour à l'accueil Yashiki"
    >
      <Image
        src={logoSecondary}
        alt="Yashiki"
        className={`h-auto w-[4.9rem] object-contain sm:w-[5.5rem] ${tone} ${logoFx}`}
        priority
      />
      <span
        className={`text-[11px] uppercase tracking-[0.3em] ${textTone} ${labelFx}`}
      >
        Yashiki
      </span>
    </Link>
  );
}
