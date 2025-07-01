"use client";

import Link from "next/link";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                SparkVerse
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming ideas and creativity into real-world solutions. We
              specialize in cutting-edge digital experiences that drive results
              and exceed expectations.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="bg-gradient-to-r from-primary to-purple-600">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map(
                (Icon, index) => (
                  <Button
                    key={index}
                    size="icon"
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  AR/VR Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                hello@sparkverse.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-primary mt-1" />
                <span>
                  123 Innovation Street
                  <br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SparkVerse. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
