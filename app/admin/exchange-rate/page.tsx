"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RefreshCw, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ExchangeRateData {
  usdToArs: number;
  lastUpdated: number;
  formatted: string;
}

export default function ExchangeRateAdmin() {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateData | null>(null);
  const [newRate, setNewRate] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Cargar el precio actual del dólar
  const fetchExchangeRate = async () => {
    try {
      const response = await fetch('/api/exchange-rate');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setExchangeRate(data.data);
          setNewRate(data.data.usdToArs.toString());
        }
      }
    } catch (error) {
      console.error('Error al cargar el precio del dólar:', error);
      setMessage({ type: 'error', text: 'Error al cargar el precio del dólar' });
    }
  };

  // Actualizar el precio del dólar
  const updateExchangeRate = async () => {
    if (!newRate || isNaN(Number(newRate)) || Number(newRate) <= 0) {
      setMessage({ type: 'error', text: 'Por favor ingresa un precio válido' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/exchange-rate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newRate: Number(newRate) }),
      });

      const data = await response.json();

      if (data.success) {
        setExchangeRate(data.data);
        setMessage({ type: 'success', text: 'Precio del dólar actualizado exitosamente' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Error al actualizar el precio' });
      }
    } catch (error) {
      console.error('Error al actualizar el precio:', error);
      setMessage({ type: 'error', text: 'Error de conexión' });
    } finally {
      setLoading(false);
    }
  };

  // Refrescar desde variable de entorno
  const refreshFromEnv = async () => {
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/exchange-rate', {
        method: 'PUT',
      });

      const data = await response.json();

      if (data.success) {
        setExchangeRate(data.data);
        setNewRate(data.data.usdToArs.toString());
        setMessage({ type: 'success', text: 'Precio recargado desde variable de entorno' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Error al recargar el precio' });
      }
    } catch (error) {
      console.error('Error al recargar el precio:', error);
      setMessage({ type: 'error', text: 'Error de conexión' });
    } finally {
      setLoading(false);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    fetchExchangeRate();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cocoa-dark mb-2">
            Administración de Precio del Dólar
          </h1>
          <p className="text-stone-muted">
            Gestiona el precio del dólar para la conversión de precios
          </p>
        </div>

        {/* Precio actual */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-coral" />
              Precio Actual del Dólar
            </CardTitle>
          </CardHeader>
          <CardContent>
            {exchangeRate ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral mb-2">
                    ${exchangeRate.usdToArs.toLocaleString('es-AR')} ARS
                  </div>
                  <p className="text-sm text-stone-muted">
                    {exchangeRate.formatted}
                  </p>
                  <p className="text-xs text-stone-muted mt-2">
                    Última actualización: {new Date(exchangeRate.lastUpdated).toLocaleString('es-AR')}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-stone-muted">
                Cargando precio actual...
              </div>
            )}
          </CardContent>
        </Card>

        {/* Actualizar precio */}
        <Card>
          <CardHeader>
            <CardTitle>Actualizar Precio del Dólar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="newRate">Nuevo Precio (ARS)</Label>
                <Input
                  id="newRate"
                  type="number"
                  value={newRate}
                  onChange={(e) => setNewRate(e.target.value)}
                  placeholder="Ej: 1430"
                  min="1"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={updateExchangeRate}
                  disabled={loading || !newRate}
                  className="flex-1 bg-coral hover:bg-coral-dark"
                >
                  {loading ? 'Actualizando...' : 'Actualizar Precio'}
                </Button>
                
                <Button
                  onClick={refreshFromEnv}
                  disabled={loading}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  Recargar desde .env
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mensajes */}
        {message && (
          <Alert className={message.type === 'success' ? 'border-green-500' : 'border-red-500'}>
            <div className="flex items-center gap-2">
              {message.type === 'success' ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-500" />
              )}
              <AlertDescription>
                {message.text}
              </AlertDescription>
            </div>
          </Alert>
        )}

        {/* Información adicional */}
        <Card>
          <CardHeader>
            <CardTitle>Información</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-stone-muted">
              <p>• El precio se actualiza automáticamente cada 5 minutos desde la variable de entorno</p>
              <p>• Los cambios manuales solo son válidos hasta la próxima recarga automática</p>
              <p>• Para cambios permanentes, actualiza la variable <code className="bg-stone-100 px-1 rounded">EXCHANGE_RATE_USD_TO_ARS</code> en Vercel</p>
              <p>• El cache se invalida automáticamente cuando cambias la variable de entorno</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
