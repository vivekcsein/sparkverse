"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/shadcn/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          countRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-Image text-white"
    >
      <div className="flex flex-col lg:items-baseline justify-baseline px-5">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6"
        >
          Turning
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {" "}
            Ideas & Creativity
          </span>
          <br />
          into Real-World Solutions
        </h1>
        <p
          ref={subtitleRef}
          className="w-full lg:ml-20  mt-6 text-lg sm:text-xl text-muted max-w-2xl text-left lg:text-center"
        >
          We transform innovative concepts into powerful digital experiences.
          From social media solutions to cutting-edge AR games, we bring your
          vision to life with expert development and creative excellence.
        </p>
        <div
          ref={buttonsRef}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="w-full flex gap-8 mt-8" ref={countRef}>
          <div>
            <div className="text-3xl font-bold">100+</div>
            <div className="text-sm text-muted">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm text-muted">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold ">24/7</div>
            <div className="text-sm text-muted">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
