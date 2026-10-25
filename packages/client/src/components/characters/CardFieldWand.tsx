import { Loader2, Wand2 } from "lucide-react";
import { useTranslation } from "react-i18next";

/** Reads "Generate" for an empty field and "Improve" once it has text; existing text seeds the request either way. */
export function CardFieldWand({
  label,
  value,
  onGenerate,
  disabled,
  loading,
}: {
  label: string;
  value: string;
  onGenerate: () => void;
  disabled: boolean;
  loading: boolean;
}) {
  const { t } = useTranslation();
  const improve = value.trim().length > 0;
  const text = t(improve ? "ui.cardFields.improve" : "ui.cardFields.generate", { field: label });
  return (
    <button
      type="button"
      onClick={onGenerate}
      disabled={disabled}
      aria-busy={loading}
      title={t(improve ? "ui.cardFields.improveTooltip" : "ui.cardFields.generateTooltip", { field: label })}
      className="mari-editor-action inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? <Loader2 size="1rem" className="animate-spin" aria-hidden /> : <Wand2 size="1rem" aria-hidden />}
      {text}
    </button>
  );
}
