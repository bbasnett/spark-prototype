import {
  Landmark,
  Lightbulb,
  FlaskConical,
  MapPin,
  Megaphone,
  Rocket,
  Store,
  UserRoundPen,
  GraduationCap,
  HandCoins,
  Waypoints,
  School,
  Briefcase,
  type LucideIcon,
} from "lucide-react"

export type Stakeholder = {
  icon: LucideIcon
  name: string
  desc: string
}

export const partners: Stakeholder[] = [
  {
    icon: Landmark,
    name: "Commerce & Industries Department (C&ID)",
    desc: "Government of Sikkim — Client and overall policy owner",
  },
  {
    icon: Lightbulb,
    name: "Innovation Hub",
    desc: "Nodal implementing agency",
  },
  {
    icon: FlaskConical,
    name: "Lead Incubation Partner (LIP)",
    desc: "Provides technical and functional support",
  },
  {
    icon: MapPin,
    name: "District Incubation Centres",
    desc: "Facilitate local-level operations",
  },
  {
    icon: Megaphone,
    name: "District Industries Centres (DICs)",
    desc: "Provide awareness and facilitation support",
  },
]

export const beneficiaries: Stakeholder[] = [
  {
    icon: Rocket,
    name: "Startups",
    desc: "Recognized startups eligible for benefits",
  },
  {
    icon: Store,
    name: "Enterprises",
    desc: "Existing enterprises (Nano, Micro, Small)",
  },
  {
    icon: UserRoundPen,
    name: "Aspirant Entrepreneurs / Startup Aspirants",
    desc: "Individuals with business ideas",
  },
  {
    icon: GraduationCap,
    name: "Mentors",
    desc: "Provide guidance and support",
  },
  {
    icon: HandCoins,
    name: "Investors",
    desc: "Fund and support startups/enterprises",
  },
  {
    icon: Waypoints,
    name: "Incubators and Accelerators",
    desc: "Partner institutions",
  },
  {
    icon: School,
    name: "Academia / Academic Institutions",
    desc: "Educational partners",
  },
  {
    icon: Briefcase,
    name: "Corporate Partners",
    desc: "Industry collaborators",
  },
]
