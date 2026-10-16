'use client'

import { useState } from 'react'
import { categories, products, type Category } from '@/lib/products'
import { ProductCard } from './product-card'
import { cn } from '@/lib/utils'

export function ProductsSection() {
  const [active, setActive] = useState<Category | 'all'>('all')
  const visible = active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-primary-foreground/70">
          <span className="rounded bg-accent px-2 py-0.5">متجرنا</span>
        </p>
        <h2 className="text-balance text-3xl font-bold md:text-4xl">كل ما تحتاجه لنظامك الشمسي</h2>
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          اختر من تشكيلة مختارة بعناية من المنتجات المعتمدة، وكلها مدعومة بضمان رسمي ودعم فني بعد البيع.
        </p>
      </div>

      <div role="tablist" aria-label="تصنيفات المنتجات" className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === cat.id
                ? 'border-secondary bg-secondary text-secondary-foreground'
                : 'border-border bg-card text-muted-foreground hover:text-foreground',
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}
