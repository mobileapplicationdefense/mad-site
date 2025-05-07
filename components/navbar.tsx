import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <div className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
            Products
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
          <div className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
            Resources
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
        </div>

        <Button className="bg-[#0066FF] hover:bg-[#0055DD] text-white">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </nav>
  );
}
