// Export a functional React component named Header
export const Header = () => {
  return (
    // A div to contain the navigation bar, fixed with some spacing above and centered items
    <div className="fixed top-3 z-10 flex w-full items-center justify-center">
      {/* Navigation bar container */}
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        {/* Navigation link: Home */}
        <a href="#" className="nav-item">
          Início
        </a>
        {/* Navigation link: Projects */}
        <a href="#" className="nav-item">
          Projetos
        </a>
        {/* Navigation link: About */}
        <a href="#" className="nav-item">
          Sobre
        </a>
        {/* Navigation link: Contact, styled with a distinct background and text color */}
        <a
          href="#"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contato
        </a>
      </nav>
    </div>
  );
};
