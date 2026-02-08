import { useState } from "react"
import { Link } from "react-router-dom"
import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { partners, beneficiaries } from "@/lib/stakeholders"

export default function LoginPage() {
  const [category, setCategory] = useState<"partner" | "beneficiary">(
    "partner"
  )
  const [role, setRole] = useState("")

  const roles = category === "partner" ? partners : beneficiaries

  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/40 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Sign in to access your SPARK dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="flex flex-col gap-5"
          >
            {/* Category tabs */}
            <div className="flex flex-col gap-2">
              <Label>I am an</Label>
              <Tabs
                value={category}
                onValueChange={(v) => {
                  setCategory(v as "partner" | "beneficiary")
                  setRole("")
                }}
              >
                <TabsList className="w-full">
                  <TabsTrigger value="partner" className="flex-1">
                    Institutional Partner
                  </TabsTrigger>
                  <TabsTrigger value="beneficiary" className="flex-1">
                    Beneficiary
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Role select */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role" className="w-full">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((r) => (
                    <SelectItem key={r.name} value={r.name}>
                      {r.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Username */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full">
              <LogIn className="size-4" />
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/" className="text-primary underline underline-offset-4">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
