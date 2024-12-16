// Import necessary modules and assets
import Image from "next/image"; // Next.js optimized Image component
import { HeroOrbit } from "@/components/HeroOrbit"; // Custom HeroOrbit component for orbit animations
import codingImage from "@/assets/images/coding-icon.png"; // Icon image for the hero section
import grainImage from "@/assets/images/grain.jpg"; // Background grain texture
import ArrowDown from "@/assets/icons/arrow-down.svg"; // Down arrow icon for buttons
import StarIcon from "@/assets/icons/star.svg"; // Star icon for orbits
import SparkleIcon from "@/assets/icons/sparkle.svg"; // Sparkle icon for orbits

// Define the HeroSection component
export const HeroSection = () => {
  return (
    // Wrapper div for the hero section with relative positioning and responsive padding
    <div className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60">
      {/* Background setup with a gradient mask effect */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Subtle grain texture for the background */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {/* Hero "ring" animations using CSS for visual elements */}
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        {/* Add HeroOrbit components for animated orbiting elements */}
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />{" "}
          {/* Large star icon */}
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />{" "}
          {/* Medium star icon */}
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />{" "}
          {/* Small star icon */}
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />{" "}
          {/* Sparkle effect */}
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300/20" />{" "}
          {/* Small dot */}
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      {/* Main content container */}
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Coding icon */}
          <Image
            src={codingImage}
            alt="Ícone de código"
            className="size-[100px]"
          />
          {/* Availability badge */}
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="size-2.5 rounded-full bg-green-500"></div>
            <div className="text-sm font-medium">Disponível para projetos</div>
          </div>
        </div>
        {/* Section title and description */}
        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
            Construindo Soluções Expecionais {/* Section heading */}
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Sou especialista em transformar suas ideias em projetos de software
            de alto padrão.
          </p>
        </div>
        {/* Buttons for interaction */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          {/* Explore button */}
          <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
            <span className="font-semibold">Explore meu trabalho</span>
            <ArrowDown className="size-4" /> {/* Down arrow icon */}
          </button>
          {/* Contact button */}
          <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900">
            <span>👋</span>
            <span className="font-semibold">Entre em contato</span>
          </button>
        </div>
      </div>
    </div>
  );
};
