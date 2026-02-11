import { useState } from "react"
import {
  Building2,
  MapPin,
  Users,
  Microscope,
  FlaskConical,
  Palette,
  Wrench,
  Monitor,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Resource {
  name: string
  icon: React.ElementType
  capacity: string
  description: string
  available: boolean
}

interface Facility {
  id: string
  name: string
  location: string
  description: string
  thumbnail: string
  category: "innovation-hub" | "incubation-centre"
  resources: Resource[]
}

const facilities: Facility[] = [
  {
    id: "hub-gangtok",
    name: "SPARK Innovation Hub Gangtok",
    location: "MG Marg, Gangtok, East Sikkim",
    description:
      "The flagship innovation hub offering state-of-the-art facilities for startups and entrepreneurs in the capital city.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop",
    category: "innovation-hub",
    resources: [
      {
        name: "Coworking Space",
        icon: Monitor,
        capacity: "50 desks",
        description: "Open-plan workspace with high-speed internet, power backup, and ergonomic seating.",
        available: true,
      },
      {
        name: "Meeting Room",
        icon: Users,
        capacity: "12 seats",
        description: "Fully equipped conference room with projector, whiteboard, and video conferencing.",
        available: true,
      },
      {
        name: "Laboratory",
        icon: Microscope,
        capacity: "10 workstations",
        description: "Equipped lab for biotech, agri-tech, and food processing research and testing.",
        available: false,
      },
      {
        name: "Testing Facility",
        icon: FlaskConical,
        capacity: "5 testing bays",
        description: "Product testing and quality assurance facility with calibrated instruments.",
        available: true,
      },
      {
        name: "Design Studio",
        icon: Palette,
        capacity: "8 stations",
        description: "Creative studio with design software, 3D printers, and prototyping tools.",
        available: true,
      },
      {
        name: "Shared Workshop",
        icon: Wrench,
        capacity: "15 benches",
        description: "Fabrication workshop with power tools, CNC machines, and electronics workbenches.",
        available: true,
      },
    ],
  },
  {
    id: "dic-namchi",
    name: "DIC Namchi",
    location: "Central Town, Namchi, South Sikkim",
    description:
      "District Industries Centre supporting startups in South Sikkim with modern coworking and incubation facilities.",
    thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=200&fit=crop",
    category: "incubation-centre",
    resources: [
      {
        name: "Coworking Space",
        icon: Monitor,
        capacity: "30 desks",
        description: "Modern shared workspace with reliable connectivity and comfortable seating.",
        available: true,
      },
      {
        name: "Meeting Room",
        icon: Users,
        capacity: "8 seats",
        description: "Conference room with smart TV, video calling setup, and whiteboard.",
        available: true,
      },
      {
        name: "Design Studio",
        icon: Palette,
        capacity: "6 stations",
        description: "Creative workstations with design software and basic prototyping tools.",
        available: false,
      },
      {
        name: "Shared Workshop",
        icon: Wrench,
        capacity: "10 benches",
        description: "Basic fabrication and electronics workshop for hardware prototyping.",
        available: true,
      },
    ],
  },
  {
    id: "dic-gangtok",
    name: "DIC Gangtok",
    location: "Tadong, Gangtok, East Sikkim",
    description:
      "District Industries Centre in the state capital providing comprehensive startup support and shared infrastructure.",
    thumbnail: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&h=200&fit=crop",
    category: "incubation-centre",
    resources: [
      {
        name: "Coworking Space",
        icon: Monitor,
        capacity: "35 desks",
        description: "Spacious shared workspace with high-speed internet and printing facilities.",
        available: true,
      },
      {
        name: "Meeting Room",
        icon: Users,
        capacity: "10 seats",
        description: "Conference room with video conferencing, projector, and whiteboard.",
        available: true,
      },
      {
        name: "Testing Facility",
        icon: FlaskConical,
        capacity: "4 testing bays",
        description: "Product testing and quality assurance facility for certification support.",
        available: true,
      },
      {
        name: "Design Studio",
        icon: Palette,
        capacity: "6 stations",
        description: "Creative workstations with design software and prototyping tools.",
        available: false,
      },
    ],
  },
  {
    id: "dic-mangan",
    name: "DIC Mangan",
    location: "Mangan, North Sikkim",
    description:
      "District Incubation Centre supporting local entrepreneurs in North Sikkim with essential startup infrastructure.",
    thumbnail: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?w=400&h=200&fit=crop",
    category: "incubation-centre",
    resources: [
      {
        name: "Coworking Space",
        icon: Monitor,
        capacity: "20 desks",
        description: "Shared workspace with internet access and basic office amenities.",
        available: true,
      },
      {
        name: "Meeting Room",
        icon: Users,
        capacity: "6 seats",
        description: "Small meeting room with projector and whiteboard.",
        available: true,
      },
      {
        name: "Testing Facility",
        icon: FlaskConical,
        capacity: "3 testing bays",
        description: "Basic product testing facility for quality checks and certifications.",
        available: true,
      },
    ],
  },
  {
    id: "dic-gyalshing",
    name: "DIC Gyalshing",
    location: "Gyalshing, West Sikkim",
    description:
      "District Incubation Centre providing co-working and mentoring support for entrepreneurs in West Sikkim.",
    thumbnail: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=400&h=200&fit=crop",
    category: "incubation-centre",
    resources: [
      {
        name: "Coworking Space",
        icon: Monitor,
        capacity: "20 desks",
        description: "Open workspace with internet, printing, and scanning facilities.",
        available: true,
      },
      {
        name: "Meeting Room",
        icon: Users,
        capacity: "6 seats",
        description: "Meeting room with screen-sharing and whiteboard.",
        available: false,
      },
      {
        name: "Laboratory",
        icon: Microscope,
        capacity: "4 workstations",
        description: "Small lab for agri-tech and organic product testing.",
        available: true,
      },
    ],
  },
]

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
]

export default function AvailableFacilitiesPage() {
  const [expandedFacility, setExpandedFacility] = useState<string | null>(null)
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false)
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null)
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const innovationHubs = facilities.filter((f) => f.category === "innovation-hub")
  const incubationCentres = facilities.filter((f) => f.category === "incubation-centre")

  function handleViewSpaces(facilityId: string) {
    setExpandedFacility(expandedFacility === facilityId ? null : facilityId)
  }

  function handleBookNow(facility: Facility, resource: Resource) {
    setSelectedFacility(facility)
    setSelectedResource(resource)
    setBookingConfirmed(false)
    setBookingDialogOpen(true)
  }

  function handleConfirmBooking() {
    setBookingConfirmed(true)
  }

  function handleCloseDialog() {
    setBookingDialogOpen(false)
    setBookingConfirmed(false)
    setSelectedFacility(null)
    setSelectedResource(null)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Book Facility</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Available Facilities</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-8 p-4 pt-0">
          {/* Innovation Hubs */}
          <section>
            <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
              <Building2 className="size-5 text-primary" />
              Innovation Hubs
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {innovationHubs.map((facility) => (
                <FacilityCard
                  key={facility.id}
                  facility={facility}
                  isExpanded={expandedFacility === facility.id}
                  onViewSpaces={() => handleViewSpaces(facility.id)}
                  onBookNow={(resource) => handleBookNow(facility, resource)}
                />
              ))}
            </div>
          </section>

          {/* District Incubation Centres */}
          <section>
            <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
              <Building2 className="size-5 text-primary" />
              District Industries Centres
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {incubationCentres.map((facility) => (
                <FacilityCard
                  key={facility.id}
                  facility={facility}
                  isExpanded={expandedFacility === facility.id}
                  onViewSpaces={() => handleViewSpaces(facility.id)}
                  onBookNow={(resource) => handleBookNow(facility, resource)}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Booking Dialog */}
        <Dialog open={bookingDialogOpen} onOpenChange={handleCloseDialog}>
          <DialogContent className="sm:max-w-md">
            {bookingConfirmed ? (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-green-600" />
                    Booking Confirmed!
                  </DialogTitle>
                  <DialogDescription>
                    Your booking for <strong>{selectedResource?.name}</strong> at{" "}
                    <strong>{selectedFacility?.name}</strong> has been submitted
                    successfully. You will receive a confirmation email shortly.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button onClick={handleCloseDialog}>Done</Button>
                </DialogFooter>
              </>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle>Book a Facility</DialogTitle>
                  <DialogDescription>
                    Complete the form below to reserve your space.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                  <div className="grid gap-2">
                    <Label>Facility</Label>
                    <Input value={selectedFacility?.name ?? ""} readOnly />
                  </div>
                  <div className="grid gap-2">
                    <Label>Resource</Label>
                    <Input value={selectedResource?.name ?? ""} readOnly />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="booking-date">Date</Label>
                    <Input id="booking-date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Time Slot</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="booking-purpose">Purpose / Notes</Label>
                    <textarea
                      id="booking-purpose"
                      className="border-input bg-transparent placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm shadow-xs focus-visible:ring-[3px] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Briefly describe the purpose of your booking..."
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={handleCloseDialog}>
                    Cancel
                  </Button>
                  <Button onClick={handleConfirmBooking}>Confirm Booking</Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </SidebarInset>
    </SidebarProvider>
  )
}

function FacilityCard({
  facility,
  isExpanded,
  onViewSpaces,
  onBookNow,
}: {
  facility: Facility
  isExpanded: boolean
  onViewSpaces: () => void
  onBookNow: (resource: Resource) => void
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={facility.thumbnail}
          alt={facility.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-base">{facility.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="size-3.5" />
          {facility.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{facility.description}</p>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={onViewSpaces}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 size-4" />
              Hide Spaces
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 size-4" />
              View Spaces
            </>
          )}
        </Button>

        {isExpanded && (
          <div className="w-full grid gap-3">
            {facility.resources.map((resource) => (
              <div
                key={resource.name}
                className="flex items-start gap-3 rounded-lg border p-3"
              >
                <div className="mt-0.5 rounded-md bg-muted p-2">
                  <resource.icon className="size-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium">{resource.name}</p>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                        resource.available
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {resource.available ? "Available" : "Occupied"}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {resource.capacity}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {resource.description}
                  </p>
                  {resource.available && (
                    <Button
                      size="sm"
                      className="mt-2"
                      onClick={() => onBookNow(resource)}
                    >
                      Book Now
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
