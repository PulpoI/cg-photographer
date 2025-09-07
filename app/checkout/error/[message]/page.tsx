"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, ArrowLeft, RefreshCw, Mail } from "lucide-react";
import Link from "next/link";
import WhatsAppFloat from "@/components/shared/whatsapp-float";

interface ErrorPageProps {
  params: {
    message: string;
  };
}

export default function CheckoutErrorPage({ params }: ErrorPageProps) {
  const errorMessage = decodeURIComponent(params.message || 'Ha ocurrido un error inesperado');

  return (
    <div className="min-h-screen bg-coral-light pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 p-4 rounded-full">
                  <XCircle className="h-16 w-16 text-red-600" />
                </div>
              </div>
              <CardTitle className="text-3xl text-red-600 mb-2">
                Error al Enviar Presupuesto
              </CardTitle>
              <p className="text-gray-600 text-lg">
                No pudimos procesar tu solicitud en este momento
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  Detalles del error:
                </h3>
                <p className="text-red-700 text-sm">
                  {errorMessage}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  ¿Qué puedes hacer?
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <RefreshCw className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800">Intentar nuevamente</p>
                      <p className="text-sm text-blue-700">
                        Puedes volver al checkout e intentar enviar tu presupuesto otra vez.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800">Contacto directo</p>
                      <p className="text-sm text-blue-700">
                        Si el problema persiste, puedes contactarnos directamente por WhatsApp o email.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/checkout" className="flex-1">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Intentar Nuevamente
                  </Button>
                </Link>
                
                <Link href="/contacto" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Contactar Directamente
                  </Button>
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700">
                  <ArrowLeft className="h-4 w-4" />
                  Volver al inicio
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <WhatsAppFloat />
    </div>
  );
}
