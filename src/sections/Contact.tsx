import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"; // Icon for the contact button
import grainImage from "@/assets/images/grain.jpg"; // Subtle grain texture for background

// --- ContactSection Component ---
export const ContactSection = () => {
  return (
    // Wrapper for the section with responsive padding
    <div className="py-16 pt-12 lg:pt-20">
      {/* Main container for centering content */}
      <div className="container">
        {/* Gradient background with text content */}
        <div className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:text-left">
          {/* Subtle grain texture in the background */}
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          {/* Flex container for the section content */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            {/* Left content: Heading and description */}
            <div>
              {/* Section heading */}
              <h2 className="font-serif text-2xl md:text-3xl">
                Vamos criar algo incrível juntos
              </h2>
              {/* Section description */}
              <p className="mt-2 text-sm md:text-base">
                Pronto para trazer seu próximo projeto ao ar? Entre em contato e
                vamos juntos descobrir como posso ajudá-lo a atingir seus
                objetivos.
              </p>
            </div>
            {/* Right content: Contact button */}
            <div>
              <button className="inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white">
                <span className="font-semibold">Contato</span>
                <ArrowUpRightIcon className="size-4" />{" "}
                {/* Contact button icon */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
