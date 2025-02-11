export default function Stats() {
  const stats = [
    { label: "Años de Experiencia", value: "10+" },
    { label: "Coberturas de Eventos", value: "300+" },
    { label: "Books Realizados", value: "200+" }
  ]

  return (
    <div className="bg-gradient-to-r from-cocoa-dark via-stone-muted to-stone-warm">
      <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-24 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-amber-600 font-bold text-4xl">{stat.value}</div>
            <div className="text-sm text-coral-light">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

