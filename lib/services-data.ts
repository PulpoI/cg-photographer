export interface SubService {
  name: string
  price: number
  details: string[]
}

export interface ServicePackage {
  name: string
  price: number
  features: string[]
}

export interface Service {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  subServices: {
    title: string
    packages: ServicePackage[]
  }[]
}

export const services: Record<string, Service> = {
  bodas: {
    id: 'bodas',
    title: 'Bodas',
    shortDescription: 'Capturando momentos únicos en tu día especial',
    longDescription: 'Nuestro servicio de fotografía de bodas está diseñado para capturar cada momento especial de tu gran día. Desde los preparativos hasta el último baile, estaremos allí para documentar cada emoción, cada sonrisa y cada detalle que hace único tu día.',
    subServices: [
      {
        title: 'Civil',
        packages: [
          {
            name: 'Básico',
            price: 1000,
            features: [
              '2 horas de cobertura',
              '50 fotos editadas',
              'Entrega digital'
            ]
          },
          {
            name: 'Premium',
            price: 2000,
            features: [
              '4 horas de cobertura',
              '100 fotos editadas',
              'Álbum digital',
              'Entrega en USB'
            ]
          }
        ]
      },
      {
        title: 'Ceremonia',
        packages: [
          {
            name: 'Clásico',
            price: 2500,
            features: [
              '6 horas de cobertura',
              '200 fotos editadas',
              'Sesión pre-boda',
              'Álbum digital'
            ]
          },
          {
            name: 'Lujo',
            price: 3500,
            features: [
              '8 horas de cobertura',
              '300 fotos editadas',
              'Sesión pre-boda',
              'Álbum impreso',
              'Video highlights'
            ]
          }
        ]
      }
    ]
  },
  quinceaneras: {
    id: 'quinceaneras',
    title: '15 Años',
    shortDescription: 'Celebrando tu transición a la adultez',
    longDescription: 'Nuestro servicio de fotografía para quinceañeras está diseñado para capturar la magia y la emoción de este importante hito en tu vida. Desde los preparativos hasta el último baile, estaremos allí para documentar cada momento especial.',
    subServices: [
      {
        title: 'Sesión de Fotos',
        packages: [
          {
            name: 'Básico',
            price: 800,
            features: [
              '2 horas de sesión',
              '50 fotos editadas',
              'Entrega digital'
            ]
          },
          {
            name: 'Premium',
            price: 1500,
            features: [
              '4 horas de sesión',
              '100 fotos editadas',
              'Álbum digital',
              'Entrega en USB'
            ]
          }
        ]
      },
      {
        title: 'Fiesta',
        packages: [
          {
            name: 'Clásico',
            price: 2000,
            features: [
              '6 horas de cobertura',
              '200 fotos editadas',
              'Video highlights',
              'Álbum digital'
            ]
          },
          {
            name: 'Lujo',
            price: 3000,
            features: [
              '8 horas de cobertura',
              '300 fotos editadas',
              'Video completo',
              'Álbum impreso',
              'Fotógrafo adicional'
            ]
          }
        ]
      }
    ]
  },
  infantiles: {
    id: 'infantiles',
    title: 'Infantiles',
    shortDescription: 'Capturando momentos únicos en tu infancia',
    longDescription: 'Nuestro servicio de fotografía infantil está diseñado para capturar cada momento especial de tu infancia. Desde los preparativos hasta el último baile, estaremos allí para documentar cada emoción, cada sonrisa y cada detalle que hace único tu día.',
    subServices: [
      {
        title: 'Sesión de Fotos',
        packages: [
          {
            name: 'Básico',
            price: 800,
            features: [
              '2 horas de sesión',
              '50 fotos editadas',
              'Entrega digital'
            ]
          }
        ]
      },
      {
        title: 'Fiesta',
        packages: [
          {
            name: 'Clásico',
            price: 2000,
            features: [
              '6 horas de cobertura',
              '200 fotos editadas',
              'Video highlights',
              'Álbum digital'
            ]
          }
        ]
      },
      {
        title: 'Cumpleaños',
        packages: [
          {
            name: 'Básico',
            price: 800,
            features: [
              '2 horas de sesión',
              '50 fotos editadas',
              'Entrega digital'
            ]
          }
        ]
      }
    ]
  },
  eventos: {
    id: 'eventos',
    title: 'Eventos',
    shortDescription: 'Capturando momentos únicos en tu evento',
    longDescription: 'Nuestro servicio de fotografía para eventos está diseñado para capturar cada momento especial de tu evento. Desde los preparativos hasta el último baile, estaremos allí para documentar cada emoción, cada sonrisa y cada detalle que hace único tu día.',
    subServices: [
      {
        title: 'Evento',
        packages: [
          {
            name: 'Básico',
            price: 800,
            features: [
              '2 horas de sesión',
              '50 fotos editadas',
              'Entrega digital'
            ]
          }
        ]
      }
    ]
  },
  cumpleanos: {
    id: 'cumpleanos',
    title: 'Cumpleaños',
    shortDescription: 'Capturando momentos únicos en tu cumpleaños',
    longDescription: 'Nuestro servicio de fotografía para cumpleaños está diseñado para capturar cada momento especial de tu cumpleaños. Desde los preparativos hasta el último baile, estaremos allí para documentar cada emoción, cada sonrisa y cada detalle que hace único tu día.',
    subServices: [
      {
        title: 'Cumpleaños',
        packages: [
          {
            name: 'Básico',
            price: 800,
            features: [
              '2 horas de sesión',
              '50 fotos editadas',
              'Entrega digital'
            ]
          }
        ]
      }
    ]
  },
  corporativos: {
    id: 'corporativos',
    title: 'Corporativos',
    shortDescription: 'Capturando momentos únicos en tu evento',
    longDescription: 'Nuestro servicio de fotografía para eventos está diseñado para capturar cada momento especial de tu evento. Desde los preparativos hasta el último baile, estaremos allí para documentar cada emoción, cada sonrisa y cada detalle que hace único tu día.',
    subServices: [
      {
        title: 'Evento',
        packages: [
          {
            name: 'Básico',
            price: 800,
            features: [
              '2 horas de sesión',
              '50 fotos editadas',
              'Entrega digital'
            ]
          }
        ]
      }
    ]
  }
}

