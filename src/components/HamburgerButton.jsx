import { Menu, X } from 'lucide-react';

export default function HamburgerButton({ open, onClick }) {
  return (
    <button className="lg:hidden text-white p-2 -mr-2" onClick={onClick} aria-label="Menú">
      {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}
