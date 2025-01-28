"use client";

import React from "react";
import { Shield } from "lucide-react";
import { SidebarMenuButton } from "@/components/ui/sidebar";

const SidebarLogo = () => {
  return (
    <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-secondary">
        <Shield className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">Amaze</span>
        <span className="truncate text-xs">desc</span>
      </div>
    </SidebarMenuButton>
  );
};

export default SidebarLogo;
