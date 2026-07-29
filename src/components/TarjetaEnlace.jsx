export default function TarjetaEnlace({ enlace }) {
  const IconoEnlace = enlace.icono;
  const Envoltorio = enlace.url ? 'a' : 'button';
  const propsEnvoltorio = enlace.url
    ? { href: enlace.url, target: '_blank', rel: 'noopener noreferrer' }
    : { onClick: enlace.alHacerClick };

  return (
    <Envoltorio
      {...propsEnvoltorio}
      className={`group rounded-xl bg-surface border border-line p-6 transition-colors duration-200 hover:bg-surface-secondary ${
        enlace.pendiente ? 'opacity-60' : ''
      }`}
    >
      <IconoEnlace className="w-6 h-6 text-white mb-4" />
      <h3 className="text-lg font-semibold text-white mb-1.5">{enlace.titulo}</h3>
      <p className="text-sm text-[#A1A1AA] leading-relaxed">{enlace.descripcion}</p>
    </Envoltorio>
  );
}
