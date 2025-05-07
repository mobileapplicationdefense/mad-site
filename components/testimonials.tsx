import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="h-screen w-full flex items-center justify-center snap-start bg-gray-50">
      <div className="container px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-500 max-w-[800px] mx-auto">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "This product has completely transformed how our team works. We've seen a 40% increase in productivity since implementing it.",
    name: "Sarah Johnson",
    title: "Product Manager at TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The ease of use and powerful features make this a must-have for any serious business. Customer support is also exceptional.",
    name: "Michael Chen",
    title: "CTO at StartupX",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "We've tried many solutions, but nothing compares to this. It's intuitive, powerful, and has saved us countless hours.",
    name: "Emily Rodriguez",
    title: "Operations Director at GrowthCo",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]
