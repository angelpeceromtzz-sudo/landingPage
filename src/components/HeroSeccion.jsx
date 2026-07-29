import { ExternalLink } from 'lucide-react';
import { desplazarA } from '../utils/helpers';
import CONFIG from '../config';

export default function HeroSeccion() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Clubs UNID Campeche
          </h1>

          <p className="text-xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-12">
            Plataforma web para la gestión y difusión de clubes estudiantiles.
            Descubre, participa y administra clubes desde un solo lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CONFIG.SPA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black font-semibold px-7 py-3.5 rounded-xl text-lg transition-colors duration-200"
            >
              Acceder al Sistema
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={() => desplazarA('recursos')}
              className="inline-flex items-center justify-center gap-2 border border-line hover:bg-surface-secondary text-white font-medium px-7 py-3.5 rounded-xl text-lg transition-colors duration-200"
            >
              Explorar Recursos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
