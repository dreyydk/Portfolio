// --- Imports ---
import { tapeWords } from "@/constants"; // Array of descriptive words for the tape section
import StarIcon from "@/assets/icons/star.svg"; // Star icon for visual separation between words

// --- TapeSection Component ---
export const TapeSection = () => {
  return (
    // Wrapper for the tape section with clipping and responsive padding
    <div className="overflow-x-clip py-16 lg:py-24">
      {/* Background layer with rotation and gradient for dynamic visuals */}
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
        {/* Horizontal scrolling container with gradient mask for fading edges */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Inner container for displaying words and icons */}
          <div className="flex flex-none gap-4 py-3">
            {/* Dynamically render words from tapeWords with a star icon */}
            {tapeWords.map((word) => (
              <div
                key={word} // Unique key for each word in the array
                className="inline-flex items-center gap-4"
              >
                {/* Display the word in uppercase and bold styling */}
                <span className="text-sm font-extrabold uppercase text-gray-900">
                  {word}
                </span>
                {/* Add a star icon with slight rotation for aesthetic flair */}
                <StarIcon className="size-6 -rotate-12 text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
