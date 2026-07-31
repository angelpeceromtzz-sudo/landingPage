export default function TarjetaEnlace({ enlace }) {
  const IconoEnlace = enlace.icono;
  const Envoltorio = enlace.url ? 'a' : 'button';
  const propsEnvoltorio = enlace.url
    ? { href: enlace.url, target: '_blank', rel: 'noopener noreferrer' }
    : { onClick: enlace.alHacerClick };

  return (
    <Envoltorio
      {...propsEnvoltorio}
      className={`group rounded-lg bg-surface border border-line p-3 transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/30 ${
        enlace.pendiente ? 'opacity-60 hover:opacity-100' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <IconoEnlace className={enlace.iconClassName || "w-9 h-9 text-white mt-0.5 shrink-0 group-hover:text-black"} />
        <div className="min-w-0">
          <h3 className="text-xs font-semibold text-white mb-0.5 group-hover:text-black">{enlace.titulo}</h3>
          <p className="text-[11px] text-[#A1A1AA] leading-relaxed group-hover:text-zinc-600">{enlace.descripcion}</p>
        </div>
      </div>
    </Envoltorio>
  );
}
