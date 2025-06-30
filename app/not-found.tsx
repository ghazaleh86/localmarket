import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button asChild>
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
