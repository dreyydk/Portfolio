// Import React library to create the functional component
import React from "react";

// Export a functional React component named HeroOrbit
export const HeroOrbit = ({
  children, // Children components or elements to be rendered inside the orbit
  size, // Size of the orbit (height and width in pixels)
  rotation, // Rotation angle of the orbit in degrees
}: React.PropsWithChildren<{ size: number; rotation: number }>) => {
  // Type annotations for props
  return (
    // Outer container to center the orbit element in the parent
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Inner container defining the size and rotation of the orbit */}
      <div
        className="flex items-start justify-start"
        style={{
          // Apply rotation to the container element
          transform: `rotate(${rotation}deg)`,
          // Dynamically set height and width based on the size prop
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        {/* Wrapper for the children to counter-rotate them, keeping them upright */}
        <div
          className="inline-flex"
          style={{
            // Reverse the rotation of the inner container to keep children elements upright
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          {/* Render the child elements passed to the component */}
          {children}
        </div>
      </div>
    </div>
  );
};
