export default function EncabezadoSeccion({ titulo, descripcion, className = '' }) {
  return (
    <div className={`mb-10 fade-in-section ${className}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{titulo}</h2>
      {descripcion && <p className="mt-4 text-lg text-[#A1A1AA]">{descripcion}</p>}
    </div>
  );
}
