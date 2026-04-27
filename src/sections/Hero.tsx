import { useEffect, useRef, useState } from 'react';
import { Car, TrendingUp, Shield, Zap, DollarSign } from 'lucide-react';
import type { ExchangeRate } from '../services/api';

interface HeroProps {
  exchangeRate: ExchangeRate | null;
}

export default function Hero({ exchangeRate }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToSearch = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tasaVenta = exchangeRate?.venta?.toFixed(4) || '59.6897';

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#131313]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 130, 243, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[20%] left-[10%] opacity-10"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <Car className="w-24 h-24 text-white" />
        </div>
        
        <div
          className="absolute top-[60%] right-[15%] opacity-10"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <Car className="w-32 h-32 text-white" />
        </div>
        
        <div
          className="absolute bottom-[20%] left-[20%] opacity-5"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <DollarSign className="w-48 h-48 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <Zap className="w-4 h-4 text-[#0082F3]" />
            <span className="text-sm text-white/70 font-mono uppercase tracking-wider">
              Datos en tiempo real
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight">
            CarPrice
            <span className="text-[#0082F3]"> Analyzer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 mb-4 max-w-2xl mx-auto">
            Consulta el valor promedio de vehiculos en Republica Dominicana
          </p>
          <p className="text-base text-white/40 mb-6 max-w-xl mx-auto">
            Precios actualizados de <span className="text-[#0082F3]">SuperCarros.com</span> y <span className="text-[#0082F3]">CarrosRD.com</span>
          </p>

          {/* Exchange Rate Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0082F3]/10 rounded-full border border-[#0082F3]/20 mb-10">
            <DollarSign className="w-4 h-4 text-[#0082F3]" />
            <span className="text-sm text-[#0082F3]">
              Tasa BCRD Venta (Sector Externo): 1 USD = {tasaVenta} DOP
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToSearch}
              className="w-full sm:w-auto bg-[#0082F3] hover:bg-[#0066CC] text-white font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Car className="w-5 h-5" />
              Buscar Vehiculos
            </button>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white/70 hover:text-white hover:border-white/40 rounded-xl font-medium transition-all duration-300 text-center"
            >
              Como Funciona
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Car className="w-5 h-5 text-[#0082F3]" />
              </div>
              <p className="text-2xl md:text-3xl font-medium text-white">100+</p>
              <p className="text-sm text-white/50">Marcas</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#0082F3]" />
              </div>
              <p className="text-2xl md:text-3xl font-medium text-white">2</p>
              <p className="text-sm text-white/50">Fuentes</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-[#0082F3]" />
              </div>
              <p className="text-2xl md:text-3xl font-medium text-white">2</p>
              <p className="text-sm text-white/50">Monedas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#131313] to-transparent pointer-events-none" />
    </section>
  );
}
