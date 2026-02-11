import {
  Building2,
  MapPin,
  Monitor,
  Users,
  Microscope,
  FlaskConical,
  Palette,
  Clock,
  CalendarDays,
  CircleDot,
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type BookingStatus = "upcoming" | "completed" | "cancelled"

interface Booking {
  id: string
  facility: string
  facilityLocation: string
  resource: string
  resourceIcon: React.ElementType
  date: string
  timeSlot: string
  purpose: string
  status: BookingStatus
}

const bookings: Booking[] = [
  {
    id: "BK-001",
    facility: "SPARK Innovation Hub Gangtok",
    facilityLocation: "MG Marg, Gangtok, East Sikkim",
    resource: "Meeting Room",
    resourceIcon: Users,
    date: "2026-02-14",
    timeSlot: "10:00 AM - 11:00 AM",
    purpose: "Investor pitch deck review with mentors",
    status: "upcoming",
  },
  {
    id: "BK-002",
    facility: "DIC Gangtok",
    facilityLocation: "Tadong, Gangtok, East Sikkim",
    resource: "Coworking Space",
    resourceIcon: Monitor,
    date: "2026-02-12",
    timeSlot: "09:00 AM - 05:00 PM",
    purpose: "Full-day team sprint for MVP development",
    status: "upcoming",
  },
  {
    id: "BK-003",
    facility: "SPARK Innovation Hub Gangtok",
    facilityLocation: "MG Marg, Gangtok, East Sikkim",
    resource: "Design Studio",
    resourceIcon: Palette,
    date: "2026-02-15",
    timeSlot: "02:00 PM - 04:00 PM",
    purpose: "3D printing and packaging prototype session",
    status: "upcoming",
  },
  {
    id: "BK-004",
    facility: "DIC Namchi",
    facilityLocation: "Central Town, Namchi, South Sikkim",
    resource: "Meeting Room",
    resourceIcon: Users,
    date: "2026-02-18",
    timeSlot: "11:00 AM - 12:00 PM",
    purpose: "Client demo for organic products marketplace app",
    status: "upcoming",
  },
  {
    id: "BK-005",
    facility: "DIC Mangan",
    facilityLocation: "Mangan, North Sikkim",
    resource: "Testing Facility",
    resourceIcon: FlaskConical,
    date: "2026-02-05",
    timeSlot: "10:00 AM - 01:00 PM",
    purpose: "Quality testing for herbal product samples",
    status: "completed",
  },
  {
    id: "BK-006",
    facility: "SPARK Innovation Hub Gangtok",
    facilityLocation: "MG Marg, Gangtok, East Sikkim",
    resource: "Laboratory",
    resourceIcon: Microscope,
    date: "2026-02-03",
    timeSlot: "09:00 AM - 12:00 PM",
    purpose: "Soil nutrient analysis for agri-tech research",
    status: "completed",
  },
  {
    id: "BK-007",
    facility: "DIC Gyalshing",
    facilityLocation: "Gyalshing, West Sikkim",
    resource: "Coworking Space",
    resourceIcon: Monitor,
    date: "2026-02-01",
    timeSlot: "09:00 AM - 05:00 PM",
    purpose: "Remote team collaboration day",
    status: "completed",
  },
  {
    id: "BK-008",
    facility: "DIC Gangtok",
    facilityLocation: "Tadong, Gangtok, East Sikkim",
    resource: "Design Studio",
    resourceIcon: Palette,
    date: "2026-01-28",
    timeSlot: "03:00 PM - 05:00 PM",
    purpose: "Brand identity and logo design workshop",
    status: "cancelled",
  },
]

const statusConfig: Record<
  BookingStatus,
  { label: string; className: string }
> = {
  upcoming: {
    label: "Upcoming",
    className: "bg-blue-100 text-blue-700",
  },
  completed: {
    label: "Completed",
    className: "bg-green-100 text-green-700",
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-100 text-red-700",
  },
}

export default function MyBookingsPage() {
  const upcomingBookings = bookings.filter((b) => b.status === "upcoming")
  const pastBookings = bookings.filter(
    (b) => b.status === "completed" || b.status === "cancelled"
  )

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
                  <BreadcrumbPage>My Bookings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-8 p-4 pt-0">
          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{upcomingBookings.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {bookings.filter((b) => b.status === "completed").length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{bookings.length}</p>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Bookings */}
          <section>
            <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
              <CalendarDays className="size-5 text-primary" />
              Upcoming Bookings
            </h2>
            <div className="grid gap-4">
              {upcomingBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </section>

          {/* Past Bookings */}
          <section>
            <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
              <Clock className="size-5 text-muted-foreground" />
              Past Bookings
            </h2>
            <div className="grid gap-4">
              {pastBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function BookingCard({ booking }: { booking: Booking }) {
  const status = statusConfig[booking.status]

  return (
    <Card>
      <CardContent className="flex items-start gap-4 pt-6">
        <div className="rounded-md bg-muted p-2.5">
          <booking.resourceIcon className="size-5 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-medium">{booking.resource}</p>
              <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                <Building2 className="size-3.5" />
                {booking.facility}
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3" />
                {booking.facilityLocation}
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${status.className}`}
              >
                {status.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {booking.id}
              </span>
            </div>
          </div>
          <Separator className="my-3" />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <CalendarDays className="size-3.5" />
              {new Date(booking.date).toLocaleDateString("en-IN", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="size-3.5" />
              {booking.timeSlot}
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <CircleDot className="size-3.5" />
              {booking.purpose}
            </div>
          </div>
          {booking.status === "upcoming" && (
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline">
                Reschedule
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
