export default function AboutSkills() {
  const experiences = [
    {
      period: "2018 - 2019",
      role: "Wedding Photographer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condi mentum sit amet libero. Praesent vitae."
    },
    {
      period: "2019 - 2020",
      role: "Travel Videographer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condi mentum sit amet libero. Praesent vitae."
    },
    {
      period: "2020 - 2021",
      role: "Senior Editor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit, dictum ac mattis eu, condi mentum sit amet libero. Praesent vitae."
    }
  ]

  return (
    <section className="bg-zinc-900/50 py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <span className="text-amber-600">My Skills</span>
          <h2 className="mt-2 text-3xl font-bold">
            Experiences and Educations
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-8">
          {experiences.map((exp) => (
            <div key={exp.role} className="grid gap-6 md:grid-cols-[1fr,2fr,3fr]">
              <div className="text-sm text-zinc-400">{exp.period}</div>
              <div className="font-bold">{exp.role}</div>
              <div className="text-zinc-400">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

