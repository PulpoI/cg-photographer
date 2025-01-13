import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutLinks() {
  const links = [
    {
      title: "Our Portfolio",
      href: "/portfolio",
      buttonText: "Portfolio",
      size: "large"
    },
    {
      title: "Our Blog",
      href: "/blog",
      buttonText: "My Blog",
      size: "small"
    },
    {
      title: "Contact",
      href: "/contact",
      buttonText: "Contact",
      size: "small"
    }
  ]

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[3/4]">
            <Image
              src="/placeholder.svg"
              alt="Portfolio preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid gap-6">
            {links.map((link) => (
              <div
                key={link.title}
                className="flex flex-col justify-between border border-zinc-800 p-6"
              >
                <h3 className="text-2xl font-bold">{link.title}</h3>
                <Button
                  asChild
                  className="mt-4 bg-amber-600 hover:bg-amber-700"
                >
                  <Link href={link.href}>{link.buttonText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

