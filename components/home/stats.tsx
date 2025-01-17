export default function Stats() {
  const stats = [
    { label: "Años de Experiencia", value: "10+" },
    { label: "Coberturas de Eventos", value: "300+" },
    { label: "Books Realizados", value: "200+" }
  ]

  return (
    <div className="border-t border-b border-zinc-800 bg-zinc-900/50">
      <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-amber-600">{stat.value}</div>
            <div className="text-sm text-zinc-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

