import { Globe, Play, FileText, Video } from 'lucide-react';
import { desplazarA } from '../utils/helpers';
import CONFIG from '../config';
import EncabezadoSeccion from './EncabezadoSeccion';
import TarjetaEnlace from './TarjetaEnlace';

const ENLACES = [
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
      : 'Próximamente — tutorial del sistema',
    alHacerClick: CONFIG.VIDEO_TUTORIAL ? undefined : () => desplazarA('tutorial'),
    pendiente: !CONFIG.VIDEO_TUTORIAL,
  },
  {
    icono: FileText,
    titulo: 'Documento SRS',
    descripcion: CONFIG.SRS
      ? 'Especificación de Requisitos del Software'
      : 'Próximamente — documento disponible',
    url: CONFIG.SRS || undefined,
    pendiente: !CONFIG.SRS,
  },
  {
    icono: Video,
    titulo: 'Video Testimonial',
    descripcion: CONFIG.VIDEO_TESTIMONIAL
      ? 'Experiencia y resultados del proyecto'
      : 'Próximamente — testimonio en video',
    alHacerClick: CONFIG.VIDEO_TESTIMONIAL ? undefined : () => desplazarA('testimonial'),
    pendiente: !CONFIG.VIDEO_TESTIMONIAL,
  },
];

export default function AccesosRapidos() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EncabezadoSeccion
          titulo="Accesos Rápidos"
          descripcion="Todo lo que necesitas sobre el proyecto, a un clic de distancia"
          className="text-center mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ENLACES.map((enlace, i) => (
            <TarjetaEnlace key={i} enlace={enlace} />
          ))}
        </div>
      </div>
    </section>
  );
}
