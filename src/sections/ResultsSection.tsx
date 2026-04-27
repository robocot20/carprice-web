import { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Car, MapPin, Gauge, Package, Tag, ChevronLeft, ChevronRight, Filter, ExternalLink, Shield } from 'lucide-react';
import type { PriceStats, Vehicle, ExchangeRate } from '../services/api';
import { formatUSD, formatDOP, formatNumber } from '../services/api';

interface ResultsSectionProps {
  stats: PriceStats;
  vehicles: Vehicle[];
  totalVehicles: number;
  filters: {
    marca: string;
    modelo: string;
    subModelo: string;
    año_desde: number;
    año_hasta: number;
  };
  exchangeRate: ExchangeRate | null;
}

export default function ResultsSection({ stats, vehicles, totalVehicles, filters, exchangeRate }: ResultsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, _setSortBy] = useState<'precio_usd' | 'año' | 'kilometraje'>('precio_usd');
  const setSortBy = (v: 'precio_usd' | 'año' | 'kilometraje') => { _setSortBy(v); setCurrentPage(1); };
  const [sortOrder, _setSortOrder] = useState<'asc' | 'desc'>('asc');
  const setSortOrder = (v: 'asc' | 'desc') => { _setSortOrder(v); setCurrentPage(1); };
  const [showUSD, setShowUSD] = useState(true);
  const [showDOP, setShowDOP] = useState(true);
  
  const itemsPerPage = 12;
  
  // Ordenar vehiculos
  const vehiculosOrdenados = [...vehicles].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'precio_usd':
        comparison = a.precio_usd - b.precio_usd;
        break;
      case 'año':
        comparison = a.año - b.año;
        break;
      case 'kilometraje':
        comparison = (a.kilometraje || 0) - (b.kilometraje || 0);
        break;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });
  
  // Paginacion
  const totalPages = Math.ceil(vehiculosOrdenados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const vehiculosPaginados = vehiculosOrdenados.slice(startIndex, startIndex + itemsPerPage);
  
  const tasaVenta = exchangeRate?.venta || 59.6897;

  if (stats.cantidad === 0) {
    return (
      <section className="w-full py-16 md:py-24 bg-[#131313]">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Car className="w-10 h-10 text-white/30" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">
              No se encontraron vehiculos
            </h3>
            <p className="text-white/60 max-w-md mx-auto">
              Intenta ajustar los filtros de busqueda para encontrar vehiculos que coincidan con tus criterios.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 md:py-24 bg-[#131313]">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
                Resultados de la Busqueda
              </h2>
              <p className="text-white/60">
                {formatNumber(totalVehicles)} vehiculos encontrados
                {filters.marca && ` • ${filters.marca}`}
                {filters.modelo && ` ${filters.modelo}`}
                {filters.subModelo && ` ${filters.subModelo}`}
                {` • ${filters.año_desde}-${filters.año_hasta}`}
              </p>
            </div>
            
            {/* Sort Controls */}
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-4 h-4 text-white/40" />
              <span className="text-sm text-white/60">Ordenar por:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'precio_usd' | 'año' | 'kilometraje')}
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0082F3]"
              >
                <option value="precio_usd" className="bg-[#1D1D1D]">Precio</option>
                <option value="año" className="bg-[#1D1D1D]">Ano</option>
                <option value="kilometraje" className="bg-[#1D1D1D]">Kilometraje</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                {sortOrder === 'asc' ? (
                  <TrendingUp className="w-4 h-4 text-white/60" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-white/60" />
                )}
              </button>
            </div>
          </div>

          {/* Exchange Rate Info */}
          <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-[#0082F3]/10 rounded-xl border border-[#0082F3]/20">
            <DollarSign className="w-4 h-4 text-[#0082F3]" />
            <span className="text-sm text-[#0082F3]">
              Tasa de cambio BCRD (Venta): <strong>1 USD = {tasaVenta.toFixed(4)} DOP</strong>
            </span>
            <span className="text-xs text-white/40 ml-2">
              ({exchangeRate?.fecha || 'Actual'})
            </span>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-white/60">Mostrar precios en:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showUSD}
                onChange={(e) => setShowUSD(e.target.checked)}
                className="w-4 h-4 accent-[#0082F3]"
              />
              <span className="text-sm text-white">USD (US$)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showDOP}
                onChange={(e) => setShowDOP(e.target.checked)}
                className="w-4 h-4 accent-[#0082F3]"
              />
              <span className="text-sm text-white">DOP (RD$)</span>
            </label>
          </div>
          
          {/* Price Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Promedio */}
            <div className="bg-gradient-to-br from-[#0082F3]/20 to-[#0082F3]/5 rounded-2xl p-6 border border-[#0082F3]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0082F3]/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#0082F3]" />
                </div>
                <span className="text-sm text-white/60 font-mono uppercase tracking-wider">Promedio</span>
              </div>
              {showUSD && (
                <p className="text-2xl md:text-3xl font-medium text-white">
                  {formatUSD(stats.promedio)}
                </p>
              )}
              {showDOP && stats.precio_promedio_dop && (
                <p className={`font-medium text-[#0082F3] ${showUSD ? 'text-lg' : 'text-2xl md:text-3xl'}`}>
                  {formatDOP(stats.precio_promedio_dop)}
                </p>
              )}
            </div>
            
            {/* Minimo */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-sm text-white/60 font-mono uppercase tracking-wider">Minimo</span>
              </div>
              {showUSD && (
                <p className="text-xl md:text-2xl font-medium text-white">
                  {formatUSD(stats.minimo)}
                </p>
              )}
              {showDOP && stats.precio_minimo_dop && (
                <p className={`font-medium text-green-400 ${showUSD ? 'text-base' : 'text-xl md:text-2xl'}`}>
                  {formatDOP(stats.precio_minimo_dop)}
                </p>
              )}
            </div>
            
            {/* Maximo */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-sm text-white/60 font-mono uppercase tracking-wider">Maximo</span>
              </div>
              {showUSD && (
                <p className="text-xl md:text-2xl font-medium text-white">
                  {formatUSD(stats.maximo)}
                </p>
              )}
              {showDOP && stats.precio_maximo_dop && (
                <p className={`font-medium text-orange-400 ${showUSD ? 'text-base' : 'text-xl md:text-2xl'}`}>
                  {formatDOP(stats.precio_maximo_dop)}
                </p>
              )}
            </div>
            
            {/* Cantidad + Mediana */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Package className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-sm text-white/60 font-mono uppercase tracking-wider">Muestra</span>
              </div>
              <p className="text-2xl md:text-3xl font-medium text-white">
                {formatNumber(stats.cantidad)}
              </p>
              <p className="text-sm text-purple-400 mt-1">vehiculos analizados</p>
              {stats.mediana > 0 && (
                <p className="text-xs text-white/40 mt-2">
                  Mediana: {formatUSD(stats.mediana)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Rango de Valor para Seguros */}
        {stats.promedio > 0 && (
          <div className="mb-10 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-amber-500/10 rounded-2xl p-6 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Rango de Valor para Seguros</h3>
                <p className="text-xs text-white/50">Basado en ±30% del valor promedio del mercado</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Valor Minimo Seguro */}
              <div className="bg-white/5 rounded-xl p-5 border border-emerald-500/20 text-center">
                <p className="text-xs text-emerald-400 font-mono uppercase tracking-wider mb-2">Valor Mínimo (−30%)</p>
                {showUSD && (
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    {formatUSD(stats.promedio * 0.70)}
                  </p>
                )}
                {showDOP && stats.precio_promedio_dop && (
                  <p className="text-sm text-emerald-400 mt-1">
                    {formatDOP(stats.precio_promedio_dop * 0.70)}
                  </p>
                )}
              </div>
              {/* Valor Promedio */}
              <div className="bg-[#0082F3]/10 rounded-xl p-5 border border-[#0082F3]/30 text-center">
                <p className="text-xs text-[#0082F3] font-mono uppercase tracking-wider mb-2">Valor Promedio</p>
                {showUSD && (
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    {formatUSD(stats.promedio)}
                  </p>
                )}
                {showDOP && stats.precio_promedio_dop && (
                  <p className="text-sm text-[#0082F3] mt-1">
                    {formatDOP(stats.precio_promedio_dop)}
                  </p>
                )}
              </div>
              {/* Valor Maximo Seguro */}
              <div className="bg-white/5 rounded-xl p-5 border border-amber-500/20 text-center">
                <p className="text-xs text-amber-400 font-mono uppercase tracking-wider mb-2">Valor Máximo (+30%)</p>
                {showUSD && (
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    {formatUSD(stats.promedio * 1.30)}
                  </p>
                )}
                {showDOP && stats.precio_promedio_dop && (
                  <p className="text-sm text-amber-400 mt-1">
                    {formatDOP(stats.precio_promedio_dop * 1.30)}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {vehiculosPaginados.map((vehiculo) => (
            <div
              key={vehiculo.id}
              className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-[#0082F3]/50 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              {/* Vehicle Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative overflow-hidden">
                {vehiculo.imagen_url ? (
                  <img 
                    src={vehiculo.imagen_url} 
                    alt={`${vehiculo.marca} ${vehiculo.modelo}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <Car className="w-16 h-16 text-white/20 group-hover:text-[#0082F3]/30 transition-colors" />
                )}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    vehiculo.condicion === 'Nuevo' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {vehiculo.condicion || 'Usado'}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs text-white/70">
                    {vehiculo.año}
                  </span>
                </div>
              </div>
              
              {/* Vehicle Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-white font-medium line-clamp-1">
                    {vehiculo.marca} {vehiculo.modelo}
                  </h4>
                </div>
                <p className="text-white/60 text-sm mb-3 line-clamp-1">
                  {vehiculo.submodelo}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Gauge className="w-4 h-4" />
                    <span>{formatNumber(vehiculo.kilometraje || 0)} km</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <MapPin className="w-4 h-4" />
                    <span className="line-clamp-1">{vehiculo.ubicacion || 'N/D'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Tag className="w-4 h-4" />
                    <span>{vehiculo.source || 'N/D'}</span>
                  </div>
                </div>
                
                {/* Prices */}
                <div className="pt-3 border-t border-white/10 space-y-1">
                  {showUSD && (
                    <p className="text-lg font-medium text-white">
                      {formatUSD(vehiculo.precio_usd)}
                    </p>
                  )}
                  {showDOP && vehiculo.precio_dop && (
                    <p className={`font-medium text-[#0082F3] ${showUSD ? 'text-sm' : 'text-lg'}`}>
                      {formatDOP(vehiculo.precio_dop)}
                    </p>
                  )}
                </div>
                
                {/* Link to source */}
                {vehiculo.url_detalle && (
                  <a
                    href={vehiculo.url_detalle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 mt-3 text-xs text-[#0082F3] hover:text-[#0066CC] transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Ver en {vehiculo.source}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination indicator */}
        {vehicles.length > 0 && (
          <div className="text-center mt-6 mb-2">
            <p className="text-sm text-white/50">
              Mostrando {startIndex + 1}-{Math.min(startIndex + itemsPerPage, vehicles.length)} de {vehicles.length} vehiculos
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl font-medium transition-all ${
                    currentPage === page
                      ? 'bg-[#0082F3] text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-white/30">
            Tasa de cambio referencial (Venta BCRD): 1 USD = {tasaVenta.toFixed(4)} DOP | 
            Fuente: Banco Central de la Republica Dominicana (BCRD) | 
            Datos de SuperCarros.com y CarrosRD.com
          </p>
        </div>
      </div>
    </section>
  );
}
