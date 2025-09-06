"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import WhatsAppFloat from "@/components/shared/whatsapp-float";

export default function CheckoutSuccessPage() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-coral-light pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-3xl text-green-600 mb-2">
                ¡Presupuesto Enviado!
              </CardTitle>
              <p className="text-gray-600 text-lg">
                Tu solicitud ha sido recibida correctamente
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  ¿Qué sigue ahora?
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Email de confirmación</p>
                      <p className="text-sm text-green-700">
                        Hemos enviado un email de confirmación a tu correo electrónico con todos los detalles de tu solicitud.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Respuesta rápida</p>
                      <p className="text-sm text-green-700">
                        Nos pondremos en contacto contigo dentro de las próximas 24 horas con tu presupuesto detallado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  💡 Mientras tanto...
                </h3>
                <p className="text-blue-700 text-sm mb-4">
                  Puedes explorar más de nuestros servicios o conocer más sobre nuestro trabajo.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/#servicios">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Ver Más Servicios
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Ver Portfolio
                    </Button>
                  </Link>
                  <Link href="/sobre-mi">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Conocer Más
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700">
                    <ArrowLeft className="h-4 w-4" />
                    Volver al inicio
                  </Link>
                  
                  <div className="text-sm text-gray-500">
                    Serás redirigido automáticamente en {countdown} segundos
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <WhatsAppFloat />
    </div>
  );
}
