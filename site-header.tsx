'use client'

import { useState } from 'react'
import { Menu, ShoppingCart, Sun, X } from 'lucide-react'
import { useCart } from './cart-context'

const links = [
  { href: '#products', label: 'المنتجات' },
  { href: '#calculator', label: 'حاسبة التوفير' },
  { href: '#why-us', label: 'لماذا نحن' },
  { href: '#contact', label: 'تواصل معنا' },
]

export function SiteHeader() {
  const { count, setOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sun className="size-5" aria-hidden="true" />
          </span>
          شمس
        </a>

        <nav aria-label="القائمة الرئيسية" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative flex size-10 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:bg-muted"
            aria-label={`سلة التسوق، ${count} منتجات`}
          >
            <ShoppingCart className="size-5" aria-hidden="true" />
            {count > 0 && (
              <span className="absolute -top-1.5 -left-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-lg border border-border bg-card md:hidden"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="قائمة الجوال" className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
