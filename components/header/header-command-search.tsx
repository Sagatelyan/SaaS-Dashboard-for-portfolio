"use client";

import * as React from "react";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  Search,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Badge } from "../ui/badge";
import { useHotkeys } from "react-hotkeys-hook";

export function HeaderCommandSearch() {
  const [open, setOpen] = React.useState(false);

  useHotkeys("mod+k", (event) => {
    event.preventDefault();
    setOpen(true);
  });

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="w-fit pl-3 xl:pr-2 md:pr-15 pr-10"
      >
        <div className="flex items-center gap-15">
          <div className="flex items-center gap-3 text-sm dark:text-[#a5a5a5] text-[#5e5e5e]">
            <Search />
            Search...
          </div>
          <Badge
            variant={"secondary"}
            className="dark:text-[#a5a5a5] text-[#5e5e5e] xl:block hidden"
          >
            <span className="mr-1">⌘</span>K
          </Badge>
        </div>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <SmileIcon />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <CalculatorIcon />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
