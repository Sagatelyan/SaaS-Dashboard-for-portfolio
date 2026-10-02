"use client";

import { Ellipsis } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DothDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="secondary">
            <Ellipsis />
          </Button>
        }
      />
      <DropdownMenuContent className="w-45">
        <DropdownMenuItem className="p-2">
          <a href="#"> View more</a>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2">
          <a href="#">Compare periods</a>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2">
          <a href="#">Export data</a>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2">
          <a href="#">Change date ranget</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
