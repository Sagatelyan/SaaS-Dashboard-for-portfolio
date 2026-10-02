"use client";

import {
  BadgeCheck,
  Bell,
  ChevronDown,
  ChevronUp,
  CreditCard,
  LogOut,
  Plus,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import TeamCard from "./team-card";
import { teams } from "@/data/teams";
import ButtonAddTeam from "./button-add-team";

export function NavTeams({
  team,
}: {
  team: {
    name: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                className="bg-transparent hover:bg-accent"
                size="lg"
              />
            }
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Avatar>
                <AvatarImage src={team.avatar} alt="avatar" />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="text-black dark:text-white font-bold text-sm] truncate">
                {team.name}
              </span>
            </div>
            <ChevronDown className="dark:text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-70 min-w-56 rounded-lg"
            side={isMobile ? "top" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-sm p-2">
                Workpaces
              </DropdownMenuLabel>
              {/* items */}
              {teams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <ButtonAddTeam />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
