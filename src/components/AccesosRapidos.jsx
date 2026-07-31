import { ExternalLink, Globe, Play, FileText, Video, Music } from 'lucide-react';
import CONFIG from '../config';
import TarjetaEnlace from './TarjetaEnlace';
import logoLobo from '../assets/logo-lobo.svg';

function IconoLobo({ className }) {
  return <img src={logoLobo} alt="" className={className} />;
}

const ENLACES = [
  {
    icono: IconoLobo,
    titulo: 'Acceder al Sistema',
    descripcion: 'Explora y gestiona los clubes estudiantiles',
    url: CONFIG.SPA,
    pendiente: false,
  },
  {
    icono: Globe,
    titulo: 'Portafolio Profesional',
    descripcion: 'Conoce más sobre el desarrollo del proyecto',
    url: CONFIG.PORTAFOLIO,
    pendiente: false,
  },
  {
    icono: Play,
    titulo: 'Video Tutorial',
    descripcion: CONFIG.VIDEO_TUTORIAL
      ? 'Aprende a usar el sistema paso a paso'
      : 'Pendiente - tutorial del sistema',
    url: CONFIG.VIDEO_TUTORIAL || CONFIG.SPA,
    pendiente: !CONFIG.VIDEO_TUTORIAL,
  },
  {
    icono: FileText,
    titulo: 'Documento SRS',
    descripcion: CONFIG.SRS
      ? 'Especificación de Requisitos del Software'
      : 'Pendiente - documento disponible',
    url: CONFIG.SRS || CONFIG.SPA,
    pendiente: !CONFIG.SRS,
  },
  {
    icono: Video,
    titulo: 'Video Testimonial',
    descripcion: CONFIG.VIDEO_TESTIMONIAL
      ? 'Experiencia y resultados del proyecto'
      : 'Pendiente - testimonio en video',
    url: CONFIG.VIDEO_TESTIMONIAL || CONFIG.SPA,
    pendiente: !CONFIG.VIDEO_TESTIMONIAL,
  },
  {
    icono: Music,
    titulo: 'TikTok',
    descripcion: 'Pendiente - video en tiktok',
    url: CONFIG.TIKTOK || CONFIG.SPA,
    pendiente: !CONFIG.TIKTOK,
  },
];

export default function AccesosRapidos() {
  return (
    <section className="pb-20 fade-in-section">
      <div className="max-w-lg mx-auto px-4">
        <div className="grid grid-cols-1 gap-3">
          {ENLACES.map((enlace, i) => (
            <TarjetaEnlace key={i} enlace={enlace} />
          ))}
        </div>
      </div>
    </section>
  );
}
