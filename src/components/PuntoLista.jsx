export default function PuntoLista({ punto, index }) {
  return (
    <div className="relative pl-8 lg:pl-12 fade-in-section">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-line" />
      <div className="absolute left-0 top-0 w-px h-10 bg-accent" />
      <span className="text-sm font-mono text-[#A1A1AA] mb-3 block">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">
        {punto.titulo}
      </h3>
      <p className="text-base lg:text-lg text-[#A1A1AA] leading-relaxed max-w-3xl">
        {punto.texto}
      </p>
    </div>
  );
}
