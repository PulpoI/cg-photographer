import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <div className="group relative border border-zinc-800 p-6 transition-colors hover:border-amber-600">
      <div className="mb-4">
        <Icon className="h-6 w-6 text-amber-600" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="mb-4 text-sm ">{description}</p>
      <Link 
        href={href}
        className="text-sm text-amber-600 hover:text-amber-500"
      >
        Leer Más →
      </Link>
    </div>
  )
}

