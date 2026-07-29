import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import HamburgerButton from './HamburgerButton';
import useScrollSpy from '../hooks/useScrollSpy';
import { desplazarA } from '../utils/helpers';
import CONFIG from '../config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const active = useScrollSpy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClickFuera = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickFuera);
    return () => document.removeEventListener('mousedown', onClickFuera);
  }, [menuOpen]);

  const handleNav = (id) => {
    desplazarA(id);
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => desplazarA('inicio')}
            className="flex items-center gap-2.5"
          >
            <Logo />
            <span className="text-white font-bold text-lg tracking-tight">
              Clubes UNID
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLinks active={active} onClickNav={handleNav} />
            <a
              href={CONFIG.SPA}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors duration-200"
            >
              Acceder
              <ExternalLink className="w-4 h-4" />
            </a>
          </nav>

          <HamburgerButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-primary/95 backdrop-blur-sm border-t border-line px-4 py-4 space-y-1">
          <NavLinks active={active} onClickNav={handleNav} mobile />
          <a
            href={CONFIG.SPA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors mt-2"
          >
            Acceder al Sistema
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
