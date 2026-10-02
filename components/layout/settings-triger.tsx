"use client";

import { openUse } from "@/store/use-coustomize";
import { Settings } from "lucide-react";

export default function SettingsTriger() {
  return (
    <div
      onClick={openUse()}
      className="
          w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black dark:bg-white flex items-center justify-center fixed right-5 top-[50%]
          z-50 transition duration-200 hover:opacity-75
          "
    >
      <Settings className="text-white dark:text-black w-6 sm:w-7 h-6 sm:h-7" />
    </div>
  );
}
