"use client";

import React from "react";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

const SidebarLogo = () => {
  return (
    <Link href="/">
      <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black text-white">
          <Image src="/logo.svg" alt="Icon" className="size-4" width={16} height={16} />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Amaze</span>
          <span className="truncate text-xs">Generate, Visualize and Conquer</span>
        </div>
      </SidebarMenuButton>
    </Link>
  );
};

export default SidebarLogo;
