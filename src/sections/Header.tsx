// Header component that renders a navigation bar
export const Header = () => {
  return (
    <div className="relative top-3 flex items-center justify-center">
      {/* Container for the header, centered with some top margin */}
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        {/* Navigation bar with rounded edges and a blurred background */}
        {/* Navigation links */}
        <a href="#" className="nav-item">
          {/* Link to Home */}
          Home
        </a>
        <a href="#" className="nav-item">
          {/* Link to Projects */}
          Projects
        </a>
        <a href="#" className="nav-item">
          {/* Link to About */}
          About
        </a>
        <a
          href="#" // Link to Contact
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" // Active link with hover effects
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
