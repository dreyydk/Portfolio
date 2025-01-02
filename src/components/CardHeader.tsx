import StarIcon from "@/assets/icons/star.svg"; // Import star icon for visual enhancement
import { twMerge } from "tailwind-merge"; // Utility for merging Tailwind CSS class names

// Define and export the CardHeader component
export const CardHeader = ({
  title, // Title of the card header
  description, // Description text providing context
  className, // Optional additional classes for styling
}: {
  title: string; // Type annotation: title must be a string
  description: string; // Type annotation: description must be a string
  className?: string; // Type annotation: className is optional and must be a string if provided
}) => {
  return (
    // Wrapper div with default padding and optional additional classes
    <div className={twMerge("flex flex-col p-6 md:px-10 md:py-8", className)}>
      {/* Title section with a star icon and the title text */}
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" /> {/* Star icon */}
        <h3 className="font-serif text-3xl">{title}</h3>{" "}
        {/* Title text styled with serif font */}
      </div>

      {/* Description section with text styling for readability */}
      <p className="mt-2 max-w-xs text-sm text-white/60 lg:text-base">
        {description}
      </p>
    </div>
  );
};
