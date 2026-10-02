export type SidebarCollapsibleProps = {
  id: number;
  variant: "offcanvas" | "icon" | "none";
  label: string;
};

export const sidebarCollapsible: SidebarCollapsibleProps[] = [
  {
    id: 1,
    variant: "offcanvas",
    label: "Offcanvas",
  },
  {
    id: 2,
    variant: "icon",
    label: "Icon",
  },
  {
    id: 3,
    variant: "none",
    label: "None",
  },
];
