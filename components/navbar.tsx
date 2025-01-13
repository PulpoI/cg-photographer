import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            LOGO
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Home
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              About
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Portfolio
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <Button variant="outline" className="border-zinc-700 text-zinc-400 hover:text-white">
          Get Started
        </Button>
      </div>
    </nav>
  )
}

