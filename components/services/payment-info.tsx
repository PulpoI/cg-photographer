import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Calendar, Clock, MessageCircle } from "lucide-react";

export default function PaymentInfo() {
  return (
    <section className="py-16 bg-coral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cocoa-dark mb-4">
              Formas de Pago
            </h2>
            <p className="text-lg text-stone-muted max-w-2xl mx-auto">
              Ofrecemos opciones flexibles para que puedas disfrutar de nuestros servicios 
              de la manera que mejor se adapte a tu presupuesto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Pago al contado */}
            <Card className="border-2 border-coral bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-coral-light rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-coral" />
                </div>
                <CardTitle className="text-cocoa-dark">Corto Plazo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-coral font-semibold text-lg mb-2">
                  Sin intereses
                </p>
                <p className="text-stone-muted">
                  Paga el servicio completo en <strong>2 meses</strong> sin intereses adicionales.
                </p>
              </CardContent>
            </Card>

            {/* Pago en cuotas */}
            <Card className="border-2 border-stone-warm bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-stone-warm/20 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-stone-warm" />
                </div>
                <CardTitle className="text-cocoa-dark">Pago en Cuotas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-stone-warm font-semibold text-lg mb-2">
                  Hasta 12 meses
                </p>
                <p className="text-stone-muted">
                  Distribuye el pago en cuotas mensuales para mayor comodidad.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Información detallada */}
          <Card className="border-2 border-cocoa-light bg-white shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-cocoa-light" />
                <CardTitle className="text-cocoa-dark">Condiciones Importantes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-coral-light/30 p-4 rounded-lg border border-coral/20">
                  <h4 className="font-semibold text-cocoa-dark mb-2">
                    🎯 Período sin intereses
                  </h4>
                  <p className="text-stone-muted">
                    Si pagas el servicio completo dentro de los <strong>2 meses</strong> de contratado, no tendrás intereses adicionales.
                  </p>
                </div>

                <div className="bg-stone-warm/20 p-4 rounded-lg border border-stone-warm/30">
                  <h4 className="font-semibold text-cocoa-dark mb-2">
                    📅 Opciones de financiación
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white rounded border border-stone-warm/20">
                      <p className="font-semibold text-cocoa-dark">6 meses</p>
                      <p className="text-sm text-stone-muted">25% de interés</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded border border-stone-warm/20">
                      <p className="font-semibold text-cocoa-dark">12 meses</p>
                      <p className="text-sm text-stone-muted">40% de interés</p>
                    </div>
                  </div>
                </div>

                <div className="bg-cocoa-light/10 p-4 rounded-lg border border-cocoa-light/20">
                  <h4 className="font-semibold text-cocoa-dark mb-2">
                    💬 Consulta personalizada
                  </h4>
                  <p className="text-stone-muted">
                    Si necesitas una opción de pago diferente, podemos analizarla juntos 
                    y encontrar la mejor solución para tu situación particular.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-stone-muted mb-4">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">¿Tienes dudas sobre las formas de pago?</span>
            </div>
            <p className="text-stone-muted">
              Contáctanos y te explicaremos todas las opciones disponibles para tu servicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
