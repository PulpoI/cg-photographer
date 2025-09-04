"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  asunto?: string;
  mensaje?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido";
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = "El asunto es requerido";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }

      setSubmitStatus({
        type: 'success',
        message: result.message || '¡Mensaje enviado correctamente! Te contactaremos pronto.',
      });

      // Limpiar formulario después del éxito
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });

    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="bg-gradient-to-r from-cocoa-dark via-stone-muted to-stone-warm py-32"
    >
      <div className="container mx-auto px-4" data-aos="fade-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="700">
        <h2 className="mb-12 text-3xl font-bold text-coral-light">
          Ponte en Contacto
        </h2>
        <div className="grid gap-12 md:grid-cols-[1fr,2fr]">
          <div className="space-y-8 text-coral-light">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="font-bold">Dirección</h3>
                <p className="">Av. Arenales 131, 6</p>
                <p className="">Chacabuco, Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="font-bold">Teléfono</h3>
                <p className="">+53 9 2352 505048</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="">camilagonzalezfotografia@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {submitStatus.type && (
              <Alert className={`${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <AlertDescription>
                  {submitStatus.message}
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Input
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    className={`bg-coral-light border-zinc-700 ${
                      errors.nombre ? 'border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`bg-coral-light border-zinc-700 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Input
                  placeholder="Asunto"
                  value={formData.asunto}
                  onChange={(e) => handleInputChange('asunto', e.target.value)}
                  className={`bg-coral-light border-zinc-700 ${
                    errors.asunto ? 'border-red-500' : ''
                  }`}
                  disabled={isSubmitting}
                />
                {errors.asunto && (
                  <p className="text-red-400 text-sm mt-1">{errors.asunto}</p>
                )}
              </div>
              
              <div>
                <Textarea
                  placeholder="Tu mensaje"
                  value={formData.mensaje}
                  onChange={(e) => handleInputChange('mensaje', e.target.value)}
                  className={`bg-coral-light border-zinc-700 min-h-[120px] ${
                    errors.mensaje ? 'border-red-500' : ''
                  }`}
                  disabled={isSubmitting}
                />
                {errors.mensaje && (
                  <p className="text-red-400 text-sm mt-1">{errors.mensaje}</p>
                )}
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
