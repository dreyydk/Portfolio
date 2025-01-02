// Define and export the SectionHeader component
export const SectionHeader = ({
  title, // The main title of the section
  eyebrow, // A smaller subtitle or "eyebrow" text displayed above the title
  description, // A short description providing context for the section
}: {
  title: string; // Type annotation for title: must be a string
  eyebrow: string; // Type annotation for eyebrow: must be a string
  description: string; // Type annotation for description: must be a string
}) => {
  return (
    <>
      {/* Eyebrow text: Styled with gradient and uppercase formatting */}
      <div className="flex justify-center">
        <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
          {eyebrow}
        </p>
      </div>
      {/* Main title: Center-aligned and styled with serif font */}
      <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
        {title}
      </h2>
      {/* Description text: Styled for readability with reduced opacity */}
      <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
        {description}
      </p>
    </>
  );
};
