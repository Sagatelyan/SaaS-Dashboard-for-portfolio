"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Box,
  ChartLine,
  ChevronDown,
  ClipboardCheck,
  DollarSign,
  FolderOpen,
  LayoutDashboard,
  Percent,
  ReceiptText,
  ShieldHalf,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

import { useTeams } from "@/store/use-teams";
import { NavUser } from "../sidebar/nav-user";
import { NavTeams } from "../sidebar/nav-teams";
import { profils } from "@/data/profils";
import { useCollapsible } from "@/store/use-coustomize";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import { Badge } from "../ui/badge";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    id: 1,
    name: "All Projects",
    href: "/projects",
  },
  {
    id: 2,
    name: "My Projects",
    href: "/my-projects",
  },
  {
    id: 3,
    name: "Archived",
    href: "/archived",
  },
];

const analyticsItems = [
  {
    id: 1,
    title: "Analytics",
    icon: ChartLine,
    href: "/analytics",
  },
  {
    id: 2,
    title: "Sales",
    icon: Percent,
    href: "/sales",
  },
];

const commerceItems = [
  {
    id: 1,
    title: "Orders",
    icon: ShoppingCart,
    href: "/orders",
  },
  {
    id: 2,
    title: "Products",
    icon: Box,
    href: "/products",
  },
  {
    id: 3,
    title: "Customers",
    icon: UsersRound,
    href: "/customers",
  },
];

const financeItems = [
  {
    id: 1,
    title: "Billing",
    icon: DollarSign,
    href: "/billing",
    badge: false,
  },
  {
    id: 2,
    title: "Invoices",
    icon: ReceiptText,
    href: "/invoices",
    badge: true,
  },
];

export function AppSidebar() {
  const currentTeam = useTeams((state) => state.currentTeam);

  const { state } = useSidebar();

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const { sidebarValue } = useCollapsible();
  const isMobile = useIsMobile();

  return (
    <Sidebar
      collapsible={isMobile ? "offcanvas" : sidebarValue.variant}
      className="min-h-[100vh]"
    >
      <SidebarHeader>
        <NavTeams team={currentTeam} />
      </SidebarHeader>

      <SidebarContent>
        {/* Dashboard */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Link href="/">
                      <SidebarMenuButton
                        className={cn(
                          isActive("/") && "bg-accent text-accent-foreground",
                        )}
                      >
                        <LayoutDashboard />
                        <span>Dashboard</span>
                      </SidebarMenuButton>
                    </Link>
                  }
                />

                {state === "collapsed" && (
                  <TooltipContent side="right">Dashboard</TooltipContent>
                )}
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Workspace */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold">
            Workspace
          </SidebarGroupLabel>

          {/* Projects */}
          <SidebarMenu>
            <SidebarMenuItem className="mb-1">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Collapsible>
                      <CollapsibleTrigger
                        render={
                          <SidebarMenuButton
                            className={
                              pathname.includes("project")
                                ? "flex items-center justify-between bg-accent text-accent-foreground"
                                : "flex items-center justify-between"
                            }
                          >
                            <div className="flex items-center gap-3">
                              <FolderOpen />
                              <span>Projects</span>
                            </div>

                            <ChevronDown />
                          </SidebarMenuButton>
                        }
                      />

                      <CollapsibleContent>
                        {projects.map((project) => {
                          const active = isActive(project.href);

                          return (
                            <SidebarMenuSub key={project.id}>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton
                                  className={cn(
                                    active &&
                                      "bg-accent text-accent-foreground",
                                  )}
                                  render={
                                    <Link href={project.href}>
                                      {project.name}
                                    </Link>
                                  }
                                />
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          );
                        })}
                      </CollapsibleContent>
                    </Collapsible>
                  }
                />

                {state === "collapsed" && (
                  <TooltipContent side="right">Projects</TooltipContent>
                )}
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Tasks */}
          <SidebarMenu>
            <SidebarMenuItem className="mb-1">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Link href="/tasks">
                      <SidebarMenuButton
                        className={cn(
                          "flex items-center justify-between",
                          isActive("/tasks") &&
                            "bg-accent text-accent-foreground",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <ClipboardCheck />
                          <span>Tasks</span>
                        </div>

                        <Badge variant="secondary">2</Badge>
                      </SidebarMenuButton>
                    </Link>
                  }
                />

                {state === "collapsed" && (
                  <TooltipContent side="right">Tasks</TooltipContent>
                )}
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>

          {/* Team */}
          <SidebarMenu>
            <SidebarMenuItem className="mb-1">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Link href="/team">
                      <SidebarMenuButton
                        className={cn(
                          "flex items-center justify-between",
                          isActive("/team") &&
                            "bg-accent text-accent-foreground",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <ShieldHalf />
                          <span>Team</span>
                        </div>

                        <Badge variant="secondary">11</Badge>
                      </SidebarMenuButton>
                    </Link>
                  }
                />

                {state === "collapsed" && (
                  <TooltipContent side="right">Team</TooltipContent>
                )}
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Analytics */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold">
            Analytics
          </SidebarGroupLabel>

          <SidebarMenu>
            {analyticsItems.map((item) => {
              return (
                <SidebarMenuItem key={item.id} className="mb-1">
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Link href={item.href}>
                          <SidebarMenuButton
                            className={
                              pathname.includes(item.href)
                                ? "flex items-center bg-accent text-accent-foreground"
                                : "flex items-center"
                            }
                          >
                            <item.icon />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                        </Link>
                      }
                    />

                    {state === "collapsed" && (
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    )}
                  </Tooltip>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* Commerce */}

        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold">
            Commerce
          </SidebarGroupLabel>

          <SidebarMenu>
            {commerceItems.map((item) => {
              return (
                <SidebarMenuItem key={item.id} className="mb-1">
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Link href={item.href}>
                          <SidebarMenuButton
                            className={
                              pathname.includes(item.href)
                                ? "flex items-center bg-accent text-accent-foreground"
                                : "flex items-center"
                            }
                          >
                            <item.icon />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                        </Link>
                      }
                    />

                    {state === "collapsed" && (
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    )}
                  </Tooltip>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* Finance */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold">
            Finance
          </SidebarGroupLabel>

          <SidebarMenu>
            {financeItems.map((item) => {
              const active = isActive(item.href);

              return (
                <SidebarMenuItem key={item.id} className="mb-1">
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Link href={item.href}>
                          <SidebarMenuButton
                            className={cn(
                              "flex items-center justify-between",
                              active && "bg-accent text-accent-foreground",
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <item.icon />
                              <span>{item.title}</span>
                            </div>

                            {item.badge && <Badge variant="secondary">2</Badge>}
                          </SidebarMenuButton>
                        </Link>
                      }
                    />

                    {state === "collapsed" && (
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    )}
                  </Tooltip>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={profils[0]} />
      </SidebarFooter>
    </Sidebar>
  );
}
