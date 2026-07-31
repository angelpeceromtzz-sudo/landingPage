import CONFIG from '../config';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line">
      <div className="max-w-lg mx-auto px-4 py-8 text-center">
        <p className="text-xs text-[#A1A1AA]/60">
          &copy; {CONFIG.ANIO} {CONFIG.AUTOR} {CONFIG.UNIVERSIDAD}
        </p>
      </div>
    </footer>
  );
}
