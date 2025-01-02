import { twMerge } from "tailwind-merge"; // Utility for merging Tailwind CSS class names
import { TechIcon } from "./TechIcon"; // Custom TechIcon component for rendering icons

// Define and export the ToolboxItems component
export const ToolboxItems = ({
  items, // Array of items to render in the toolbox
  className, // Optional additional classes for styling the container
  itemsWrapperClassName, // Optional additional classes for styling the inner wrapper
}: {
  items: { title: string; iconType: React.ElementType }[]; // Array of objects with title and iconType
  className?: string; // Type annotation: optional string
  itemsWrapperClassName?: string; // Type annotation: optional string
}) => {
  return (
    // Container for the toolbox items with merged base and custom classes
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className, // Merge any additional classes passed via props
      )}
    >
      {/* Inner wrapper for toolbox items with merged base and custom classes */}
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName, // Merge any additional classes passed via props
        )}
      >
        {/* Map through the items array to render each item */}
        {items.map((item) => (
          <div
            key={item.title} // Unique key for each item
            className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
          >
            {/* Render the icon using the TechIcon component */}
            <TechIcon component={item.iconType} />
            {/* Render the title of the toolbox item */}
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
