"use client";

import { opened, openUse, useCollapsible } from "@/store/use-coustomize";
import { RefreshCcw, Settings, X } from "lucide-react";
import { Button } from "../ui/button";
import { sidebarCollapsible } from "@/data/settings";

export default function AppearanceSettings() {
  const sidebarValue = useCollapsible((state) => state.sidebarValue);
  const changeSidebarValue = useCollapsible(
    (state) => state.changeSidebarValue,
  );

  if (!opened()) return null;
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={openUse()}></div>
      <div className="flex h-[100vh] w-80 sm:w-95 flex-col bg-sidebar text-sidebar-foreground fixed right-0 top-0 z-50 transition duration-500">
        <header className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-accent rounded-md w-10 h-10 flex items-center justify-center">
                <Settings className="dark:text-white" />
              </div>
              <span className="text-xl font-bold">Customizer</span>
            </div>
            <div className="flex items-center gap-1">
              <Button className="w-11 h-11" variant="outline">
                <RefreshCcw />
              </Button>
              <Button
                className="w-11 h-11"
                size="icon-lg"
                variant="outline"
                onClick={openUse()}
              >
                <X />
              </Button>
            </div>
          </div>
        </header>
        <div className="px-2 hidden md:block">
          <div className="flex items-center gap-4 justify-center">
            <div
              className={
                sidebarValue.variant === "offcanvas"
                  ? "w-25 h-25 border-2 dark:border-white border-black bg-accent rounded-xl flex items-center justify-center gap-1 flex-col cursor-pointer transition duration-300"
                  : "w-25 h-25 border rounded-xl flex items-center justify-center gap-1 flex-col cursor-pointer transition duration-300"
              }
              onClick={() => changeSidebarValue(sidebarCollapsible[0])}
            >
              <span className="text-sm font-bold">Off Canvas</span>
              <img
                src="../icons/sidebar-none.png"
                alt="icon"
                className="dark:hidden select-none"
              />
              <img
                src="../icons/sidebar-none-dark.png"
                alt="icon"
                className="hidden dark:block select-none"
              />
            </div>
            <div
              className={
                sidebarValue.variant === "icon"
                  ? "w-25 h-25 border-2 dark:border-white border-black bg-accent rounded-xl flex items-center justify-center gap-1 flex-col cursor-pointer transition duration-300"
                  : "w-25 h-25 border rounded-xl flex items-center justify-center gap-1 flex-col cursor-pointer transition duration-300"
              }
              onClick={() => changeSidebarValue(sidebarCollapsible[1])}
            >
              <span className="text-sm font-bold">Icon</span>
              <img
                src="../icons/sidebar-icon.png"
                alt="icon"
                className="dark:hidden select-none"
              />
              <img
                src="../icons/sidebar-icon-dark.png"
                alt="icon"
                className="hidden dark:block select-none"
              />
            </div>
            <div
              className={
                sidebarValue.variant === "none"
                  ? "w-25 h-25 border-2 dark:border-white border-black bg-accent rounded-xl flex items-center justify-center gap-1 flex-col cursor-pointer transition duration-300"
                  : "w-25 h-25 border rounded-xl flex items-center justify-center gap-1 flex-col cursor-pointer transition duration-300"
              }
              onClick={() => changeSidebarValue(sidebarCollapsible[2])}
            >
              <span className="text-sm font-bold">None</span>
              <img
                src="../icons/sidebar-offcanvas.png"
                alt="icon"
                className="dark:hidden select-none"
              />
              <img
                src="../icons/sidebar-offcanvas-dark.png"
                alt="icon"
                className="hidden dark:block select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
