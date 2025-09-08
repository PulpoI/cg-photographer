export interface SubService {
  name: string
  price: number
  details: string[]
}

export interface ServicePackage {
  name: string
  priceUSD: number  // Precio base en USD
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
    shortDescription: string
    longDescription: string
    characteristics: {
      title: string
      description: string
    }[]
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
        shortDescription: 'Fotos de la ceremonia civil.',
        longDescription: 'Fotos de la ceremonia civil. Se puede incluir fotos de la ceremonia civil.',
        characteristics: [
          {
            title: 'Fotos',
            description: 'Fotos de la ceremonia civil. Se puede incluir fotos de la ceremonia civil.'
          },
        ],
        packages: [
          {
            name: 'Básico',
            priceUSD: 100,
            features: [
              '2 horas de cobertura',
              '50 fotos editadas',
              'Entrega digital'
            ]
          },
          {
            name: 'Premium',
            priceUSD: 200,
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
        shortDescription: 'Fotos de la ceremonia.',
        longDescription: 'Fotos de la ceremonia. Se puede incluir fotos de la ceremonia.',
        characteristics: [
          {
            title: 'Fotos',
            description: 'Fotos de la ceremonia. Se puede incluir fotos de la ceremonia.'
          },
        ],
        packages: [
          {
            name: 'Clásico',
            priceUSD: 2500,
            features: [
              '6 horas de cobertura',
              '200 fotos editadas',
              'Sesión pre-boda',
              'Álbum digital'
            ]
          },
          {
            name: 'Lujo',
            priceUSD: 3500,
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
        shortDescription: 'Sesiones en Estudio y Exteriores. Ideal para Quinceañeras.',
        longDescription: 'Te asesoramos para que quede acorde al tipo de Fotografía que queremos lograr. Te ofrecemos 2 opciones de sesión, cada una con sus características y precios.',
        characteristics: [
          {
            title: 'Pre-producción',
            description: 'Las sesiones pueden ser tanto en estudio como en exteriores. Esto lo acordamos en una reunión de pre-producción donde nos conoceremos y conversaremos sobre los detalles de la sesión. Para que llegues confiada a la sesion charlaremos sobre tus gustos y tipos de fotos que te agradan. El make up y el vestuario son escenciales para una buena producción, te ayudaré a elegir la mejor opción.'
          },
          {
            title: 'Producción',
            description: 'Las sesiones duran aproximadamente 4 horas. El tiempo puede ser distribuido en estudio o en diferentes locaciones. La idea de la sesión es pasar una tarde agradable donde te sientas cómoda para lograr las mejores tomas y al final del dia estes contenta con el trabajo realizado.'
          }, 
          {
            title: 'Post-producción',
            description: 'Seleccionaré las mejores fotos y las editaré de manera profesional dandole mi toque personal. Te entregaré todas las fotos en alta calidad en un Pendrive para que compartas con tu familia y amigos. En todas las sesiones ofrecemos opcionalmente Fotolibros, el mas elegido es el de tamaño 20x30, tapa dura. Son un detalle hermoso ya que te queda un recuerdo con las mejores fotos elegidas por vos.'
          }
        ],
        packages: [
          {
            name: 'Clásico',
            priceUSD: 130,
            features: [
              '1 día de sesión en Estudio y/o Exterior',
              'Duración de 4 horas',
              'Cambios de vestuario',
              'Incluye Make Up',
              'Diferentes locaciones',
              'Fotos editadas en alta calidad'
            ]
          },
          {
            name: 'Dorado',
            priceUSD: 200,
            features: [
              '2 días de sesión en Estudio y/o Exterior',
              'Duración de 4 horas (por sesión)',
              'Cambios de vestuario',
              'Incluye Make Up',
              'Diferentes locaciones',
              'Fotos editadas en alta calidad'
            ]
          }
        ]
      },
      {
        title: 'Fiesta',
        shortDescription: 'Fiesta de Quinceañeras. Sesiones en Estudio y Exteriores. Ideal para Quinceañeras.',
        longDescription: 'Te asesoramos para que quede acorde al tipo de Fotografía que queremos lograr. Te ofrecemos 3 opciones de sesión, cada una con sus características y precios.',
        characteristics: [
          {
            title: 'Vestimenta',
            description: 'En Estudio lo ideal seria usar ropa con colores neutros y sin estampados cuando el fondo va con muchas decoraciones. Preferentemente me gusta utilizar ropa clásica y atemporal. En Exteriores es preferible usar ropa cómoda y recomiendo tener en cuenta los colores acorde a la locación.'
          },
        ],
        packages: [
          {
            name: 'Clásico',
            priceUSD: 200,
            features: [
              '6 horas de cobertura',
              '200 fotos editadas',
              'Video highlights',
              'Álbum digital'
            ]
          },
          {
            name: 'Lujo',
            priceUSD: 300,
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
        title: 'Sesion de Fotos',
        shortDescription: 'Sesiones en Estudio y Exteriores. Ideales para Mini Baby (3 a 6 meses) y Niños (hasta 13 años).',
        longDescription: 'Te asesoramos para que quede acorde al tipo de Fotografía que queremos lograr. Te ofrecemos 3 opciones de sesión, cada una con sus características y precios.',
        characteristics: [
          {
            title: 'Vestimenta',
            description: 'En Estudio lo ideal seria usar ropa con colores neutros y sin estampados cuando el fondo va con muchas decoraciones. Preferentemente me gusta utilizar ropa clásica y atemporal. En Exteriores es preferible usar ropa cómoda y recomiendo tener en cuenta los colores acorde a la locación.'
          },
          {
            title: 'Decoración',
            description: 'En Estudo contamos con diferentes fondos y utileria. En Exteriores podemos trasladar algunos elementos de utileria. En ambos casos pueden sumar los elementos que quieran para la sesión.'
          },
          {
            title: 'Locación',
            description: 'Siempre buscamos lugares amplios con buena luz y abundante vegetación. Los espacios verdes son ideales. La locación puede ser sugerida por el cliente o sino trabajamos en algun lugar que suelo utilizar.'
          }
        ],
        packages: [
          {
            name: 'Esencial',
            priceUSD: 30,
            features: [
              '1 hora de sesión en estudio',
              'Hasta 30 fotos editadas',
              'Entrega digital',
              'Estilo minimalista'
            ]
          },
          {
            name: 'Clásico',
            priceUSD: 50,
            features: [
              '1 hora de sesión en estudio o exterior',
              'Hasta 80 fotos editadas',
              'Entrega digital',
              'Estilo temático, fine-art o minimalista'
            ]
          },
          {
            name: 'Mágico',
            priceUSD: 80,
            features: [
              '1 hora de sesión en estudio',
              '1 hora de sesión en exterior',
              'Hasta 120 fotos editadas',
              'Entrega digital',
              'Estilo temático, fine-art o minimalista'
            ]
          }
        ]
      },
      {
        title: 'Cumpleaños',
        shortDescription: 'Fotos de la fiesta de cumpleaños del niño.',
        longDescription: 'Fotos de la fiesta de cumpleaños del niño. Se puede incluir fotos de la fiesta de cumpleaños del niño.',
        characteristics: [
          {
            title: 'Vestimenta',
            description: 'En Estudio lo ideal seria usar ropa con colores neutros y sin estampados cuando el fondo va con muchas decoraciones. Preferentemente me gusta utilizar ropa clásica y atemporal. En Exteriores es preferible usar ropa cómoda y recomiendo tener en cuenta los colores acorde a la locación.'
          },
        ],
        packages: [
          {
            name: 'Cobertura esencial',
            priceUSD: 50,
            features: [
              '1 hora de cobertura',
              'Hasta 100 fotos editadas',
              'Entrega digital',
            ]
          },
          {
            name: 'Cobertura completa',
            priceUSD: 100,
            features: [
              '3 horas de cobertura',
              'Hasta 200 fotos editadas',
              'Entrega digital',
            ]
          }
        ]
      },
      {
        title: 'Bautismo',
        shortDescription: 'Fotos de la fiesta de bautismo del niño.',
        longDescription: 'Fotos de la fiesta de bautismo del niño. Se puede incluir fotos de la fiesta de bautismo del niño.',
        characteristics: [
          {
            title: 'Vestimenta',
            description: 'En Estudio lo ideal seria usar ropa con colores neutros y sin estampados cuando el fondo va con muchas decoraciones. Preferentemente me gusta utilizar ropa clásica y atemporal. En Exteriores es preferible usar ropa cómoda y recomiendo tener en cuenta los colores acorde a la locación.'
          },
        ],
        packages: [
          {
            name: 'Cobertura de la ceremonia',
            priceUSD: 50,
            features: [
              'Cobertura de la ceremonia',
              'Hasta 100 fotos editadas',
              'Entrega digital',
            ]
          },
          {
            name: 'Cobertura completa',
            priceUSD: 110,
            features: [
              'Cobertura de la ceremonia',
              'Cobertura de la fiesta de bautismo',
              'Hasta 200 fotos editadas',
              'Entrega digital',
            ]
          }
        ]
      },
    ]
  },
  // eventos: {
  //   id: 'eventos',
  //   title: 'Eventos',
  //   shortDescription: 'Capturando momentos únicos en tu evento',
  //   longDescription: 'Nuestro servicio de fotografía para eventos está diseñado para capturar cada momento especial de tu evento. Desde los preparativos hasta el último baile, estaremos allí para documentar cada emoción, cada sonrisa y cada detalle que hace único tu día.',
  //   subServices: [
  //     {
  //       title: 'Evento',
  //       packages: [
  //         {
  //           name: 'Básico',
  //           price: 800,
  //           features: [
  //             '2 horas de sesión',
  //             '50 fotos editadas',
  //             'Entrega digital'
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // },
  cumpleanos: {
    id: 'cumpleanos',
    title: 'Cumpleaños y Fiestas',
    shortDescription: 'Capturando momentos únicos en tu cumpleaños',
    longDescription: 'Nuestro servicio de fotografía para cumpleaños está diseñado para capturar cada momento especial de tu cumpleaños. Desde los preparativos hasta el último baile, estaremos allí para documentar cada emoción, cada sonrisa y cada detalle que hace único tu día.',
    subServices: [
      {
        title: 'Cumpleaños y Fiestas',
        shortDescription: 'Fotos de cumpleaños y fiestas.',
        longDescription: 'Fotos de cumpleaños y fiestas. Se puede incluir fotos de cumpleaños y fiestas.',
        characteristics: [
          {
            title: 'Fotos',
            description: 'Fotos de cumpleaños y fiestas. Se puede incluir fotos de cumpleaños y fiestas.'
          },
        ],
        packages: [
          {
            name: 'Básico',
            priceUSD: 80,
            features: [
              '2 horas de sesión',
              '50 fotos editadas',
              'Entrega digital'
            ]
          }, 
          {
            name: 'Esencial',
            priceUSD: 80,
            features: [
              '2 horas de sesión',
              '50 fotos editadas',
              'Entrega digital'
            ]
          },
          {
            name: 'Fiesta Completa',
            priceUSD: 120,
            features: [
              '3 horas de sesión',
              '100 fotos editadas',
              'Entrega digital'
            ]
          }
        ]
      }
    ]
  },
  // corporativos: {
  //   id: 'corporativos',
  //   title: 'Corporativos',
  //   shortDescription: 'Capturando momentos únicos en tu evento',
  //   longDescription: 'Nuestro servicio de fotografía para eventos está diseñado para capturar cada momento especial de tu evento. Desde los preparativos hasta el último baile, estaremos allí para documentar cada emoción, cada sonrisa y cada detalle que hace único tu día.',
  //   subServices: [
  //     {
  //       title: 'Evento',
  //       packages: [
  //         {
  //           name: 'Básico',
  //           price: 800,
  //           features: [
  //             '2 horas de sesión',
  //             '50 fotos editadas',
  //             'Entrega digital'
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
}

