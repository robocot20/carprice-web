import { useState, useCallback, useEffect } from 'react';
import Hero from './sections/Hero';
import SearchSection from './sections/SearchSection';
import ResultsSection from './sections/ResultsSection';
import HowItWorks from './sections/HowItWorks';
import Footer from './sections/Footer';
import type { ExchangeRate, PriceStats, Vehicle } from './services/api';
import { getExchangeRate } from './services/api';
import {
  mockGetExchangeRate,
  mockGetAveragePrice,
  mockGetVehicles,
} from './services/mockData';

// Usar variable de entorno VITE_USE_MOCKS para decidir modo
const USE_MOCKS = import.meta.env.VITE_USE_MOCKS !== undefined
  ? import.meta.env.VITE_USE_MOCKS === 'true'
  : true;

interface SearchFilters {
  marca: string;
  modelo: string;
  subModelo: string;
  año_desde: number;
  año_hasta: number;
}

function App() {
  const [results, setResults] = useState<PriceStats | null>(null);
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [filters, setFilters] = useState<SearchFilters>({
    marca: '',
    modelo: '',
    subModelo: '',
    año_desde: 2008,
    año_hasta: 2026,
  });
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar tasa de cambio al iniciar
  useEffect(() => {
    loadExchangeRate();
  }, []);

  const loadExchangeRate = async () => {
    try {
      const rate = USE_MOCKS ? await mockGetExchangeRate() : await getExchangeRate();
      setExchangeRate(rate);
    } catch (err) {
      console.error('Error cargando tasa:', err);
      // Fallback a mock
      try {
        const rate = await mockGetExchangeRate();
        setExchangeRate(rate);
      } catch (e) {
        // ignore
      }
    }
  };

  const handleSearch = useCallback(async (
    marca: string,
    modelo: string,
    subModelo: string,
    añoDesde: number,
    añoHasta: number
  ) => {
    if (añoDesde > añoHasta) {
      setError('El año de inicio no puede ser mayor al año final.');
      return;
    }
    setIsLoading(true);
    setError(null);
    
    try {
      const searchFilters = {
        marca: marca || undefined,
        modelo: modelo || undefined,
        submodelo: subModelo || undefined,
        año_desde: añoDesde,
        año_hasta: añoHasta,
      };

      let stats;
      let vehiclesData;

      if (USE_MOCKS) {
        // Usar datos simulados
        stats = await mockGetAveragePrice(searchFilters);
        vehiclesData = await mockGetVehicles(searchFilters, 100, 0);
      } else {
        // Intentar conectar al backend
        try {
          const { getEnrichedPrice, getVehicles } = await import('./services/api');
          stats = await getAveragePrice(searchFilters);
          vehiclesData = await getVehicles(searchFilters, 100, 0);
        } catch (backendErr) {
          console.warn('Backend no disponible, usando mocks:', backendErr);
          stats = await mockGetAveragePrice(searchFilters);
          vehiclesData = await mockGetVehicles(searchFilters, 100, 0);
        }
      }
      
      setResults(stats);
      setVehicles(vehiclesData.vehiculos);
      setTotalVehicles(vehiclesData.total);
      
      if (vehiclesData.tasa_cambio) {
        setExchangeRate(vehiclesData.tasa_cambio);
      }
      
      setFilters({
        marca,
        modelo,
        subModelo,
        año_desde: añoDesde,
        año_hasta: añoHasta,
      });
      
      setHasSearched(true);
    } catch (err) {
      console.error('Error en busqueda:', err);
      setError('Error consultando datos. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#131313]">
      {/* Hero Section */}
      <Hero exchangeRate={exchangeRate} />
      
      {/* Search Section */}
      <div id="search-section">
        <SearchSection 
          onSearch={handleSearch} 
          isLoading={isLoading}
          exchangeRate={exchangeRate}
          useMocks={USE_MOCKS}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-red-400 text-lg">!</span>
            </div>
            <div>
              <p className="text-red-400 text-sm font-medium">Error</p>
              <p className="text-red-400/70 text-xs">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Loading State */}
      {isLoading && (
        <section className="w-full py-16 bg-[#131313]">
          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-[#0082F3]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-[#0082F3]/40 rounded-full"></div>
              </div>
              <p className="text-white/60">Consultando precios...</p>
            </div>
          </div>
        </section>
      )}
      
      {/* Results Section */}
      {hasSearched && !isLoading && results && (
        <ResultsSection
          stats={results}
          vehicles={vehicles}
          totalVehicles={totalVehicles}
          filters={filters}
          exchangeRate={exchangeRate}
        />
      )}
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
