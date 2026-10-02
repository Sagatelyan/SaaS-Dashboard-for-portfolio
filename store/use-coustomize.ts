import { sidebarCollapsible, SidebarCollapsibleProps } from "@/data/settings";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SettingsState {
  opened: boolean;
  openUse: () => void;
}

const useSettings = create<SettingsState>()((set) => ({
  opened: false,
  openUse: () => set((state) => ({ opened: !state.opened })),
}));

export const opened = () => useSettings((state) => state.opened);
export const openUse = () => useSettings.getState().openUse;

type CoustomizerStore = {
  sidebarValue: SidebarCollapsibleProps;
  changeSidebarValue: (sidebarValue: SidebarCollapsibleProps) => void;
};

export const useCollapsible = create<CoustomizerStore>()(
  persist(
    (set) => ({
      sidebarValue: sidebarCollapsible[0],

      changeSidebarValue: (value) => {
        set({
          sidebarValue: value,
        });
      },
    }),
    {
      name: "selected-sidebar-value",
    },
  ),
);
