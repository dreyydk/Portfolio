// Import necessary modules and components
import Image from "next/image"; // Next.js component for optimized image rendering
import { portfolioProjects } from "@/constants"; // Importing portfolio projects data
import CheckCircleIcon from "@/assets/icons/check-circle.svg"; // Icon for displaying a checked circle
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"; // Icon for arrow indicating link
import grainImage from "@/assets/images/grain.jpg"; // Background grain image

// Define the ProjectsSection component
export const ProjectsSection = () => {
  return (
    // Section wrapper with padding for spacing
    <section className="pb-16 lg:py-24">
      {/* Container for centering and managing layout */}
      <div className="container">
        {/* Header section with a gradient text and title */}
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
            Resultados Reais
          </p>
        </div>
        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
          Projetos Pessoais
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
          Conheça a "ponta do iceberg" da minha capacidade com alguns dos meus
          trabalhos pessoais mais recentes.
        </p>
        {/* Section displaying portfolio projects */}
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project) => (
            // Card for each project with styling and layout
            <div
              key={project.title} // Unique key for each project
              className="relative z-0 overflow-hidden rounded-3xl bg-gray-800 px-8 pt-8 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-[''] md:px-10 md:pt-12 lg:px-20 lg:pt-16"
            >
              {/* Background grain image */}
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              {/* Grid layout for project details and image */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Project description section */}
                <div className="lg:pb-16">
                  {/* Project stack and year */}
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                    <span>{project.stack}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  {/* Project title */}
                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  {/* Separator line */}
                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                  {/* List of results achieved in the project */}
                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title} // Unique key for each result
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        {/* Icon representing success/result */}
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Button to view the project */}
                  <a href={project.link}>
                    <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto">
                      <span>Visualizar</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                {/* Image section for the project */}
                <div className="relative">
                  <Image
                    src={project.image} // Image source for the project
                    alt={project.title} // Alternative text for accessibility
                    className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
