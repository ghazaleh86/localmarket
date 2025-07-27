"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, DollarSign, Users, Plus, Eye, MessageCircle, Settings } from "lucide-react"

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
    totalRevenue: 2400,
    applications: 24,
  },
  {
    id: 2,
    title: "Spring Artisan Fair",
    location: "High Park, Toronto",
    date: "April 20, 2024",
    fee: 120,
    type: "kickstarter",
    fundingGoal: 15,
    currentVendors: 8,
    status: "funding",
    totalRevenue: 960,
    applications: 12,
  },
  {
    id: 3,
    title: "Downtown Food Festival",
    location: "Nathan Phillips Square",
    date: "May 10, 2024",
    fee: 200,
    type: "standard",
    capacity: 25,
    currentVendors: 25,
    status: "full",
    totalRevenue: 5000,
    applications: 45,
  },
]

export default function OrganizerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusBadge = (event: any) => {
    switch (event.status) {
      case "funding":
        return <Badge className="bg-yellow-100 text-yellow-800">Funding</Badge>
      case "funded":
        return <Badge className="bg-green-100 text-green-800">Funded</Badge>
      case "full":
        return <Badge className="bg-blue-100 text-blue-800">Full</Badge>
      default:
        return <Badge variant="secondary">Draft</Badge>
    }
  }

  const getFundingProgress = (event: any) => {
    if (event.type === "kickstarter") {
      return (event.currentVendors / event.fundingGoal) * 100
    }
    return (event.currentVendors / event.capacity) * 100
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LocalMarket</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">
              <MessageCircle className="w-4 h-4 mr-2" />
              Messages
            </Button>
            <Button variant="ghost">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sam!</h1>
            <p className="text-gray-600">Manage your events and track their success</p>
          </div>
          <Button size="lg">
            <Plus className="w-4 h-4 mr-2" />
            Create New Event
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Events</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Vendors</p>
                  <p className="text-2xl font-bold text-gray-900">49</p>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">$8,360</p>
                </div>
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Applications</p>
                  <p className="text-2xl font-bold text-gray-900">81</p>
                </div>
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="events">My Events</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Queen Street Pop-Up Market reached 80% funding!</p>
                      <p className="text-sm text-gray-600">4 more vendors needed to reach the goal</p>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">New application for Spring Artisan Fair</p>
                      <p className="text-sm text-gray-600">Sarah's Handmade Jewelry applied</p>
                    </div>
                    <span className="text-sm text-gray-500">5 hours ago</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Downtown Food Festival is now full!</p>
                      <p className="text-sm text-gray-600">All 25 vendor spots have been filled</p>
                    </div>
                    <span className="text-sm text-gray-500">1 day ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            {mockEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
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
                          <DollarSign className="w-4 h-4" />${event.fee} per vendor
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message Vendors
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">
                          {event.type === "kickstarter" ? "Funding Progress" : "Capacity"}
                        </span>
                        <span className="font-medium">
                          {event.currentVendors} / {event.type === "kickstarter" ? event.fundingGoal : event.capacity}{" "}
                          vendors
                        </span>
                      </div>
                      <Progress value={getFundingProgress(event)} className="mb-4" />

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Applications</p>
                          <p className="font-semibold">{event.applications}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Revenue</p>
                          <p className="font-semibold">${event.totalRevenue.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-transparent" variant="outline">
                        Manage Applications
                      </Button>
                      <Button className="w-full bg-transparent" variant="outline">
                        Edit Event Details
                      </Button>
                      <Button className="w-full bg-transparent" variant="outline">
                        Download Contracts
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Event Performance</CardTitle>
                  <CardDescription>Success rate and metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Events Successfully Funded</span>
                      <span className="font-semibold">85%</span>
                    </div>
                    <Progress value={85} />

                    <div className="flex justify-between items-center">
                      <span>Average Vendor Satisfaction</span>
                      <span className="font-semibold">4.7/5</span>
                    </div>
                    <Progress value={94} />

                    <div className="flex justify-between items-center">
                      <span>Repeat Vendor Rate</span>
                      <span className="font-semibold">72%</span>
                    </div>
                    <Progress value={72} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                  <CardDescription>Monthly revenue trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>January 2024</span>
                      <span className="font-semibold">$2,400</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>February 2024</span>
                      <span className="font-semibold">$3,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>March 2024</span>
                      <span className="font-semibold">$2,760</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center font-semibold">
                        <span>Total Revenue</span>
                        <span>$8,360</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
