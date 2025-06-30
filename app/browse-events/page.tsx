"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, DollarSign, Search, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImageWithFallback } from "@/components/image-with-fallback"

const mockEvents = [
  {
    id: 1,
    title: "Queen Street Pop-Up Market",
    location: "Queen Street West, Toronto",
    date: "March 15, 2024",
    fee: 150,
    type: "kickstarter",
    fundingGoal: 20,
    currentVendors: 16,
    status: "funding",
    description: "A vibrant weekend market featuring local artisans and food vendors in the heart of Queen West.",
    organizer: "Toronto Markets Co.",
    deadline: "March 1, 2024",
  },
  {
    id: 2,
    title: "Harbourfront Artisan Fair",
    location: "Harbourfront Centre, Toronto",
    date: "March 22, 2024",
    fee: 200,
    type: "standard",
    capacity: 30,
    currentVendors: 12,
    status: "open",
    description: "Premium artisan fair with high foot traffic and established customer base.",
    organizer: "Harbourfront Events",
    deadline: "March 8, 2024",
  },
  {
    id: 3,
    title: "Kensington Market Festival",
    location: "Kensington Market, Toronto",
    date: "April 5, 2024",
    fee: 100,
    type: "kickstarter",
    fundingGoal: 25,
    currentVendors: 25,
    status: "funded",
    description: "Annual spring festival celebrating local culture and community.",
    organizer: "Kensington Community",
    deadline: "March 20, 2024",
  },
]

export default function BrowseEvents() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const getStatusBadge = (event: any) => {
    if (event.type === "kickstarter") {
      if (event.status === "funded") {
        return <Badge className="bg-green-100 text-green-800">Funded</Badge>
      } else if (event.status === "funding") {
        return <Badge className="bg-yellow-100 text-yellow-800">Funding</Badge>
      }
    } else {
      if (event.status === "open") {
        return <Badge className="bg-blue-100 text-blue-800">Open</Badge>
      }
    }
    return <Badge variant="secondary">Closed</Badge>
  }

  const getFundingProgress = (event: any) => {
    if (event.type === "kickstarter") {
      const percentage = (event.currentVendors / event.fundingGoal) * 100
      return Math.min(percentage, 100)
    }
    return (event.currentVendors / event.capacity) * 100
  }

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || event.type === filterType
    const matchesStatus = filterStatus === "all" || event.status === filterStatus

    return matchesSearch && matchesType && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Events</h1>
          <p className="text-gray-600">Discover upcoming markets and events in Toronto & GTA</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search events by name, location, or organizer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="kickstarter">Kickstarter-Style</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="funding">Funding</SelectItem>
                <SelectItem value="funded">Funded</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredEvents.length} of {mockEvents.length} events
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <ImageWithFallback
                    src={
                      event.id === 1
                        ? "/images/queen-street-market.jpg"
                        : event.id === 2
                          ? "/images/harbourfront-fair.jpg"
                          : "/images/kensington-festival.jpg"
                    }
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          {getStatusBadge(event)}
                          {event.type === "kickstarter" && (
                            <Badge variant="outline" className="text-purple-600 border-purple-200">
                              Kickstarter-Style
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />${event.fee}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" asChild>
                          <Link href={`/event/${event.id}`}>View Details</Link>
                        </Button>
                        <Button asChild>
                          <Link href={`/event/${event.id}`}>Apply Now</Link>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{event.description}</CardDescription>

                    {/* Funding Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">
                          {event.type === "kickstarter" ? "Funding Progress" : "Capacity"}
                        </span>
                        <span className="font-medium">
                          {event.currentVendors} / {event.type === "kickstarter" ? event.fundingGoal : event.capacity}{" "}
                          vendors
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${event.status === "funded" ? "bg-green-500" : "bg-blue-500"}`}
                          style={{ width: `${getFundingProgress(event)}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Organized by {event.organizer}</span>
                      <span>Apply by {event.deadline}</span>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Users className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or check back later for new events.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
