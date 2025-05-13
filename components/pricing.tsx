import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-[800px] mx-auto">
            Choose the plan that's right for you and start improving your
            workflow today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${
                plan.featured
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams",
    price: 29,
    features: [
      "Up to 5 users",
      "Basic analytics",
      "24/7 support",
      "1GB storage",
    ],
    buttonText: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: 79,
    features: [
      "Up to 20 users",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations",
    ],
    buttonText: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: 199,
    features: [
      "Unlimited users",
      "Enterprise analytics",
      "Dedicated support",
      "Unlimited storage",
      "Custom integrations",
      "Advanced security",
    ],
    buttonText: "Contact Sales",
    featured: false,
  },
];
