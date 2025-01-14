import { MapPin, Clock, Share2 } from 'lucide-react'

export default function ContactInfo() {
  const infoCards = [
    {
      icon: MapPin,
      title: "Dirección",
      content: [
        "123 Calle Principal",
        "Ciudad, Estado 12345"
      ]
    },
    {
      icon: Clock,
      title: "Horario",
      content: [
        "Lun - Vie: 9:00 - 18:00",
        "Sáb - Dom: 10:00 - 15:00"
      ]
    },
    {
      icon: Share2,
      title: "Redes Sociales",
      content: ["@fotografo"]
    }
  ]

  return (
    <div className="space-y-6">
      {infoCards.map((card) => (
        <div
          key={card.title}
          className="border border-zinc-800 p-6 transition-colors hover:border-amber-600"
        >
          <div className="flex items-center gap-4">
            <card.icon className="h-6 w-6 text-amber-600" />
            <h3 className="text-lg font-bold">{card.title}</h3>
          </div>
          <div className="mt-4 space-y-1">
            {card.content.map((line) => (
              <p key={line} className="text-zinc-400">{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

