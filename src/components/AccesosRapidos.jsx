import { ExternalLink, Globe, Play, FileText, Video, Music } from 'lucide-react';
import CONFIG from '../config';
import TarjetaEnlace from './TarjetaEnlace';
import logoLobo from '../assets/logo-lobo.svg';
import srsDocumento from '../assets/SRS_ClubsUNID.pdf';

function IconoLobo({ className }) {
  return <img src={logoLobo} alt="" className={className} />;
}

const ENLACES = [
  {
    icono: Music,
    titulo: 'TikTok',
    descripcion: CONFIG.TIKTOK
      ? 'Síguenos y mira el contenido del proyecto'
      : 'Pendiente - video en tiktok',
    url: CONFIG.TIKTOK || CONFIG.SPA,
    pendiente: !CONFIG.TIKTOK,
  },
  {
    icono: Globe,
    titulo: 'Portafolio Profesional',
    descripcion: 'Conoce más sobre mi trabajo',
    url: CONFIG.PORTAFOLIO,
    pendiente: false,
  },
  {
    icono: IconoLobo,
    titulo: 'Acceder al Sistema',
    descripcion: 'Explora y gestiona los clubes estudiantiles',
    url: CONFIG.SPA,
    pendiente: false,
  },
  {
    icono: Play,
    titulo: 'Video Tutorial',
    descripcion: CONFIG.VIDEO_TUTORIAL
      ? 'Un recorrido por el sistema'
      : 'Pendiente - tutorial del sistema',
    url: CONFIG.VIDEO_TUTORIAL || CONFIG.SPA,
    pendiente: !CONFIG.VIDEO_TUTORIAL,
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
    icono: FileText,
    titulo: 'Documento SRS',
    descripcion: 'Especificación de Requisitos del Software',
    url: CONFIG.SRS || srsDocumento,
    pendiente: false,
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
