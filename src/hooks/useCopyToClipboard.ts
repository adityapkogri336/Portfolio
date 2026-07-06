import { useState } from "react";

export function useCopyToClipboard(resetDelay = 1500) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API unavailable — the mailto link still proceeds on its own.
    }
    setCopied(true);
    setTimeout(() => setCopied(false), resetDelay);
  };

  return { copied, copy };
}
