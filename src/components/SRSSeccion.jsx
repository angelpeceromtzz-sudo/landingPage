import { FileText, ExternalLink, Clock } from 'lucide-react';
import CONFIG from '../config';
import EncabezadoSeccion from './EncabezadoSeccion';

export default function SRSSeccion() {
  return (
    <section id="srs" className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <EncabezadoSeccion
          titulo="Documento SRS"
          descripcion="Especificación de Requisitos del Software — la base técnica del proyecto"
        />

        <div className="fade-in-section">
          {CONFIG.SRS ? (
            <a
              href={CONFIG.SRS}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-colors duration-200"
            >
              <FileText className="w-5 h-5" />
              Abrir Documento SRS
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-3 bg-surface border border-line px-6 py-3.5 rounded-xl text-[#A1A1AA]">
              <FileText className="w-5 h-5" />
              <span className="font-medium">Documento SRS</span>
              <span className="text-sm text-[#A1A1AA]/60">— Próximamente</span>
              <Clock className="w-4 h-4 text-[#A1A1AA]/60" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
