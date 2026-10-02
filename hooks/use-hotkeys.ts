"use client";

import { useHotkeys } from "react-hotkeys-hook";

type UseHotkeysProps = {
  onSearch?: () => void;
  onSidebar?: () => void;
  onClose?: () => void;
};

export function useAppHotkeys({
  onSearch,
  onSidebar,
  onClose,
}: UseHotkeysProps) {
  useHotkeys(
    "mod+k",
    (event) => {
      event.preventDefault();
      onSearch?.();
    },
    {
      enableOnFormTags: false,
    },
  );

  useHotkeys("esc", () => {
    onClose?.();
  });
}
