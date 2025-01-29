"use client"

import * as React from "react"

import { NavMain } from "@/components/sideBar/nav-main"
import { NavProjects } from "@/components/sideBar/nav-projects"
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
      <SidebarHeader>
        <SidebarLogo />
        <ModeSwitcher />
        <AlgorithmSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavProjects />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
