"use client";

import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PriceDisplay from "@/components/shared/price-display";
import { Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const { items, removeItem, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar formulario
    if (!formData.nombre || !formData.email) {
      const errorMsg = encodeURIComponent("Por favor completa los campos requeridos");
      window.location.href = `/checkout/error/${errorMsg}`;
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar presupuesto a Brevo
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          items: items,
          total: total
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el presupuesto');
      }

      // Limpiar carrito después del envío
      clearCart();
      
      // Redirigir a página de éxito
      window.location.href = "/checkout/success";
    } catch (error: any) {
      // Redirigir a página de error con el mensaje
      const errorMsg = encodeURIComponent(error.message || "Error al enviar el presupuesto");
      window.location.href = `/checkout/error/${errorMsg}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-coral-light pt-20">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl text-cocoa-dark">
                Carrito Vacío
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                No tienes servicios en tu carrito
              </p>
              <Link href="/#servicios">
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Ver Servicios
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-coral-light pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-cocoa-dark">
            Solicitar Presupuesto
          </h1>
          <p className="text-gray-600 mt-2">
            Revisa tus servicios seleccionados y completa tus datos
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Lado izquierdo - Servicios del carrito */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Servicios Seleccionados
                  <span className="text-sm font-normal text-gray-600">
                    {items.length} {items.length === 1 ? 'servicio' : 'servicios'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.serviceId}-${item.subServiceTitle}-${item.name}`} 
                       className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-cocoa-dark">
                          {item.subServiceTitle} - {item.name}
                        </h4>
                        <Link 
                          href={`/servicios/${item.serviceId}#${encodeURIComponent(item.subServiceTitle.toLowerCase().replace(/\s+/g, '-'))}`}
                          className="text-amber-600 hover:text-amber-700"
                          title="Ver servicio"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.serviceTitle}
                      </p>
                      <div className="text-lg font-bold text-amber-600">
                        <PriceDisplay priceUSD={item.priceUSD} />
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(`${item.serviceId}-${item.subServiceTitle}-${item.name}`)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                {/* Total */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-cocoa-dark">
                      Total:
                    </span>
                    <span className="text-xl font-bold text-amber-600">
                      <PriceDisplay priceUSD={total} />
                    </span>
                  </div>
                </div>

                {/* Botón para ver más servicios */}
                <div className="pt-4">
                  <Link href="/#servicios">
                    <Button variant="outline" className="w-full">
                      Ver Más Servicios
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lado derecho - Formulario */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      placeholder="+54 9 11 1234-5678"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje adicional</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange('mensaje', e.target.value)}
                      placeholder="Cuéntanos más detalles sobre tu evento o necesidades especiales..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Solicitar Presupuesto'
                      )}
                    </Button>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => clearCart()}
                      disabled={isSubmitting}
                    >
                      Vaciar Carrito
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
