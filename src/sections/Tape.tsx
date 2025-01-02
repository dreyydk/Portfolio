// Import necessary constants and icons
import { tapeWords } from "@/constants"; // Array of words to be displayed in the tape section
import StarIcon from "@/assets/icons/star.svg"; // Star icon used as a separator between words

// Define the TapeSection component
export const TapeSection = () => {
  return (
    // Wrapper div for the tape section with clipping and padding
    <div className="overflow-x-clip py-16 lg:py-24">
      {/* Rotated and gradient background for visual effect */}
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
        {/* Flex container for smooth horizontal scrolling and gradient mask */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Inner container to display words and icons */}
          <div className="flex flex-none gap-4 py-3">
            {/* Map over tapeWords to render each word with a star icon */}
            {tapeWords.map((word) => (
              <div
                key={word} // Unique key for each word
                className="inline-flex items-center gap-4"
              >
                {/* Display word in uppercase and bold */}
                <span className="text-sm font-extrabold uppercase text-gray-900">
                  {word}
                </span>
                {/* Star icon rotated for visual styling */}
                <StarIcon className="size-6 -rotate-12 text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
