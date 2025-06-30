"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Calendar, Users, Clock, MessageCircle, CheckCircle, AlertTriangle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const mockEvent = {
  id: 1,
  title: "Queen Street Pop-Up Market",
  location: "Queen Street West, Toronto",
  fullAddress: "123 Queen Street West, Toronto, ON M5H 2M9",
  date: "March 15, 2024",
  time: "10:00 AM - 6:00 PM",
  fee: 150,
  type: "kickstarter",
  fundingGoal: 20,
  currentVendors: 16,
  status: "funding",
  description:
    "Join us for a vibrant weekend market featuring local artisans, food vendors, and craftspeople in the heart of Queen West. This community-focused event celebrates Toronto's creative spirit and provides a platform for local businesses to connect with customers.",
  organizer: {
    name: "Sam Chen",
    company: "Toronto Markets Co.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.8,
    eventsOrganized: 12,
  },
  deadline: "March 1, 2024",
  categories: ["Food & Beverage", "Artisan Crafts", "Clothing & Accessories"],
  included: [
    "6ft table and 2 chairs",
    "10x10 tent space",
    "Marketing promotion",
    "Event insurance coverage",
    "Setup and breakdown assistance",
  ],
  requirements: [
    "Valid business license or permit",
    "General liability insurance",
    "Food handling permit (for food vendors)",
    "Professional product presentation",
  ],
  committedVendors: [
    { name: "Maria's Ceramics", category: "Artisan Crafts", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Fresh Bites Food Co.", category: "Food & Beverage", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Handmade Jewelry Co.", category: "Accessories", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Urban Garden Herbs", category: "Food & Beverage", avatar: "/placeholder.svg?height=32&width=32" },
  ],
}

export default function EventDetails() {
  const [isApplying, setIsApplying] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const fundingProgress = (mockEvent.currentVendors / mockEvent.fundingGoal) * 100
  const daysLeft = 8 // Mock calculation

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navigation />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{mockEvent.title}</CardTitle>
                      <Badge className="bg-yellow-100 text-yellow-800">Funding</Badge>
                      <Badge variant="outline" className="text-purple-600 border-purple-200">
                        Kickstarter-Style
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {mockEvent.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {mockEvent.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {mockEvent.time}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{mockEvent.description}</p>
              </CardContent>
            </Card>

            {/* Funding Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Funding Progress
                </CardTitle>
                <CardDescription>This event will only proceed if we reach the minimum vendor goal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      {mockEvent.currentVendors} vendors committed
                    </span>
                    <span className="text-gray-600">
                      {mockEvent.fundingGoal - mockEvent.currentVendors} more needed
                    </span>
                  </div>
                  <Progress value={fundingProgress} className="h-3" />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{Math.round(fundingProgress)}% funded</span>
                    <span>{daysLeft} days left</span>
                  </div>

                  {fundingProgress >= 80 && (
                    <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-800 font-medium">
                        Almost there! Just {mockEvent.fundingGoal - mockEvent.currentVendors} more vendors needed.
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Committed Vendors */}
            <Card>
              <CardHeader>
                <CardTitle>Committed Vendors</CardTitle>
                <CardDescription>Meet the vendors who have already committed to this event</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockEvent.committedVendors.map((vendor, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={vendor.avatar || "/placeholder.svg"} alt={vendor.name} />
                        <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{vendor.name}</p>
                        <p className="text-sm text-gray-600">{vendor.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    + {mockEvent.currentVendors - mockEvent.committedVendors.length} more vendors committed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Event Details Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="organizer">Organizer</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockEvent.included.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Vendor Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {mockEvent.categories.map((category, index) => (
                        <Badge key={index} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Location Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Address:</strong> {mockEvent.fullAddress}
                      </p>
                      <p>
                        <strong>Setup Time:</strong> 8:00 AM - 9:30 AM
                      </p>
                      <p>
                        <strong>Event Hours:</strong> {mockEvent.time}
                      </p>
                      <p>
                        <strong>Breakdown:</strong> 6:00 PM - 7:30 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Vendor Requirements</CardTitle>
                    <CardDescription>Please ensure you meet all requirements before applying</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {mockEvent.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="organizer" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Organizer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={mockEvent.organizer.avatar || "/placeholder.svg"}
                          alt={mockEvent.organizer.name}
                        />
                        <AvatarFallback>{mockEvent.organizer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{mockEvent.organizer.name}</h3>
                        <p className="text-gray-600">{mockEvent.organizer.company}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span>⭐ {mockEvent.organizer.rating} rating</span>
                          <span>{mockEvent.organizer.eventsOrganized} events organized</span>
                        </div>
                        <Button variant="outline" className="mt-3 bg-transparent">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Contact Organizer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Card */}
            <Card className="sticky top-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Apply Now</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">${mockEvent.fee}</div>
                    <div className="text-sm text-gray-600">per vendor</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Application Deadline:</span>
                    <span className="font-medium">{mockEvent.deadline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Payment:</span>
                    <span className="font-medium">Only if event is funded</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <strong>Kickstarter-Style Event:</strong> Your card will only be charged if this event reaches
                        its minimum vendor goal by {mockEvent.deadline}.
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => {
                      setIsApplying(true)
                      // Simulate application process
                      setTimeout(() => {
                        setIsApplying(false)
                        alert("Application submitted successfully!")
                      }, 2000)
                    }}
                    disabled={isApplying}
                  >
                    {isApplying ? "Processing..." : "Apply to This Event"}
                  </Button>

                  <p className="text-xs text-gray-600 text-center mt-2">Free to apply • Secure payment processing</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Event Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Applications</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Views</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saves</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-medium text-green-600">92%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
