import React from "react"; // Import React for component definition

// Define and export the TechIcon component
export const TechIcon = ({
  component, // A React component to be rendered as the tech icon
}: {
  component: React.ElementType; // Type annotation: expects a React component
}) => {
  // Assign the passed-in component to a variable for rendering
  const Component = component;

  return (
    <>
      {/* Render the passed-in component with custom styling */}
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      {/* SVG definition for the gradient used in the icon */}
      <svg className="absolute size-0">
        {/* Define the gradient with an ID for reference */}
        <linearGradient id="tech-icon-gradient">
          {/* Gradient start color */}
          <stop offset="0%" stopColor="rgb(110 231 183)" /> {/* Emerald */}
          {/* Gradient end color */}
          <stop offset="100%" stopColor="rgb(56 189 248)" /> {/* Sky blue */}
        </linearGradient>
      </svg>
    </>
  );
};
