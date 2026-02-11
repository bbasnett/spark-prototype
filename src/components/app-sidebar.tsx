"use client"

import * as React from "react"
import {
  LayoutDashboard,
  FileText,
  HandCoins,
  Users,
  BarChart3,
  Settings2,
  Rocket,
  ClipboardList,
  GraduationCap,
  Building2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Tenzing Sherpa",
    email: "tenzing@startup.com",
    avatar: "",
  },
  teams: [
    {
      name: "SPARK Sikkim",
      logo: Rocket,
      plan: "Startup",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
      ],
    },
    {
      title: "Applications",
      url: "#",
      icon: ClipboardList,
      items: [
        {
          title: "My Applications",
          url: "#",
        },
        {
          title: "New Application",
          url: "#",
        },
        {
          title: "Track Status",
          url: "#",
        },
      ],
    },
    {
      title: "Funding",
      url: "#",
      icon: HandCoins,
      items: [
        {
          title: "Available Schemes",
          url: "#",
        },
        {
          title: "My Grants",
          url: "#",
        },
        {
          title: "Disbursements",
          url: "#",
        },
      ],
    },
    {
      title: "Mentorship",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Find Mentors",
          url: "#",
        },
        {
          title: "My Sessions",
          url: "#",
        },
      ],
    },
    {
      title: "Book Facility",
      url: "#",
      icon: Building2,
      items: [
        {
          title: "Available Facilities",
          url: "/startup/facilities",
        },
        {
          title: "My Bookings",
          url: "/startup/my-bookings",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: BarChart3,
      items: [
        {
          title: "Progress Reports",
          url: "#",
        },
        {
          title: "Compliance",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "My Startup Profile",
      url: "#",
      icon: FileText,
    },
    {
      name: "Mentors",
      url: "#",
      icon: Users,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
