import { NextRequest, NextResponse } from 'next/server';

// Cache en memoria para el precio del dólar
let cachedExchangeRate: number | null = null;
let lastUpdated: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos en milisegundos

// Función para obtener el precio del dólar desde la variable de entorno
function getExchangeRateFromEnv(): number {
  const rate = process.env.EXCHANGE_RATE_USD_TO_ARS;
  if (!rate) {
    console.warn('EXCHANGE_RATE_USD_TO_ARS no está configurado, usando valor por defecto');
    return 1300;
  }
  
  const parsedRate = parseInt(rate);
  if (isNaN(parsedRate) || parsedRate <= 0) {
    console.warn('EXCHANGE_RATE_USD_TO_ARS tiene un valor inválido, usando valor por defecto');
    return 1300;
  }
  
  return parsedRate;
}

// Función para obtener el precio del dólar (con cache)
function getExchangeRate(): number {
  const now = Date.now();
  
  // Si no hay cache o el cache expiró, actualizar
  if (!cachedExchangeRate || !lastUpdated || (now - lastUpdated) > CACHE_DURATION) {
    cachedExchangeRate = getExchangeRateFromEnv();
    lastUpdated = now;
  }
  
  return cachedExchangeRate;
}

// Función para invalidar el cache
function invalidateCache(): void {
  cachedExchangeRate = null;
  lastUpdated = null;
  console.log('🔄 Cache del precio del dólar invalidado');
}

// GET: Obtener el precio actual del dólar
export async function GET() {
  try {
    const rate = getExchangeRate();
    
    return NextResponse.json({
      success: true,
      data: {
        usdToArs: rate,
        lastUpdated: lastUpdated,
        formatted: `US$1 = $${rate.toLocaleString('es-AR')} ARS`
      }
    });
  } catch (error) {
    console.error('Error al obtener el precio del dólar:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST: Actualizar el precio del dólar (solo en desarrollo o con autenticación)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { newRate, forceUpdate } = body;
    
    // Validar que el nuevo precio sea válido
    if (!newRate || isNaN(newRate) || newRate <= 0) {
      return NextResponse.json(
        { success: false, error: 'El precio debe ser un número positivo' },
        { status: 400 }
      );
    }
    
    // En producción, aquí deberías verificar autenticación
    // Por ahora, solo permitimos en desarrollo
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { success: false, error: 'Actualización manual no permitida en producción' },
        { status: 403 }
      );
    }
    
    // Actualizar el cache
    cachedExchangeRate = parseInt(newRate);
    lastUpdated = Date.now();
    
    console.log(`💰 Precio del dólar actualizado manualmente: $${cachedExchangeRate} ARS`);
    
    return NextResponse.json({
      success: true,
      data: {
        usdToArs: cachedExchangeRate,
        lastUpdated: lastUpdated,
        formatted: `US$1 = $${cachedExchangeRate.toLocaleString('es-AR')} ARS`,
        message: 'Precio actualizado exitosamente'
      }
    });
  } catch (error) {
    console.error('Error al actualizar el precio del dólar:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT: Invalidar cache y forzar recarga desde variable de entorno
export async function PUT() {
  try {
    invalidateCache();
    const rate = getExchangeRate();
    
    return NextResponse.json({
      success: true,
      data: {
        usdToArs: rate,
        lastUpdated: lastUpdated,
        formatted: `US$1 = $${rate.toLocaleString('es-AR')} ARS`,
        message: 'Cache invalidado y precio recargado desde variable de entorno'
      }
    });
  } catch (error) {
    console.error('Error al invalidar cache:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
