"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MapPin, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">LocalMarket</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/browse-events"
            className={`text-gray-600 hover:text-gray-900 ${isActive("/browse-events") ? "text-gray-900 font-medium" : ""}`}
          >
            Browse Events
          </Link>
          <Link
            href="/create-event"
            className={`text-gray-600 hover:text-gray-900 ${isActive("/create-event") ? "text-gray-900 font-medium" : ""}`}
          >
            Create Event
          </Link>
          <Link
            href="/vendor-dashboard"
            className={`text-gray-600 hover:text-gray-900 ${isActive("/vendor-dashboard") ? "text-gray-900 font-medium" : ""}`}
          >
            Vendor Dashboard
          </Link>
          <Link
            href="/organizer-dashboard"
            className={`text-gray-600 hover:text-gray-900 ${isActive("/organizer-dashboard") ? "text-gray-900 font-medium" : ""}`}
          >
            Organizer Dashboard
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900">
            Sign In
          </Link>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/browse-events"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse Events
            </Link>
            <Link
              href="/create-event"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Create Event
            </Link>
            <Link
              href="/vendor-dashboard"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vendor Dashboard
            </Link>
            <Link
              href="/organizer-dashboard"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Organizer Dashboard
            </Link>
            <div className="pt-4 border-t space-y-2">
              <Link
                href="/login"
                className="block text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Button asChild className="w-full">
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
