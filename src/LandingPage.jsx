import useScrollAnimation from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import HeroSeccion from './components/HeroSeccion';
import AccesosRapidos from './components/AccesosRapidos';
import VideoSeccion from './components/VideoSeccion';
import SRSSeccion from './components/SRSSeccion';
import ImportanciaRequerimientos from './components/ImportanciaRequerimientos';
import CTASeccion from './components/CTASeccion';
import Footer from './components/Footer';
import CONFIG from './config';

export default function LandingPage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <HeroSeccion />
      <AccesosRapidos />
      <VideoSeccion
        id="tutorial"
        titulo="Video Tutorial"
        descripcion="Aprende a utilizar la plataforma Clubs UNID Campeche paso a paso"
        url={CONFIG.VIDEO_TUTORIAL}
        tituloPlaceholder="Video Tutorial"
        descripcionPlaceholder="El tutorial completo del sistema estará disponible próximamente. Te guiaremos a través de todas las funcionalidades de la plataforma."
      />
      <SRSSeccion />
      <VideoSeccion
        id="testimonial"
        titulo="Video Testimonial"
        descripcion="Conoce la experiencia y resultados del proyecto Clubs UNID Campeche"
        url={CONFIG.VIDEO_TESTIMONIAL}
        tituloPlaceholder="Video Testimonial"
        descripcionPlaceholder="Próximamente podrás ver el testimonio de los involucrados en el proyecto y conocer de primera mano los resultados obtenidos."
      />
      <ImportanciaRequerimientos />
      <CTASeccion />
      <Footer />
    </div>
  );
}
