import { Car, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0082F3] rounded-xl flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-medium text-white">CarPrice Analyzer</span>
            </div>
            <p className="text-white/50 text-sm max-w-md mb-4">
              Herramienta gratuita para consultar el valor promedio de vehículos en República Dominicana. 
              Basado en datos de SuperCarros.com y CarrosRD.com
            </p>
            <p className="text-white/30 text-xs">
              © 2024 CarPrice Analyzer. Todos los derechos reservados.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.supercarros.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#0082F3] text-sm flex items-center gap-1 transition-colors"
                >
                  SuperCarros.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.carrosrd.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#0082F3] text-sm flex items-center gap-1 transition-colors"
                >
                  CarrosRD.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Disclaimer */}
          <div>
            <h4 className="text-white font-medium mb-4">Aviso Legal</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Los precios mostrados son estimaciones basadas en anuncios públicos. 
              Los precios reales pueden variar según condición, ubicación y otros factores. 
              Esta herramienta es solo para fines informativos.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            Datos proporcionados por SuperCarros.com y CarrosRD.com
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs">
              República Dominicana
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
