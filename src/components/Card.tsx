import React from "react"; // Import React for component definition
import grainImage from "@/assets/images/grain.jpg"; // Import background grain image
import { twMerge } from "tailwind-merge"; // Utility for merging Tailwind CSS class names

// Define and export the reusable Card component
export const Card = ({
  className, // Optional additional classes for customization
  children, // Child elements to render inside the card
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    // Card container with base styles and optional additional classes
    <div
      className={twMerge(
        // Base styling: rounded corners, overflow-hidden, background, and outlines
        "relative z-0 overflow-hidden rounded-3xl bg-gray-800 p-6 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-['']",
        className, // Merge additional classes passed via the className prop
      )}
    >
      {/* Background image styling */}
      <div
        className="absolute inset-0 -z-10 opacity-5" // Positioned behind content with reduced opacity
        style={{ backgroundImage: `url(${grainImage.src})` }} // Inline style for background image
      ></div>
      {/* Render child elements passed to the Card */}
      {children}
    </div>
  );
};
