"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  image: string;
  title: string;
  slug: string;
}

const BLOG_POSTS: BlogPostProps[] = [
  {
    image: "/blog-cover-1.png",
    title: "Hacking Mobile Games",
    slug: "https://blog.mobileappdefense.com/hacking-mobile-games/",
  },
  {
    image: "/blog-cover-2.png",
    title: "Securing Flutter Application",
    slug: "https://blog.mobileappdefense.com/securing-flutter-application/",
  },
  {
    image: "/blog-cover-2.png",
    title: "iOS/Android Malwares",
    slug: "https://blog.mobileappdefense.com/ios-android-malwares/",
  },
];

function BlogPostCard({ image, title, slug }: BlogPostProps) {
  return (
    <Link href={slug} className="block h-full">
      <div className="bg-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        <div className="relative h-48 bg-gray-300">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6 bg-gray-700">
          <h3 className="text-lg font-bold text-white line-clamp-2">{title}</h3>
          <div className="mt-4">
            <span className="px-4 py-1 bg-gray-500 text-white rounded-full text-sm">
              Read More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = BLOG_POSTS.length;

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full relative overflow-hidden bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-regular mb-16 pl-8">Our Blog</h2>

        {/* Desktop view - grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>

        {/* Mobile view - carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {BLOG_POSTS.map((post, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <BlogPostCard {...post} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {BLOG_POSTS.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full ${
                  activeIndex === index ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
