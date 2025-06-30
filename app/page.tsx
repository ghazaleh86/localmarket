import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Shield, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImageWithFallback } from "@/components/image-with-fallback"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/hero-market.jpg"
            alt="Vibrant local market with vendors and customers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/60" />
        </div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Connect. Create. Celebrate.</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            The premier platform connecting local vendors with event organizers across Toronto & GTA. Discover
            opportunities, reduce risk, and build thriving community markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/vendor-dashboard">I'm a Vendor</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/organizer-dashboard">I'm an Organizer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose LocalMarket?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="/images/vendor-crafts.jpg"
                    alt="Artisan crafts at local market"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Risk-Free Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our Kickstarter-style funding ensures events only proceed when there's enough vendor participation. No
                  more empty markets or lost deposits.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="/images/food-market.jpg"
                    alt="Food vendors at bustling market"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Seamless Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Integrated payment processing with escrow protection. Vendors are only charged when events reach their
                  funding goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="/images/artisan-fair.jpg"
                    alt="Artisan fair with handmade goods"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>End-to-End Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  From discovery to contracts to logistics - everything you need to run successful markets in one
                  platform.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Showcase Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience the Festival Energy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From bustling weekend markets to vibrant community festivals, LocalMarket brings the energy of outdoor
              marketplaces to life across Toronto & GTA.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="/images/vibrant-festival-market.jpg"
              alt="Bustling outdoor festival market with colorful vendor stalls, crowds of people shopping, and vibrant community atmosphere"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Where Community Comes Alive</h3>
              <p className="text-white/90">
                Experience the energy, discover local treasures, and be part of the vibrant marketplace community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2,000+</div>
              <div className="text-gray-600">Registered Vendors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Event Organizers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Successful Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing community of vendors and organizers creating amazing local experiences across Toronto &
            GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href="/vendor-dashboard">Join as Vendor</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/organizer-dashboard">Join as Organizer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
