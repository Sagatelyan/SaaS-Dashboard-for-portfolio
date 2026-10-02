import { create } from "zustand";
import { persist } from "zustand/middleware";
import { teams, Team } from "@/data/teams";

type TeamStore = {
  currentTeam: Team;
  changeTeam: (team: Team) => void;
};

export const useTeams = create<TeamStore>()(
  persist(
    (set) => ({
      currentTeam: teams[0],

      changeTeam: (team) => {
        set({
          currentTeam: team,
        });
      },
    }),
    {
      name: "selected-workpaces",
    },
  ),
);
