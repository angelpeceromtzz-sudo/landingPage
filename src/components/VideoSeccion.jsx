import { Play, Clock } from 'lucide-react';
import { obtenerUrlEmbedYoutube } from '../utils/helpers';
import EncabezadoSeccion from './EncabezadoSeccion';

export default function VideoSeccion({ id, titulo, descripcion, url, tituloPlaceholder, descripcionPlaceholder }) {
  const urlEmbed = obtenerUrlEmbedYoutube(url);

  return (
    <section id={id} className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <EncabezadoSeccion titulo={titulo} descripcion={descripcion} />

        <div className="fade-in-section">
          {urlEmbed ? (
            <div className="rounded-xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={urlEmbed}
                  title={titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-surface border border-line">
              <div className="aspect-video flex flex-col items-center justify-center p-8">
                <div className="w-16 h-16 rounded-xl bg-surface-secondary flex items-center justify-center mb-6">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {tituloPlaceholder}
                </h3>
                <p className="text-[#A1A1AA] text-center max-w-md">
                  {descripcionPlaceholder}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#A1A1AA]">
                  <Clock className="w-4 h-4" />
                  <span>Disponible próximamente</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
