"use client";

import { Plus } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export default function ButtonAddTeam() {
  return (
    <DropdownMenuItem className="gap-2 p-2">
      <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
        <Plus className="size-4" />
      </div>
      <div className="font-medium text-muted-foreground">Add team</div>
    </DropdownMenuItem>
  );
}
