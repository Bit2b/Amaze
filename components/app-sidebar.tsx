"use client"

import * as React from "react"
import {
  Blocks,
  BookOpen,
  Bot,
  Gamepad,
  LayoutPanelTop,
  Map,
  PieChart,
  Route,
  Settings2,
  SquareTerminal,
} from "lucide-react"

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

// This is sample data.
const data = {
  modes: [
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
      url: "game",
    },
    {
      name: "Visualize",
      logo: Route,
      plan: "Watch And Enjoy",
      url: "visualize",
    },
    {
      name: "Generate",
      logo: Blocks,
      plan: "Observe",
      url: "generate",
    },
  ],
  navMain: [
    {
      title: "Algorithms",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Mode",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Settings",
      url: "settings",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarLogo/>
        <ModeSwitcher modes={data.modes} />
        <AlgorithmSwitcher/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
