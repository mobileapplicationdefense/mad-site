"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    title: "",
    email: "",
    phone: "",
    message: "",
    requestQuote: false,
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, requestQuote: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          company: formData.company,
          title: formData.title,
          phone: formData.phone,
          message: formData.message,
          requestQuote: formData.requestQuote,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          title: "",
          email: "",
          phone: "",
          message: "",
          requestQuote: false,
        });
      } else {
        setFormError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("Failed to submit the form. Please try again later.");
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#111418]">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[50%] md:w-[400px] h-[50vh] md:h-[400px] bg-[#1c7e94]/70 blur-[80px] md:blur-[120px] rounded-full"></div>
        </div>
      </div>

      {/* Blue glow effect */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0066FF] opacity-10 blur-[200px] rounded-full"></div>

      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Close button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-5 right-5 text-white hover:text-gray-300 transition-colors md:top-12 md:right-12"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-regular text-white mb-12">
            Contact us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-white text-sm">
                First name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#0066FF] text-white px-0 py-2 outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-white text-sm">
                Last name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#0066FF] text-white px-0 py-2 outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-white text-sm">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#0066FF] text-white px-0 py-2 outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="title" className="text-white text-sm">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#0066FF] text-white px-0 py-2 outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-white text-sm">
                Business email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#0066FF] text-white px-0 py-2 outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-white text-sm">
                Phone number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#0066FF] text-white px-0 py-2 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-white text-sm">
              How we can help you?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-200 text-gray-800 rounded p-3 outline-none focus:ring-2 focus:ring-[#0066FF]"
            ></textarea>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="requestQuote"
              name="requestQuote"
              checked={formData.requestQuote}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-600 text-[#0066FF] focus:ring-[#0066FF]"
            />
            <label htmlFor="requestQuote" className="ml-2 text-white text-sm">
              Request a Quote
            </label>
          </div>

          <div>
            <div className="flex items-center justify-between gap-8">
              <button
                type="submit"
                disabled={formSubmitting}
                className={`${
                  formSubmitting
                    ? "bg-gray-500"
                    : "bg-[#0066FF] hover:bg-[#0055DD]"
                } text-white font-medium py-3 px-8 rounded-md flex items-center transition-colors`}
              >
                {formSubmitting ? "Submitting..." : "Submit"}{" "}
                {!formSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </button>

              <p className="text-gray-400 text-xs md:text-sm text-center mt-4 max-w-[500px]">
                By pressing this buttom this form, you are confirming you have
                read and agree to our{" "}
                <Link href="#" className="text-[#0066FF] hover:underline">
                  General Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#0066FF] hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

            {formError && <p className="text-red-500 mt-2">{formError}</p>}

            {formSuccess && (
              <div className="mt-4 p-4 bg-gradient-to-r from-[hsla(216,100%,73%,1)] to-[#0066FF] text-white rounded-md font-regular text-center relative overflow-hidden">
                <div className="absolute top-[-50%] left-[-50%] w-[10%] h-[200%] bg-white/5 blur-[30px] rounded-full"></div>
                <div className="absolute bottom-[-50%] right-[-50%] w-[10%] h-[200%] bg-white/10 blur-[50px] rounded-full"></div>
                <span className="relative z-10">
                  We have received your request.
                </span>
              </div>
            )}
          </div>
        </form>

        <div className="mt-8 text-gray-500 text-sm">
          &copy;2025 MAD. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
