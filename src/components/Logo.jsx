import fotoAngel from '../assets/fotoAngelPecero.png';

export default function Logo({ className = 'w-14 h-14 rounded-full object-cover' }) {
  return <img src={fotoAngel} alt="Angel Antonio Pecero Martinez" className={className} />;
}
