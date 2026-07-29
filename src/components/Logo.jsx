import logoLobo from '../assets/logo-lobo.svg';

export default function Logo({ className = 'w-9 h-9' }) {
  return <img src={logoLobo} alt="Logo Lobo" className={className} />;
}
