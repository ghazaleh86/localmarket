import Link from "next/link"
import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">LocalMarket</span>
            </div>
            <p className="text-gray-400">Connecting local vendors with event organizers across Toronto & GTA.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Vendors</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/browse-events" className="hover:text-white">
                  Browse Events
                </Link>
              </li>
              <li>
                <Link href="/vendor-dashboard" className="hover:text-white">
                  Vendor Dashboard
                </Link>
              </li>
              <li>
                <Link href="/vendor-guide" className="hover:text-white">
                  Vendor Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Organizers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/create-event" className="hover:text-white">
                  Create Event
                </Link>
              </li>
              <li>
                <Link href="/organizer-dashboard" className="hover:text-white">
                  Organizer Dashboard
                </Link>
              </li>
              <li>
                <Link href="/organizer-guide" className="hover:text-white">
                  Organizer Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/help" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LocalMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
