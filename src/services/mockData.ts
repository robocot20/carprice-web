/**
 * Datos exportados de la base de datos SQLite real.
 * Estos datos se generaron ejecutando seed_database.py con 5000+ vehiculos.
 */

import type { Vehicle, PriceStats, ExchangeRate } from './api';

const today = new Date().toISOString().split('T')[0];
const EXCHANGE_RATE: ExchangeRate = {
  compra: 58.9769,
  venta: 59.6897,
  fecha: today,
  fuente: 'Banco Central de la Republica Dominicana (BCRD)',
};

// Estructura de marcas/modelos/submodelos exportada de la BD
let vehicleStructure: {
  marcas: string[];
  modelos_por_marca: Record<string, string[]>;
  submodelos_por_modelo: Record<string, string[]>;
  año_min: number;
  año_max: number;
} | null = null;

// Vehiculos de muestra exportados de la BD
let sampleVehicles: Vehicle[] = [];

// Cargar datos estaticos
async function loadStaticData() {
  if (vehicleStructure) return;
  
  try {
    const [structRes, vehRes] = await Promise.all([
      fetch('/vehicle_structure.json'),
      fetch('/vehicles_data.json'),
    ]);
    
    vehicleStructure = await structRes.json();
    sampleVehicles = await vehRes.json();
  } catch (e) {
    console.error('Error cargando datos estaticos:', e);
    // Fallback basico
    vehicleStructure = {
      marcas: ['Toyota', 'Honda', 'Hyundai', 'Kia', 'Nissan', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Jeep'],
      modelos_por_marca: {
        'Toyota': ['Corolla', 'RAV4', 'Hilux', 'Camry'],
        'Honda': ['Civic', 'CR-V', 'Accord'],
        'Hyundai': ['Tucson', 'Santa Fe', 'Elantra'],
        'Kia': ['Sportage', 'Sorento', 'Forte'],
        'Nissan': ['Sentra', 'Rogue', 'Frontier'],
        'Ford': ['F-150', 'Explorer', 'Escape'],
        'Chevrolet': ['Silverado', 'Equinox', 'Tahoe'],
        'BMW': ['X3', 'X5', 'Serie 3'],
        'Mercedes-Benz': ['Clase C', 'GLC', 'GLE'],
        'Jeep': ['Wrangler', 'Grand Cherokee', 'Compass'],
      },
      submodelos_por_modelo: {},
      año_min: 2010,
      año_max: 2024,
    };
    sampleVehicles = [];
  }
}

// Obtener estructura de vehiculos
async function getVehicleStructure() {
  await loadStaticData();
  return vehicleStructure!;
}

export async function mockGetExchangeRate(): Promise<ExchangeRate> {
  await delay(300);
  return { ...EXCHANGE_RATE };
}

export async function mockGetAveragePrice(filters: {
  marca?: string;
  modelo?: string;
  submodelo?: string;
  año_desde?: number;
  año_hasta?: number;
}): Promise<PriceStats> {
  await delay(500);
  
  const struct = await getVehicleStructure();
  
  // Filtrar vehiculos de muestra
  let filtered = [...sampleVehicles];
  
  if (filters.marca) {
    filtered = filtered.filter(v => v.marca.toLowerCase() === filters.marca!.toLowerCase());
  }
  if (filters.modelo) {
    filtered = filtered.filter(v => v.modelo.toLowerCase() === filters.modelo!.toLowerCase());
  }
  if (filters.submodelo) {
    filtered = filtered.filter(v => v.submodelo?.toLowerCase() === filters.submodelo!.toLowerCase());
  }
  if (filters.año_desde) {
    filtered = filtered.filter(v => v.año >= filters.año_desde!);
  }
  if (filters.año_hasta) {
    filtered = filtered.filter(v => v.año <= filters.año_hasta!);
  }
  
  // Si no hay suficientes datos de muestra, generar vehiculos sinteticos
  if (filtered.length < 10 && filters.marca) {
    filtered = generateSyntheticVehicles(
      filters.marca, 
      filters.modelo, 
      filters.submodelo,
      filters.año_desde || struct.año_min,
      filters.año_hasta || struct.año_max,
      30
    );
  }
  
  return calculateStats(filtered);
}

export async function mockGetVehicles(
  filters: {
    marca?: string;
    modelo?: string;
    submodelo?: string;
    año_desde?: number;
    año_hasta?: number;
  },
  limit = 100,
  offset = 0
): Promise<{ vehiculos: Vehicle[]; total: number; tasa_cambio: ExchangeRate }> {
  await delay(400);
  
  const struct = await getVehicleStructure();
  
  let filtered = [...sampleVehicles];
  
  if (filters.marca) {
    filtered = filtered.filter(v => v.marca.toLowerCase() === filters.marca!.toLowerCase());
  }
  if (filters.modelo) {
    filtered = filtered.filter(v => v.modelo.toLowerCase() === filters.modelo!.toLowerCase());
  }
  if (filters.submodelo) {
    filtered = filtered.filter(v => v.submodelo?.toLowerCase() === filters.submodelo!.toLowerCase());
  }
  if (filters.año_desde) {
    filtered = filtered.filter(v => v.año >= filters.año_desde!);
  }
  if (filters.año_hasta) {
    filtered = filtered.filter(v => v.año <= filters.año_hasta!);
  }
  
  // Generar vehiculos sinteticos si es necesario
  if (filtered.length < 20 && filters.marca) {
    const synthetic = generateSyntheticVehicles(
      filters.marca,
      filters.modelo,
      filters.submodelo,
      filters.año_desde || struct.año_min,
      filters.año_hasta || struct.año_max,
      50
    );
    filtered = [...filtered, ...synthetic];
  }
  
  const total = filtered.length;
  const paginated = filtered.slice(offset, offset + limit);
  
  return {
    vehiculos: paginated,
    total,
    tasa_cambio: EXCHANGE_RATE,
  };
}

export async function mockGetBrands(): Promise<string[]> {
  const struct = await getVehicleStructure();
  return struct.marcas;
}

export async function mockGetModels(marca: string): Promise<string[]> {
  const struct = await getVehicleStructure();
  return struct.modelos_por_marca[marca] || [];
}

export async function mockGetSubmodels(marca: string, modelo: string): Promise<string[]> {
  const struct = await getVehicleStructure();
  const key = `${marca}|${modelo}`;
  return struct.submodelos_por_modelo[key] || [];
}

export async function mockGetYearRange(): Promise<{ minimo: number; maximo: number }> {
  const struct = await getVehicleStructure();
  return { minimo: struct.año_min, maximo: struct.año_max };
}

// Generar vehiculos sinteticos basados en la estructura real de la BD
// Generador pseudo-aleatorio determinista (seeded)
// Dado el mismo input (marca, modelo, año) SIEMPRE genera los mismos precios
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xFFFFFFFF;
    return (s >>> 0) / 0xFFFFFFFF;
  };
}

function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) & 0xFFFFFFFF;
  }
  return hash >>> 0;
}

// Cache de vehiculos generados para evitar regenerar en cada llamada
const vehicleCache = new Map<string, Vehicle[]>();

function generateSyntheticVehicles(
  marca: string,
  modelo?: string,
  submodelo?: string,
  año_desde = 2008,
  año_hasta = 2026,
  count = 20
): Vehicle[] {
  // Clave de cache: mismos filtros = mismos resultados SIEMPRE
  const cacheKey = `${marca}|${modelo || ''}|${submodelo || ''}|${año_desde}|${año_hasta}|${count}`;
  
  if (vehicleCache.has(cacheKey)) {
    return vehicleCache.get(cacheKey)!;
  }

  const struct = vehicleStructure!;
  const modelos = struct.modelos_por_marca[marca] || ['Modelo'];
  
  // Seed basado en los parámetros de búsqueda → mismos params = mismos resultados
  const seed = hashString(cacheKey);
  const rng = seededRandom(seed);
  
  const vehicles: Vehicle[] = [];
  
  const precioBase: Record<string, [number, number]> = {
    'Toyota': [12000, 95000], 'Honda': [11000, 75000], 'Hyundai': [10000, 65000],
    'Kia': [9500, 60000], 'Nissan': [10000, 70000], 'Ford': [11000, 90000],
    'Chevrolet': [10000, 85000], 'Jeep': [15000, 110000], 'Mazda': [11000, 65000],
    'BMW': [30000, 160000], 'Mercedes-Benz': [35000, 200000], 'Audi': [28000, 150000],
    'Lexus': [28000, 130000], 'Volkswagen': [11000, 70000], 'Subaru': [12000, 60000],
    'Mitsubishi': [8500, 50000], 'Suzuki': [7500, 38000], 'Peugeot': [8500, 45000],
    'Renault': [7500, 42000], 'Dodge': [16000, 100000], 'Chrysler': [12000, 60000],
    'Cadillac': [35000, 120000], 'Lincoln': [38000, 110000], 'Porsche': [50000, 300000],
    'Tesla': [30000, 150000], 'Mini': [20000, 55000], 'Fiat': [7000, 35000],
    'Ram': [20000, 110000], 'GMC': [25000, 120000], 'BYD': [18000, 55000],
    'Chery': [8000, 35000], 'Geely': [9000, 40000], 'MG': [12000, 45000],
    'Great Wall': [10000, 45000], 'Changan': [8500, 40000], 'Jetour': [10000, 45000],
  };

  const transmisiones = ['Automatica', 'Manual', 'CVT'];
  const combustibles = ['Gasolina', 'Diesel', 'Hibrido'];
  const colores = ['Blanco', 'Negro', 'Gris', 'Plata', 'Azul', 'Rojo'];
  const ubicaciones = ['Santo Domingo', 'Santiago', 'La Romana', 'Puerto Plata', 'La Vega', 'San Cristobal'];
  
  const [min, max] = precioBase[marca] || [10000, 50000];
  
  for (let i = 0; i < count; i++) {
    const m = modelo || modelos[i % modelos.length];
    const subKey = `${marca}|${m}`;
    const subs = struct.submodelos_por_modelo[subKey] || ['Base'];
    const s = submodelo || subs[i % subs.length];
    const año = año_desde + (i % (año_hasta - año_desde + 1));
    const edad = 2026 - año;
    
    const factorDep = Math.max(0.2, 1 - edad * 0.07);
    const precio = Math.round((min + rng() * (max - min)) * factorDep);
    const km = Math.max(0, Math.round(edad * 15000 + (rng() - 0.5) * 20000));
    
    vehicles.push({
      id: 10000 + i,
      source: rng() > 0.5 ? 'supercarros' : 'carrosrd',
      marca,
      modelo: m,
      submodelo: s,
      año,
      precio_usd: precio,
      precio_dop: Math.round(precio * 59.6897 * 100) / 100,
      precio_original: precio,
      moneda_original: 'USD',
      condicion: edad <= 1 ? (rng() > 0.5 ? 'Nuevo' : 'Usado') : 'Usado',
      kilometraje: km,
      transmision: transmisiones[Math.floor(rng() * 3)],
      combustible: combustibles[Math.floor(rng() * 3)],
      color: colores[Math.floor(rng() * 6)],
      ubicacion: ubicaciones[Math.floor(rng() * ubicaciones.length)],
      vendedor: `Vendedor ${i + 1}`,
      telefono: `809-${100 + Math.floor(rng() * 899)}-${1000 + Math.floor(rng() * 8999)}`,
      imagen_url: '',
      url_detalle: '',
      fecha_publicacion: new Date(Date.now() - (30 + i * 5) * 24 * 3600 * 1000).toISOString(),
      fecha_extraccion: new Date().toISOString(),
    });
  }
  
  // Guardar en cache
  vehicleCache.set(cacheKey, vehicles);
  
  return vehicles;
}

function calculateStats(vehicles: Vehicle[]): PriceStats {
  if (vehicles.length === 0) {
    return {
      promedio: 0, minimo: 0, maximo: 0, mediana: 0,
      desviacion_estandar: 0, cantidad: 0,
      precio_promedio_dop: 0, precio_minimo_dop: 0,
      precio_maximo_dop: 0, precio_mediana_dop: 0,
      vehiculos: [], tasa_cambio: EXCHANGE_RATE,
    };
  }
  
  const precios = vehicles.map(v => v.precio_usd).sort((a, b) => a - b);
  const promedio = precios.reduce((a, b) => a + b, 0) / precios.length;
  const minimo = precios[0];
  const maximo = precios[precios.length - 1];
  const mediana = precios.length % 2 === 0
    ? (precios[Math.floor(precios.length / 2) - 1] + precios[Math.floor(precios.length / 2)]) / 2
    : precios[Math.floor(precios.length / 2)];
  
  const variance = precios.reduce((sum, p) => sum + Math.pow(p - promedio, 2), 0) / precios.length;
  
  return {
    promedio: Math.round(promedio * 100) / 100,
    minimo,
    maximo,
    mediana: Math.round(mediana * 100) / 100,
    desviacion_estandar: Math.round(Math.sqrt(variance) * 100) / 100,
    cantidad: vehicles.length,
    precio_promedio_dop: Math.round(promedio * EXCHANGE_RATE.venta * 100) / 100,
    precio_minimo_dop: Math.round(minimo * EXCHANGE_RATE.venta * 100) / 100,
    precio_maximo_dop: Math.round(maximo * EXCHANGE_RATE.venta * 100) / 100,
    precio_mediana_dop: Math.round(mediana * EXCHANGE_RATE.venta * 100) / 100,
    valor_minimo_seguro: Math.round(promedio * 0.70 * 100) / 100,
    valor_maximo_seguro: Math.round(promedio * 1.30 * 100) / 100,
    valor_minimo_seguro_dop: Math.round(promedio * 0.70 * EXCHANGE_RATE.venta * 100) / 100,
    valor_maximo_seguro_dop: Math.round(promedio * 1.30 * EXCHANGE_RATE.venta * 100) / 100,
    fuentes_consultadas: ['mock_supercarros', 'mock_carrosrd'],
    fuentes_complementarias: [],
    busqueda_enriquecida: false,
    vehiculos: vehicles,
    tasa_cambio: EXCHANGE_RATE,
  };
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
