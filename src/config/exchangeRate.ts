// Tasa de cambio oficial del Banco Central de la República Dominicana (BCRD)
// Fuente: https://www.bancentral.gov.do/
// Actualizado: 17 de Abril 2026
// Tasa de VENTA del dólar según BCRD

export const EXCHANGE_RATE = {
  // Tasa de compra del BCRD (17/04/2026)
  compra: 58.9769,
  // Tasa de venta del BCRD (17/04/2026)
  venta: 59.6897,
  // Tasa de venta usada para cálculos (precio de venta oficial BCRD)
  promedio: 59.6897,
  // Fecha de la tasa
  fecha: '25 de Abril 2026',
  // Fuente
  fuente: 'Banco Central de la República Dominicana (BCRD)',
};

// Función para convertir USD a DOP
export function usdToDop(usdAmount: number): number {
  return Math.round(usdAmount * EXCHANGE_RATE.promedio);
}

// Función para formatear precio en DOP
export function formatDOP(amount: number): string {
  return new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency: 'DOP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Función para formatear precio en USD
export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Función para formatear número con separadores de miles
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-DO').format(num);
}
