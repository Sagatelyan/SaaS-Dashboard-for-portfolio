"use client";

import { AvatarWithBadge } from "../avatar-with-badge";
import { Check } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Team } from "@/data/teams";
import { useTeams } from "@/store/use-teams";

type TeamCardProps = {
  team: Team;
};

export default function TeamCard({ team }: TeamCardProps) {
  const currentTeam = useTeams((state) => state.currentTeam);
  const changeTeam = useTeams((state) => state.changeTeam);


  return (
    <DropdownMenuItem
      className={"py-1 px-4 mb-2 bg-accent"}
      onClick={() => changeTeam(team)}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm">
          <AvatarWithBadge src={team.avatar} badge={false} /> {team.name}
        </div>
      </div>
    </DropdownMenuItem>
  );
}
