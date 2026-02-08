import { useState } from "react"
import {
  Building2,
  HeartHandshake,
  Landmark,
  Lightbulb,
  FlaskConical,
  MapPin,
  Megaphone,
  ArrowLeft,
  Rocket,
  Store,
  UserRoundPen,
  GraduationCap,
  HandCoins,
  Waypoints,
  School,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const partners = [
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

const beneficiaries = [
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

function App() {
  const [open, setOpen] = useState(false)
  const [partnerOpen, setPartnerOpen] = useState(false)
  const [beneficiaryOpen, setBeneficiaryOpen] = useState(false)

  return (
    <div className="flex min-h-svh items-center justify-center">
      <Button size="lg" onClick={() => setOpen(true)}>
        Register
      </Button>

      {/* Step 1: Choose registration type */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Register As</DialogTitle>
            <DialogDescription>
              Choose how you'd like to register with Spark
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                setPartnerOpen(true)
              }}
              className="group flex flex-col items-center gap-3 rounded-xl border-2 border-muted bg-card p-6 text-center transition-all duration-200 hover:scale-[1.03] hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                <Building2 className="size-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Institutional Partners</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Organizations & institutions
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setOpen(false)
                setBeneficiaryOpen(true)
              }}
              className="group flex flex-col items-center gap-3 rounded-xl border-2 border-muted bg-card p-6 text-center transition-all duration-200 hover:scale-[1.03] hover:border-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                <HeartHandshake className="size-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Beneficiaries</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Individuals & communities
                </p>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Step 2a: Choose institutional partner type */}
      <Dialog open={partnerOpen} onOpenChange={setPartnerOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <button
                type="button"
                title="Go back"
                aria-label="Go back"
                onClick={() => {
                  setPartnerOpen(false)
                  setOpen(true)
                }}
                className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ArrowLeft className="size-4" />
              </button>
              <div>
                <DialogTitle>Select Partner Type</DialogTitle>
              </div>
            </div>
            <DialogDescription>
              Choose the institutional partner you represent
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-3 pt-1">
            {partners.map((partner) => (
              <button
                type="button"
                key={partner.name}
                onClick={() => {
                  setPartnerOpen(false)
                }}
                className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center transition-all duration-200 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                  <partner.icon className="size-5 text-primary" />
                </div>
                <p className="text-sm font-medium leading-snug">{partner.name}</p>
                <p className="text-xs text-muted-foreground">{partner.desc}</p>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Step 2b: Choose beneficiary type */}
      <Dialog open={beneficiaryOpen} onOpenChange={setBeneficiaryOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <button
                type="button"
                title="Go back"
                aria-label="Go back"
                onClick={() => {
                  setBeneficiaryOpen(false)
                  setOpen(true)
                }}
                className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ArrowLeft className="size-4" />
              </button>
              <div>
                <DialogTitle>Select Beneficiary Type</DialogTitle>
              </div>
            </div>
            <DialogDescription>
              Choose the category that best describes you
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-3 pt-1">
            {beneficiaries.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => {
                  setBeneficiaryOpen(false)
                }}
                className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center transition-all duration-200 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                  <item.icon className="size-5 text-primary" />
                </div>
                <p className="text-sm font-medium leading-snug">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App
