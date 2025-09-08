"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Calendar, Info } from "lucide-react";

export default function ServiceDisclaimer() {
  // Calcular la fecha de vencimiento (30 días desde hoy)
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 30);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="border-2 border-coral bg-coral-light/30 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-cocoa-dark mb-2">
              💡 ¿Te interesa este servicio?
            </h3>
            
            <div className="space-y-3 text-sm text-stone-muted">
              <p>
                <strong className="text-cocoa-dark">Agrega los paquetes que te gusten al carrito</strong> y solicita un presupuesto personalizado. 
                Es completamente <strong className="text-coral">gratuito y sin compromiso</strong>.
              </p>
              
              <div className="flex items-center gap-2 text-stone-muted">
                <Calendar className="h-4 w-4" />
                <span>
                  <strong className="text-cocoa-dark">Presupuesto válido por 30 días</strong> - 
                  hasta el {formatDate(expirationDate)}
                </span>
              </div>
              
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-cocoa-light mt-0.5 flex-shrink-0" />
                <p>
                  Recibirás un presupuesto detallado con todas las opciones disponibles. 
                  Si no contratas el servicio dentro del plazo, el presupuesto perderá validez.
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white rounded-lg border border-coral/20">
              <p className="text-xs text-stone-muted text-center">
                <strong className="text-cocoa-dark">¡No pierdas la oportunidad!</strong> Agrega tus servicios favoritos y obtén un presupuesto personalizado en menos de 24 horas.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
