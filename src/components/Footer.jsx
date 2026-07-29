import { ExternalLink, Play, FileText, Users, BookOpen } from 'lucide-react';
import Logo from './Logo';
import { desplazarA } from '../utils/helpers';
import CONFIG from '../config';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="w-8 h-8" />
              <span className="text-white font-bold text-base">
                Clubes UNID
              </span>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Plataforma web para la gestión y difusión de clubes estudiantiles
              del campus UNID Campeche.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={CONFIG.SPA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3" />
                  Sistema Web
                </a>
              </li>
              <li>
                <a
                  href={CONFIG.PORTAFOLIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3" />
                  Portafolio
                </a>
              </li>
              <li>
                <button
                  onClick={() => desplazarA('tutorial')}
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Play className="w-3 h-3" />
                  Video Tutorial
                </button>
              </li>
              <li>
                <button
                  onClick={() => desplazarA('srs')}
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3" />
                  Documento SRS
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Información
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
              <li className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-accent" />
                {CONFIG.AUTOR}
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                {CONFIG.UNIVERSIDAD}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 text-accent flex items-center justify-center text-xs">&copy;</span>
                {CONFIG.ANIO}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-8 text-center">
          <p className="text-xs text-[#A1A1AA]/60">
            &copy; {CONFIG.ANIO} {CONFIG.AUTOR} &mdash; {CONFIG.UNIVERSIDAD}.
          </p>
        </div>
      </div>
    </footer>
  );
}
