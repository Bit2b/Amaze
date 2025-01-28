"use client";

import * as React from "react";
import { ChevronsUpDown, TreePine, Trees } from "lucide-react"; // Import the Dice icon

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
import { useAlgorithmStore } from "@/store/algorithmStore";
import { MazeAlgorithm } from "@/types";

export function AlgorithmSwitcher() {
  const { isMobile } = useSidebar();
  const setCurrentAlgorithm = useAlgorithmStore((state) => state.setCurrentAlgorithm);
  const [activeAlgorithm, setActiveAlgorithm] = React.useState<MazeAlgorithm>(MazeAlgorithm.KRUSKAL);

  const handleAlgorithmChange = (algorithm: MazeAlgorithm) => {
    setActiveAlgorithm(algorithm); // Update local active algorithm
    setCurrentAlgorithm(algorithm); // Update algorithm in Zustand store
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
              {/* Active algorithm display */}
              <div className="flex items-center gap-2">
                {/* Dice icon with background for active algorithm */}
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black text-white">
                  <Trees className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{activeAlgorithm}</span>
                </div>
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
              Algorithms
            </DropdownMenuLabel>
            {Object.values(MazeAlgorithm).map((algorithm) => (
              <DropdownMenuItem
                key={algorithm}
                onClick={() => handleAlgorithmChange(algorithm)}
                className="gap-2 p-2 cursor-pointer"
              >
                {/* Dice icon with background for each algorithm */}
                <div className="flex aspect-square size-6 items-center justify-center rounded-sm bg-black text-white">
                  <TreePine className="size-4" />
                </div>
                {algorithm}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
