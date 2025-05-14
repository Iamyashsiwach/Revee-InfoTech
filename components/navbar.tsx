"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-navy">Revee InfoTech</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="/" className="text-gray-600 hover:text-navy font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-navy font-medium">
            About
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-navy font-medium">
            Services
          </Link>
          <Link href="/case-studies" className="text-gray-600 hover:text-navy font-medium">
            Case Studies
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-navy font-medium">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center">
          <Button className="hidden sm:inline-flex bg-teal hover:bg-opacity-90 text-white text-sm px-3 md:px-4 py-1 h-9 md:h-10">
            Request a Quote
          </Button>
          
          <button 
            className="md:hidden ml-4"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-navy">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-navy font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-navy font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-600 hover:text-navy font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/case-studies" 
              className="text-gray-600 hover:text-navy font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-navy font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full bg-teal hover:bg-opacity-90 text-white text-sm py-2">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 