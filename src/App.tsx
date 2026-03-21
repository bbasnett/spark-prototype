import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "@/pages/LandingPage"
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import StartupDashboardPage from "@/pages/StartupDashboardPage"
import AvailableFacilitiesPage from "@/pages/AvailableFacilitiesPage"
import MyBookingsPage from "@/pages/MyBookingsPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/startup/dashboard" element={<StartupDashboardPage />} />
        <Route path="/startup/facilities" element={<AvailableFacilitiesPage />} />
        <Route path="/startup/my-bookings" element={<MyBookingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
