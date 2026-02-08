import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import StartupDashboardPage from "@/pages/StartupDashboardPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/startup/dashboard" element={<StartupDashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}
