import EncabezadoSeccion from './EncabezadoSeccion';
import PuntoLista from './PuntoLista';

const PUNTOS = [
  {
    titulo: 'Previene retrabajo y sobrecostos',
    texto: 'Corregir un error en la fase de requerimientos cuesta hasta 10 veces menos que hacerlo en producción. Una especificación clara desde el inicio mantiene el proyecto dentro del presupuesto y evita costosas repeticiones de trabajo.',
  },
  {
    titulo: 'Resuelve el problema real del usuario',
    texto: 'Sin requerimientos precisos, el equipo desarrolla basándose en suposiciones. Entrevistas, prototipos y validación constante garantizan que el sistema resuelva las necesidades auténticas de estudiantes, presidentes y administradores.',
  },
  {
    titulo: 'Determina el éxito del proyecto',
    texto: 'Los proyectos con una gestión sólida de requerimientos tienen 3 veces más probabilidades de éxito. Una buena especificación alinea al equipo, reduce la ambigüedad y proporciona una base medible para la aceptación del producto final.',
  },
  {
    titulo: 'Aplicado a Clubs UNID Campeche',
    texto: 'Cada funcionalidad —desde roles de usuario hasta flujos de postulación y gestión— fue validada con los actores reales del campus. Esto asegura que la plataforma transforme la experiencia de participación estudiantil en UNID Campeche.',
  },
];

export default function ImportanciaRequerimientos() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <EncabezadoSeccion
          titulo="¿Por qué es vital la toma correcta de requerimientos?"
          descripcion={
            <>
              La especificación de requerimientos es la base de todo proyecto de
              software exitoso. Estudios del Standish Group indican que el{' '}
              <span className="text-[#A1A1AA] font-semibold">70% de los proyectos</span>{' '}
              fallan debido a una toma de requerimientos deficiente.
            </>
          }
          className="mb-14"
        />

        <div className="space-y-12 lg:space-y-16">
          {PUNTOS.map((punto, i) => (
            <PuntoLista key={i} punto={punto} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
