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
  iconColor: string
  iconBg: string
  iconHoverBg: string
}

export const partners: Stakeholder[] = [
  {
    icon: Landmark,
    name: "Commerce & Industries Department (C&ID)",
    desc: "Government of Sikkim — Client and overall policy owner",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    iconHoverBg: "group-hover:bg-blue-200",
  },
  {
    icon: Lightbulb,
    name: "Innovation Hub",
    desc: "Nodal implementing agency",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    iconHoverBg: "group-hover:bg-amber-200",
  },
  {
    icon: FlaskConical,
    name: "Lead Incubation Partner (LIP)",
    desc: "Provides technical and functional support",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    iconHoverBg: "group-hover:bg-violet-200",
  },
  {
    icon: MapPin,
    name: "District Incubation Centres",
    desc: "Facilitate local-level operations",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    iconHoverBg: "group-hover:bg-emerald-200",
  },
  {
    icon: Megaphone,
    name: "District Industries Centres (DICs)",
    desc: "Provide awareness and facilitation support",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
    iconHoverBg: "group-hover:bg-orange-200",
  },
]

export const beneficiaries: Stakeholder[] = [
  {
    icon: Rocket,
    name: "Startups",
    desc: "Recognized startups eligible for benefits",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
    iconHoverBg: "group-hover:bg-orange-200",
  },
  {
    icon: Store,
    name: "Enterprises",
    desc: "Existing enterprises (Nano, Micro, Small)",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    iconHoverBg: "group-hover:bg-blue-200",
  },
  {
    icon: UserRoundPen,
    name: "Aspirant Entrepreneurs / Startup Aspirants",
    desc: "Individuals with business ideas",
    iconColor: "text-teal-600",
    iconBg: "bg-teal-100",
    iconHoverBg: "group-hover:bg-teal-200",
  },
  {
    icon: GraduationCap,
    name: "Mentors",
    desc: "Provide guidance and support",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    iconHoverBg: "group-hover:bg-purple-200",
  },
  {
    icon: HandCoins,
    name: "Investors",
    desc: "Fund and support startups/enterprises",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    iconHoverBg: "group-hover:bg-emerald-200",
  },
  {
    icon: Waypoints,
    name: "Incubators and Accelerators",
    desc: "Partner institutions",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
    iconHoverBg: "group-hover:bg-rose-200",
  },
  {
    icon: School,
    name: "Academia / Academic Institutions",
    desc: "Educational partners",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    iconHoverBg: "group-hover:bg-indigo-200",
  },
  {
    icon: Briefcase,
    name: "Corporate Partners",
    desc: "Industry collaborators",
    iconColor: "text-slate-600",
    iconBg: "bg-slate-100",
    iconHoverBg: "group-hover:bg-slate-200",
  },
]
