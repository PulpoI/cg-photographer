interface PageHeroProps {
  title: string
  breadcrumb: string
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  const breadcrumbItems = breadcrumb.split(' / ')

  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-900/50 pt-16">
      <div className="container px-4 text-center">
        <div className="space-y-4">
          <div className="flex justify-center space-x-2 text-sm ">
            <span>Inicio</span>
            {breadcrumbItems.map((item, index) => (
              <span key={item}>
                <span>/</span>
                <span className={index === breadcrumbItems.length - 1 ? "text-amber-600" : ""}>{item}</span>
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-white md:text-6xl">{title}</h1>
        </div>
      </div>
    </section>
  )
}

