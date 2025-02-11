export default function AboutHero() {
  return (
    <section className="flex h-screen items-center justify-center bg-zinc-900/50">
      <div className="container px-4 text-center">
        <div className="space-y-4">
          <div className="flex justify-center space-x-2 text-sm ">
            <span>Home</span>
            <span>/</span>
            <span className="text-amber-600">About</span>
          </div>
          <h1 className="text-4xl font-bold md:text-6xl">About Me</h1>
        </div>
      </div>
    </section>
  )
}

