import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-2xl font-bold">
              LOGO
            </Link>
            <p className="mt-4 text-zinc-400">
              Professional photography services for all your needs. Capturing moments, creating memories.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Get In Touch</h3>
            <p className="text-zinc-400">123 Photo Street</p>
            <p className="text-zinc-400">City, State 12345</p>
            <div className="mt-4 flex space-x-4">
              <Facebook className="h-5 w-5 text-zinc-400 hover:text-white" />
              <Twitter className="h-5 w-5 text-zinc-400 hover:text-white" />
              <Instagram className="h-5 w-5 text-zinc-400 hover:text-white" />
              <Youtube className="h-5 w-5 text-zinc-400 hover:text-white" />
              <Linkedin className="h-5 w-5 text-zinc-400 hover:text-white" />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
          <p>© 2024 Photography Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

