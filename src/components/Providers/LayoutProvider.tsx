"use client";
// import { useIsMobile } from "@/libs/hooks/use-mobile";
import React, { useRef } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  // const isMobile = useIsMobile();
  const mainRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll animations for sections
      gsap.utils.toArray(".animate-section").forEach((section) => {
        gsap.fromTo(
          section as Element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              // trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background">
      {/* <Header isMobile={isMobile} /> */}
      <Header />
      {children}
      <Footer />
      {/* <Footer isMobile={isMobile} /> */}
    </div>
  );
};

export default LayoutProvider;
