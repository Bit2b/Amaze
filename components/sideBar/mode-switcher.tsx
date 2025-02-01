"use client";

import * as React from "react";
import { Blocks, ChevronsUpDown, Gamepad, LayoutPanelTop, Route } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
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

const modes = [
  {
    name: "Home",
    logo: LayoutPanelTop,
    plan: "Switch it to play",
    url: "/",
  },
  {
    name: "Game",
    logo: Gamepad,
    plan: "Click on Grid To Play",
    url: "/game",
  },
  {
    name: "Visualize",
    logo: Route,
    plan: "Watch And Enjoy",
    url: "/visualize",
  },
  {
    name: "Generate",
    logo: Blocks,
    plan: "Observe",
    url: "/generate",
  },
];

export function ModeSwitcher() {
  const { isMobile } = useSidebar();
  const pathname = usePathname();
  const activeMode = modes.find(mode => mode.url === pathname) || modes[0];

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black text-white">
                <activeMode.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeMode.name}
                </span>
                <span className="truncate text-xs">{activeMode.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Modes
            </DropdownMenuLabel>
            {modes.map((mode) => (
              <DropdownMenuItem
                key={mode.name}
                asChild
                className="p-0 cursor-pointer"
              >
                <Link href={mode.url} className="w-full">
                  <div className="flex items-center gap-2 p-2">
                    <div className="flex size-6 items-center justify-center rounded-sm border">
                      <mode.logo className="size-4 shrink-0" />
                    </div>
                    {mode.name}
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}