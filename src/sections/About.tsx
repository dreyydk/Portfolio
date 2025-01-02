// --- Core Libraries and Frameworks ---
import React from "react"; // React library for component creation
import Image from "next/image"; // Next.js component for optimized image rendering

// --- Custom Components ---
import { SectionHeader } from "@/components/SectionHeader"; // Reusable section header component
import { Card } from "@/components/Card"; // Reusable card component for structured content
import { CardHeader } from "@/components/CardHeader"; // Header component for cards
import { ToolboxItems } from "@/components/ToolboxItems"; // Component for displaying toolbox items

// --- Assets: Icons and Images ---
import bookImage from "@/assets/images/book-cover.png"; // Image of a book cover
import JavaScriptIcon from "@/assets/icons/square-js.svg"; // JavaScript icon
import HTMLIcon from "@/assets/icons/html5.svg"; // HTML5 icon
import CssIcon from "@/assets/icons/css3.svg"; // CSS3 icon
import ReactIcon from "@/assets/icons/react.svg"; // React icon
import NextIcon from "@/assets/icons/nextjs.svg"; // Next.js icon
import NodeIcon from "@/assets/icons/nodejs.svg"; // Node.js icon
import mapImage from "@/assets/images/map.png"; // Image of a map
import mapPin from "@/assets/images/map-pin.png"; // Icon for a map pin

// --- Constants ---
import { hobbies } from "@/constants"; // Array of hobby data

// Toolbox items for the tech stack section
const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "NextJS",
    iconType: NextIcon,
  },
  {
    title: "NodeJS",
    iconType: NodeIcon,
  },
];

// Define and export the AboutSection component
export const AboutSection = () => {
  return (
    // Wrapper div for section with padding
    <div className="py-20">
      <div className="container">
        {/* Section header using reusable component */}
        <SectionHeader
          eyebrow="Sobre Mim"
          title="Um Vislumbre do Meu Mundo"
          description="Saiba mais sobre quem eu sou, o que eu faço, e o que me inspira."
        />
        {/* Content section with two rows of cards */}
        <div className="mt-20 flex flex-col gap-8">
          {/* First row of cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* Card for book section */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Leituras"
                description="Livros que moldam minha perspectiva."
              />
              <div className="mx-auto mt-2 w-40 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            {/* Card for tech stack section */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Tech Stack"
                description="Conheça as tecnologias que uso para construir projetos digitais de excelência."
              />
              {/* Toolbox items rendered twice for illustration */}
              <ToolboxItems items={toolboxItems} />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          {/* Second row of cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* Card for hobbies section */}
            <Card className="flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Além de Código"
                description="Veja alguns dos meus hobbies e interesses fora do mundo digital."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title} // Unique key for each hobby
                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                    style={{
                      left: hobby.left, // Positioning based on hobby data
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            {/* Card for map section */}
            <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top md:object-center"
              />
              {/* Map pin styled as a floating element */}
              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                <Image src={mapPin} alt="Map pin" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
