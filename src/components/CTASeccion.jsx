import { ArrowRight } from 'lucide-react';
import CONFIG from '../config';

export default function CTASeccion() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-section">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Accede a la plataforma Clubs UNID Campeche
          </h2>

          <p className="text-lg text-[#A1A1AA] mb-10 max-w-xl mx-auto">
            Descubre clubes, postúlate como miembro y gestiona actividades desde
            un solo lugar.
          </p>

          <a
            href={CONFIG.SPA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black font-semibold px-8 py-4 rounded-xl text-lg transition-colors duration-200"
          >
            Ir al Sistema
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
