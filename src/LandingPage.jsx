import useScrollAnimation from './hooks/useScrollAnimation';
import Logo from './components/Logo';
import AccesosRapidos from './components/AccesosRapidos';
import Footer from './components/Footer';

export default function LandingPage() {
  useScrollAnimation();

  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-lg mx-auto px-4 pt-12 pb-4 text-center">
          <div className="flex justify-center mb-3">
            <Logo className="w-36 h-36 rounded-full object-cover" />
          </div>
          <h1 className="text-xl font-bold text-white">Angel Antonio Pecero Martinez</h1>
          <p className="text-sm text-[#A1A1AA] mt-1">Clubes UNID Campeche</p>
        </div>

        <AccesosRapidos />
      </main>

      <Footer />
    </div>
  );
}
