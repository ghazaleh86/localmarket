"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MapPin, DollarSign, Users, Info, ArrowLeft, ArrowRight } from "lucide-react"

export default function CreateEvent() {
  const [currentStep, setCurrentStep] = useState(1)
  const [eventType, setEventType] = useState("")
  const [isKickstarter, setIsKickstarter] = useState(false)

  const steps = [
    { number: 1, title: "Basic Information", description: "Event details and location" },
    { number: 2, title: "Vendor Requirements", description: "Pricing and capacity" },
    { number: 3, title: "Funding Model", description: "Choose your approach" },
    { number: 4, title: "Review & Publish", description: "Final review" },
  ]

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
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
          <Button variant="ghost">Save Draft</Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number
                      ? "bg-green-600 border-green-600 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {step.number}
                </div>
                <div className="ml-3 hidden md:block">
                  <p
                    className={`text-sm font-medium ${currentStep >= step.number ? "text-green-600" : "text-gray-400"}`}
                  >
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${currentStep > step.number ? "bg-green-600" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Basic Event Information"}
              {currentStep === 2 && "Vendor Requirements"}
              {currentStep === 3 && "Choose Your Funding Model"}
              {currentStep === 4 && "Review & Publish"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about your event and where it will take place"}
              {currentStep === 2 && "Set pricing and capacity for vendors"}
              {currentStep === 3 && "Decide how you want to manage event funding"}
              {currentStep === 4 && "Review all details before publishing your event"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventName">Event Name *</Label>
                    <Input id="eventName" placeholder="e.g., Queen Street Pop-Up Market" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="market">Farmers Market</SelectItem>
                        <SelectItem value="artisan">Artisan Fair</SelectItem>
                        <SelectItem value="food">Food Festival</SelectItem>
                        <SelectItem value="craft">Craft Fair</SelectItem>
                        <SelectItem value="mixed">Mixed Market</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Event Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your event, what vendors you're looking for, and what makes it special..."
                    rows={4}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input id="location" placeholder="e.g., Queen Street West, Toronto" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Full Address</Label>
                    <Input id="address" placeholder="Street address for vendor logistics" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Input id="eventDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="applicationDeadline">Application Deadline *</Label>
                    <Input id="applicationDeadline" type="date" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Vendor Requirements */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="vendorFee">Vendor Fee (CAD) *</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input id="vendorFee" placeholder="150" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxVendors">Maximum Vendors *</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input id="maxVendors" placeholder="25" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Vendor Categories</Label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Food & Beverage",
                      "Artisan Crafts",
                      "Clothing & Accessories",
                      "Home & Garden",
                      "Health & Beauty",
                      "Other",
                    ].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <input type="checkbox" id={category} className="rounded" />
                        <Label htmlFor={category} className="text-sm">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Vendor Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="List any specific requirements for vendors (insurance, permits, etc.)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="included">What's Included</Label>
                  <Textarea
                    id="included"
                    placeholder="What does the vendor fee include? (table, tent, marketing, etc.)"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Funding Model */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-blue-900">Choose Your Funding Approach</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        Select how you want to manage vendor payments and event risk.
                      </p>
                    </div>
                  </div>
                </div>

                <RadioGroup defaultValue="standard" className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="font-medium">
                        Standard Model
                      </Label>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 ml-6">
                      Vendors pay when their application is accepted. You manage the event regardless of vendor count.
                    </p>
                    <div className="ml-6 mt-2 text-sm text-green-600">
                      ✓ Immediate payment upon acceptance
                      <br />✓ Full control over event execution
                      <br />✓ Traditional market model
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="kickstarter" id="kickstarter" />
                      <Label htmlFor="kickstarter" className="font-medium">
                        Kickstarter-Style Model
                      </Label>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Recommended</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 ml-6">
                      Event only proceeds if minimum vendor count is reached. Reduces your risk and ensures vendor
                      participation.
                    </p>
                    <div className="ml-6 mt-2 text-sm text-green-600">
                      ✓ Risk-free event planning
                      <br />✓ Guaranteed vendor participation
                      <br />✓ Automatic refunds if not funded
                    </div>
                  </div>
                </RadioGroup>

                {/* Kickstarter Options */}
                <div className="border rounded-lg p-4 bg-purple-50">
                  <div className="flex items-center justify-between mb-4">
                    <Label htmlFor="kickstarter-toggle" className="font-medium">
                      Enable Kickstarter-Style Funding
                    </Label>
                    <Switch id="kickstarter-toggle" checked={isKickstarter} onCheckedChange={setIsKickstarter} />
                  </div>

                  {isKickstarter && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="minVendors">Minimum Vendors Required *</Label>
                        <Input id="minVendors" placeholder="15" type="number" />
                        <p className="text-xs text-gray-600">Event will only proceed if this many vendors commit</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="fundingDeadline">Funding Deadline *</Label>
                        <Input id="fundingDeadline" type="date" />
                        <p className="text-xs text-gray-600">
                          If minimum isn't reached by this date, all vendors are refunded
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-2">Ready to Publish!</h3>
                  <p className="text-sm text-green-700">
                    Review all the details below. Once published, vendors can start applying to your event.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Event Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div>
                        <strong>Name:</strong> Queen Street Pop-Up Market
                      </div>
                      <div>
                        <strong>Type:</strong> Mixed Market
                      </div>
                      <div>
                        <strong>Date:</strong> March 15, 2024
                      </div>
                      <div>
                        <strong>Location:</strong> Queen Street West, Toronto
                      </div>
                      <div>
                        <strong>Application Deadline:</strong> March 1, 2024
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Vendor Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div>
                        <strong>Fee:</strong> $150 CAD
                      </div>
                      <div>
                        <strong>Max Vendors:</strong> 25
                      </div>
                      <div>
                        <strong>Model:</strong> {isKickstarter ? "Kickstarter-Style" : "Standard"}
                      </div>
                      {isKickstarter && (
                        <>
                          <div>
                            <strong>Min Required:</strong> 15 vendors
                          </div>
                          <div>
                            <strong>Funding Deadline:</strong> February 28, 2024
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div className="flex items-center space-x-2 p-4 bg-yellow-50 rounded-lg">
                  <input type="checkbox" id="terms" className="rounded" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and
                    <a href="#" className="text-blue-600 hover:underline ml-1">
                      Organizer Agreement
                    </a>
                  </Label>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep < 4 ? (
            <Button onClick={nextStep}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Publish Event
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
