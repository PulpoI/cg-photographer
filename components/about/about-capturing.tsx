import Image from 'next/image'

export default function AboutCapturing() {
  const stats = [
    { value: '210+', label: 'Completed Projects' },
    { value: '350+', label: 'Happy Client' },
    { value: '1200+', label: 'Photos Delivered' },
    { value: '45+', label: 'Active Clients' },
  ]

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/5] w-full">
              <Image
                src="/placeholder.svg"
                alt="Photographer"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent" />
          </div>
          <div className="space-y-8">
            <div>
              <span className="text-amber-600">About Jason</span>
              <h2 className="mt-2 text-3xl font-bold">
                Capturing memories through images
              </h2>
            </div>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum 
              ac mattis eu, condi mentum sit amet libero. Praesent vitae Donec ullam 
              corper enim pellentesque est tempus ornare.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
                  <div className="text-sm ">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

