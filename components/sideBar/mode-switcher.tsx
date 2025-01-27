"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link"; // Import Next.js Link

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

export function ModeSwitcher({
  modes,
}: {
  modes: {
    name: string;
    logo: React.ElementType;
    plan: string;
    url: string; // URL property for navigation
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeMode, setActiveMode] = React.useState(modes[0]);

  const handleModeChange = (mode: typeof modes[number]) => {
    setActiveMode(mode); // Update the active mode
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
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
                onClick={() => handleModeChange(mode)} // Update active mode
                className="gap-2 p-2 cursor-pointer"
              >
                <Link href={mode.url} className="flex w-full items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <mode.logo className="size-4 shrink-0" />
                  </div>
                  {mode.name}
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
