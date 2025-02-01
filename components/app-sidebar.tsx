"use client"

import * as React from "react"

import { NavCustomizations } from "@/components/sideBar/nav-customizations"
import { ModeSwitcher } from "@/components/sideBar/mode-switcher"
import SidebarLogo from "./sideBar/SidebarLogo"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { AlgorithmSwitcher } from "./sideBar/algo-switcher"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="space-y-4">
        <SidebarLogo />
        <ModeSwitcher />
        <AlgorithmSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavCustomizations />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
