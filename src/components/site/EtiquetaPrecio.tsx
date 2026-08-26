"use client";

import { useTr } from "@/i18n/LanguageProvider";

/**
 * Price-table label. The clarification in brackets — "(por pieza)",
 * "(implante + corona)" — is set smaller and muted, so the row scans as one
 * treatment name.
 *
 * Translation happens on the whole label before the split: English moves the
 * bracket differently ("per tooth" vs "por pieza"), and splitting first would
 * leave two half-strings no dictionary key can match.
 */
export function EtiquetaPrecioTraducida({ etiqueta }: { etiqueta: string }) {
  const texto = useTr()(etiqueta);
  const partes = texto.match(/^(.*?)(\s*\([^)]*\))$/);

  if (!partes) return <>{texto}</>;

  return (
    <>
      {partes[1]}
      <span className="text-[13px] leading-[18px] tracking-[-0.13px] text-muted-foreground">
        {partes[2]}
      </span>
    </>
  );
}
