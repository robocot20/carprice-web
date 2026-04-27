import { useState, useEffect } from 'react';
import { Search, Car, Calendar, ChevronDown, RefreshCw, Loader2 } from 'lucide-react';
import type { ExchangeRate } from '../services/api';
import { getBrands, getModels, getSubmodels, getYearRange } from '../services/api';
import { mockGetBrands, mockGetModels, mockGetSubmodels, mockGetYearRange } from '../services/mockData';

interface SearchSectionProps {
  onSearch: (marca: string, modelo: string, subModelo: string, añoDesde: number, añoHasta: number) => void;
  isLoading?: boolean;
  exchangeRate: ExchangeRate | null;
  useMocks?: boolean;
}

export default function SearchSection({ onSearch, isLoading = false, exchangeRate, useMocks = false }: SearchSectionProps) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [subModelo, setSubModelo] = useState('');
  const [añoDesde, setAñoDesde] = useState(2008);
  const [añoHasta, setAñoHasta] = useState(2026);
  
  const [marcas, setMarcas] = useState<string[]>([]);
  const [modelos, setModelos] = useState<string[]>([]);
  const [subModelos, setSubModelos] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState({ minimo: 2000, maximo: 2026 });
  const [loadingData, setLoadingData] = useState(true);
  
  // Cargar datos iniciales
  useEffect(() => {
    loadInitialData();
  }, [useMocks]);
  
  const loadInitialData = async () => {
    try {
      setLoadingData(true);
      const loadFn = useMocks ? mockGetBrands : getBrands;
      const yearFn = useMocks ? mockGetYearRange : getYearRange;
      
      const [brandsData, yearData] = await Promise.all([
        loadFn(),
        yearFn(),
      ]);
      
      setMarcas(brandsData);
      setYearRange(yearData);
      setAñoDesde(yearData.minimo);
      setAñoHasta(yearData.maximo);
    } catch (err) {
      console.error('Error cargando datos:', err);
      // Fallback a mocks
      try {
        const brandsData = await mockGetBrands();
        const yearData = await mockGetYearRange();
        setMarcas(brandsData);
        setYearRange(yearData);
        setAñoDesde(yearData.minimo);
        setAñoHasta(yearData.maximo);
      } catch (e) {
        setMarcas(['Toyota', 'Honda', 'Hyundai', 'Kia', 'Nissan', 'Ford', 'Chevrolet', 'Jeep', 'BMW', 'Mercedes-Benz']);
      }
    } finally {
      setLoadingData(false);
    }
  };
  
  // Cargar modelos cuando cambia la marca
  useEffect(() => {
    if (marca) {
      loadModels(marca);
    } else {
      setModelos([]);
      setSubModelos([]);
      setModelo('');
      setSubModelo('');
    }
  }, [marca]);
  
  // Cargar submodelos cuando cambia el modelo
  useEffect(() => {
    if (marca && modelo) {
      loadSubmodels(marca, modelo);
    } else {
      setSubModelos([]);
      setSubModelo('');
    }
  }, [marca, modelo]);
  
  const loadModels = async (brand: string) => {
    try {
      const loadFn = useMocks ? mockGetModels : getModels;
      const modelsData = await loadFn(brand);
      setModelos(modelsData);
      setModelo('');
      setSubModelo('');
      setSubModelos([]);
    } catch (err) {
      console.error('Error cargando modelos:', err);
      try {
        const modelsData = await mockGetModels(brand);
        setModelos(modelsData);
        setModelo('');
        setSubModelo('');
        setSubModelos([]);
      } catch (e) { /* ignore */ }
    }
  };
  
  const loadSubmodels = async (brand: string, model: string) => {
    try {
      const loadFn = useMocks ? mockGetSubmodels : getSubmodels;
      const submodelsData = await loadFn(brand, model);
      setSubModelos(submodelsData);
      setSubModelo('');
    } catch (err) {
      console.error('Error cargando submodelos:', err);
      try {
        const submodelsData = await mockGetSubmodels(brand, model);
        setSubModelos(submodelsData);
        setSubModelo('');
      } catch (e) { /* ignore */ }
    }
  };
  
  const años = Array.from(
    { length: yearRange.maximo - yearRange.minimo + 1 },
    (_, i) => yearRange.minimo + i
  );

  const handleSearch = () => {
    onSearch(marca, modelo, subModelo, añoDesde, añoHasta);
  };

  const handleLimpiar = () => {
    setMarca('');
    setModelo('');
    setSubModelo('');
    setAñoDesde(yearRange.minimo);
    setAñoHasta(yearRange.maximo);
    setModelos([]);
    setSubModelos([]);
  };

  if (loadingData) {
    return (
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#131313] via-[#1D1D1D] to-[#131313]">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Loader2 className="w-8 h-8 text-[#0082F3] animate-spin mx-auto" />
          <p className="text-white/60 mt-4">Cargando datos...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#131313] via-[#1D1D1D] to-[#131313]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6">
            <Car className="w-4 h-4 text-[#0082F3]" />
            <span className="text-sm text-white/70 font-mono uppercase tracking-wider">Buscador de Vehiculos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
            Encuentra el valor de tu vehiculo
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Selecciona la marca, modelo, submodelo y rango de anos para obtener el precio promedio actualizado del mercado dominicano.
          </p>
          
          {/* Exchange Rate Info */}
          {exchangeRate && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#0082F3]/10 rounded-xl border border-[#0082F3]/20">
              <RefreshCw className="w-4 h-4 text-[#0082F3]" />
              <span className="text-sm text-[#0082F3]">
                Tasa BCRD Venta – Sector Externo: <strong>1 USD = {exchangeRate.venta.toFixed(4)} DOP</strong>
              </span>
            </div>
          )}
        </div>

        {/* Search Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Marca */}
            <div className="space-y-2">
              <label className="text-sm text-white/60 font-mono uppercase tracking-wider flex items-center gap-2">
                <Car className="w-4 h-4" />
                Marca
              </label>
              <div className="relative">
                <select
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#0082F3] focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="" className="bg-[#1D1D1D]">Todas las marcas</option>
                  {marcas.map((m) => (
                    <option key={m} value={m} className="bg-[#1D1D1D]">
                      {m}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Modelo */}
            <div className="space-y-2">
              <label className="text-sm text-white/60 font-mono uppercase tracking-wider flex items-center gap-2">
                <Car className="w-4 h-4" />
                Modelo
              </label>
              <div className="relative">
                <select
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  disabled={!marca}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#0082F3] focus:border-transparent transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="" className="bg-[#1D1D1D]">Todos los modelos</option>
                  {modelos.map((m) => (
                    <option key={m} value={m} className="bg-[#1D1D1D]">
                      {m}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Submodelo */}
            <div className="space-y-2">
              <label className="text-sm text-white/60 font-mono uppercase tracking-wider flex items-center gap-2">
                <Car className="w-4 h-4" />
                Submodelo
              </label>
              <div className="relative">
                <select
                  value={subModelo}
                  onChange={(e) => setSubModelo(e.target.value)}
                  disabled={!modelo}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#0082F3] focus:border-transparent transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="" className="bg-[#1D1D1D]">Todos los submodelos</option>
                  {subModelos.map((sm) => (
                    <option key={sm} value={sm} className="bg-[#1D1D1D]">
                      {sm}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Ano Desde */}
            <div className="space-y-2">
              <label className="text-sm text-white/60 font-mono uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Ano Desde
              </label>
              <div className="relative">
                <select
                  value={añoDesde}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setAñoDesde(val);
                    if (val > añoHasta) setAñoHasta(val);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#0082F3] focus:border-transparent transition-all cursor-pointer"
                >
                  {años.map((a) => (
                    <option key={a} value={a} className="bg-[#1D1D1D]">
                      {a}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Ano Hasta */}
            <div className="space-y-2">
              <label className="text-sm text-white/60 font-mono uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Ano Hasta
              </label>
              <div className="relative">
                <select
                  value={añoHasta}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setAñoHasta(Math.max(val, añoDesde));
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#0082F3] focus:border-transparent transition-all cursor-pointer"
                >
                  {años.filter(a => a >= añoDesde).map((a) => (
                    <option key={a} value={a} className="bg-[#1D1D1D]">
                      {a}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="flex-1 bg-[#0082F3] hover:bg-[#0066CC] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Search className="w-5 h-5" />
              )}
              {isLoading ? 'Consultando...' : 'Buscar Vehiculos'}
            </button>
            <button
              onClick={handleLimpiar}
              disabled={isLoading}
              className="px-8 py-4 border border-white/20 text-white/70 hover:text-white hover:border-white/40 rounded-xl font-medium transition-all duration-300 disabled:opacity-50"
            >
              Limpiar Filtros
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-[#0082F3]/20 rounded-xl flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-[#0082F3]" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Datos Reales</h3>
            <p className="text-white/60 text-sm">
              Precios extraidos en tiempo real de SuperCarros.com y CarrosRD.com.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-[#0082F3]/20 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-[#0082F3]" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Tasa BCRD Actual</h3>
            <p className="text-white/60 text-sm">
              Tasa de venta oficial del Banco Central de la Republica Dominicana.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-[#0082F3]/20 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-[#0082F3]" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Precios en Segundos</h3>
            <p className="text-white/60 text-sm">
              Resultados instantaneos en USD y DOP para tus cotizaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
