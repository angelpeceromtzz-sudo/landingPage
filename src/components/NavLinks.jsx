import { desplazarA } from '../utils/helpers';

export const ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'recursos', label: 'Recursos' },
  { id: 'tutorial', label: 'Tutorial' },
  { id: 'srs', label: 'SRS' },
  { id: 'testimonial', label: 'Testimonial' },
];

export default function NavLinks({ active, onClickNav, mobile = false }) {
  return ITEMS.map((item) => (
    <button
      key={item.id}
      onClick={() => onClickNav(item.id)}
      className={`${
        mobile ? 'block w-full text-left px-4 py-2.5' : 'px-4 py-2'
      } rounded-lg text-sm font-medium transition-colors duration-200 ${
        active === item.id ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
      }`}
    >
      {item.label}
    </button>
  ));
}
