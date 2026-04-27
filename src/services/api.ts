/**
 * Cliente API para comunicarse con el backend de CarPrice Analyzer
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const FETCH_TIMEOUT = 15000; // 15 segundos

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = FETCH_TIMEOUT): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

export interface ExchangeRate {
  compra: number;
  venta: number;
  fecha: string;
  fuente: string;
}

export interface Vehicle {
  id: number;
  source: string;
  marca: string;
  modelo: string;
  submodelo: string;
  año: number;
  precio_usd: number;
  precio_dop: number;
  precio_original: number;
  moneda_original: string;
  condicion: string;
  kilometraje: number;
  transmision: string;
  combustible: string;
  color: string;
  ubicacion: string;
  vendedor: string;
  telefono: string;
  imagen_url: string;
  url_detalle: string;
  fecha_publicacion: string;
  fecha_extraccion: string;
}

export interface PriceStats {
  promedio: number;
  minimo: number;
  maximo: number;
  mediana: number;
  desviacion_estandar: number;
  cantidad: number;
  precio_promedio_dop: number;
  precio_minimo_dop: number;
  precio_maximo_dop: number;
  precio_mediana_dop: number;
  vehiculos: Vehicle[];
  tasa_cambio: ExchangeRate;
}

// Response types from API
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface ExchangeRateResponse {
  compra: number;
  venta: number;
  fecha: string;
  fuente: string;
}

interface PriceStatsResponse {
  promedio: number;
  minimo: number;
  maximo: number;
  mediana: number;
  desviacion_estandar: number;
  cantidad: number;
  precio_promedio_dop: number;
  precio_minimo_dop: number;
  precio_maximo_dop: number;
  precio_mediana_dop: number;
  vehiculos: Vehicle[];
  tasa_cambio: ExchangeRate;
}

interface VehiclesResponse {
  vehiculos: Vehicle[];
  total: number;
  tasa_cambio: ExchangeRate;
}

export interface SearchFilters {
  marca?: string;
  modelo?: string;
  submodelo?: string;
  año_desde?: number;
  año_hasta?: number;
  source?: string;
}

/**
 * Obtiene la tasa de cambio actual del BCRD
 */
export async function getExchangeRate(forceRefresh = false): Promise<ExchangeRate> {
  const url = new URL(`${API_BASE_URL}/api/tasa-cambio`);
  if (forceRefresh) url.searchParams.set('force_refresh', 'true');
  
  const response = await fetchWithTimeout(url.toString());
  if (!response.ok) throw new Error('Error obteniendo tasa de cambio');
  
  const result: ApiResponse<ExchangeRateResponse> = await response.json();
  return {
    compra: result.data.compra,
    venta: result.data.venta,
    fecha: result.data.fecha,
    fuente: result.data.fuente,
  };
}

/**
 * Calcula el precio promedio segun filtros
 */
export async function getAveragePrice(filters: SearchFilters): Promise<PriceStats> {
  const url = new URL(`${API_BASE_URL}/api/precio-promedio`);
  
  if (filters.marca) url.searchParams.set('marca', filters.marca);
  if (filters.modelo) url.searchParams.set('modelo', filters.modelo);
  if (filters.submodelo) url.searchParams.set('submodelo', filters.submodelo);
  if (filters.año_desde) url.searchParams.set('año_desde', filters.año_desde.toString());
  if (filters.año_hasta) url.searchParams.set('año_hasta', filters.año_hasta.toString());
  if (filters.source) url.searchParams.set('source', filters.source);
  
  const response = await fetchWithTimeout(url.toString());
  if (!response.ok) throw new Error('Error calculando precio promedio');
  
  const result: ApiResponse<PriceStatsResponse> = await response.json();
  return {
    promedio: result.data.promedio,
    minimo: result.data.minimo,
    maximo: result.data.maximo,
    mediana: result.data.mediana,
    desviacion_estandar: result.data.desviacion_estandar,
    cantidad: result.data.cantidad,
    precio_promedio_dop: result.data.precio_promedio_dop,
    precio_minimo_dop: result.data.precio_minimo_dop,
    precio_maximo_dop: result.data.precio_maximo_dop,
    precio_mediana_dop: result.data.precio_mediana_dop,
    vehiculos: result.data.vehiculos,
    tasa_cambio: result.data.tasa_cambio,
  };
}

/**
 * Obtiene lista de vehiculos
 */

export async function getEnrichedPrice(filters: SearchFilters): Promise<PriceStats & {
  fuentes_consultadas?: string[];
  fuentes_complementarias?: Array<{ fuente: string; tipo: string; cantidad: number; nota: string }>;
  busqueda_enriquecida?: boolean;
}> {
  const url = new URL(`${API_BASE_URL}/api/precio-enriquecido`);
  if (filters.marca) url.searchParams.set('marca', filters.marca);
  if (filters.modelo) url.searchParams.set('modelo', filters.modelo);
  if (filters.submodelo) url.searchParams.set('submodelo', filters.submodelo);
  if (filters.año_desde) url.searchParams.set('año_desde', String(filters.año_desde));
  if (filters.año_hasta) url.searchParams.set('año_hasta', String(filters.año_hasta));
  const response = await fetchWithTimeout(url.toString());
  if (!response.ok) throw new Error(`Error obteniendo precio enriquecido (${response.status})`);
  const result = await response.json();
  return result.data;
}


export async function getVehicles(
  filters: SearchFilters,
  limit = 100,
  offset = 0
): Promise<VehiclesResponse> {
  const url = new URL(`${API_BASE_URL}/api/vehiculos`);
  
  if (filters.marca) url.searchParams.set('marca', filters.marca);
  if (filters.modelo) url.searchParams.set('modelo', filters.modelo);
  if (filters.submodelo) url.searchParams.set('submodelo', filters.submodelo);
  if (filters.año_desde) url.searchParams.set('año_desde', filters.año_desde.toString());
  if (filters.año_hasta) url.searchParams.set('año_hasta', filters.año_hasta.toString());
  if (filters.source) url.searchParams.set('source', filters.source);
  
  url.searchParams.set('limit', limit.toString());
  url.searchParams.set('offset', offset.toString());
  
  const response = await fetchWithTimeout(url.toString());
  if (!response.ok) throw new Error('Error obteniendo vehiculos');
  
  const result: ApiResponse<VehiclesResponse> = await response.json();
  return {
    vehiculos: result.data.vehiculos,
    total: result.data.total,
    tasa_cambio: result.data.tasa_cambio,
  };
}

/**
 * Obtiene lista de marcas disponibles
 */
export async function getBrands(): Promise<string[]> {
  const response = await fetchWithTimeout(`${API_BASE_URL}/api/marcas`);
  if (!response.ok) throw new Error('Error obteniendo marcas');
  
  const result: ApiResponse<string[]> = await response.json();
  return result.data;
}

/**
 * Obtiene modelos para una marca
 */
export async function getModels(marca: string): Promise<string[]> {
  const response = await fetchWithTimeout(`${API_BASE_URL}/api/marcas/${encodeURIComponent(marca)}/modelos`);
  if (!response.ok) throw new Error('Error obteniendo modelos');
  
  const result: ApiResponse<string[]> = await response.json();
  return result.data;
}

/**
 * Obtiene submodelos para una marca y modelo
 */
export async function getSubmodels(marca: string, modelo: string): Promise<string[]> {
  const response = await fetchWithTimeout(
    `${API_BASE_URL}/api/marcas/${encodeURIComponent(marca)}/modelos/${encodeURIComponent(modelo)}/submodelos`
  );
  if (!response.ok) throw new Error('Error obteniendo submodelos');
  
  const result: ApiResponse<string[]> = await response.json();
  return result.data;
}

/**
 * Obtiene distribucion de precios
 */
export async function getPriceDistribution(filters: SearchFilters): Promise<Array<{
  rango: string;
  cantidad: number;
  porcentaje: number;
}>> {
  const url = new URL(`${API_BASE_URL}/api/distribucion-precios`);
  
  if (filters.marca) url.searchParams.set('marca', filters.marca);
  if (filters.modelo) url.searchParams.set('modelo', filters.modelo);
  if (filters.año_desde) url.searchParams.set('año_desde', filters.año_desde.toString());
  if (filters.año_hasta) url.searchParams.set('año_hasta', filters.año_hasta.toString());
  
  const response = await fetchWithTimeout(url.toString());
  if (!response.ok) throw new Error('Error obteniendo distribucion');
  
  const result: ApiResponse<Array<{ rango: string; cantidad: number; porcentaje: number }>> = await response.json();
  return result.data;
}

/**
 * Compara precios entre fuentes
 */
export async function compareSources(
  marca: string,
  modelo?: string,
  año?: number
): Promise<Record<string, unknown>> {
  const url = new URL(`${API_BASE_URL}/api/comparar-fuentes`);
  url.searchParams.set('marca', marca);
  if (modelo) url.searchParams.set('modelo', modelo);
  if (año) url.searchParams.set('año', año.toString());
  
  const response = await fetchWithTimeout(url.toString());
  if (!response.ok) throw new Error('Error comparando fuentes');
  
  const result: ApiResponse<Record<string, unknown>> = await response.json();
  return result.data;
}

/**
 * Obtiene rango de años disponibles
 */
export async function getYearRange(): Promise<{ minimo: number; maximo: number }> {
  const response = await fetchWithTimeout(`${API_BASE_URL}/api/rango-años`);
  if (!response.ok) throw new Error('Error obteniendo rango de años');
  
  const result: ApiResponse<{ minimo: number; maximo: number }> = await response.json();
  return result.data;
}

/**
 * Ejecuta el scraper
 */
export async function runScraper(
  fuente: string,
  marca?: string,
  modelo?: string,
  maxResultados = 50
): Promise<Record<string, unknown>> {
  const url = new URL(`${API_BASE_URL}/api/scrapear`);
  url.searchParams.set('fuente', fuente);
  if (marca) url.searchParams.set('marca', marca);
  if (modelo) url.searchParams.set('modelo', modelo);
  url.searchParams.set('max_resultados', maxResultados.toString());
  
  const response = await fetchWithTimeout(url.toString(), { method: 'POST' });
  if (!response.ok) throw new Error('Error ejecutando scraper');
  
  const result: ApiResponse<Record<string, unknown>> = await response.json();
  return result.data;
}

/**
 * Formatea precio en USD
 */
export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formatea precio en DOP
 */
export function formatDOP(amount: number): string {
  return new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency: 'DOP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formatea numero con separadores
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-DO').format(num);
}
