"use client";

import Link from "next/link";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import {
  Sparkles,
  Mail,
} from "lucide-react";
import { Services, } from "@/libs/config/config.clientList";
import SocialLinks from "../ui/tailwindcss/SocialLinks";

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
            <SocialLinks/>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              {
                Services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                contact@sparkverse.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 SparkVerse. All rights reserved.
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
