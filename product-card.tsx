'use client'

import Image from 'next/image'
import { Check, ShoppingCart, Star } from 'lucide-react'
import { formatPrice, type Product } from '@/lib/products'
import { useCart } from './cart-context'

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="size-4 fill-primary text-primary" aria-hidden="true" />
          <span>{product.rating}</span>
          <span className="sr-only">من 5</span>
        </div>
        <h3 className="text-pretty text-lg font-semibold leading-snug">{product.name}</h3>
        <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2">
              <Check className="size-4 text-primary" aria-hidden="true" />
              {spec}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-4">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                <span className="sr-only">السعر السابق: </span>
                {formatPrice(product.oldPrice)}
              </span>
            )}
            <span className="text-xl font-bold">{formatPrice(product.price)}</span>
          </div>
          <button
            type="button"
            onClick={() => add(product.id)}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ShoppingCart className="size-4" aria-hidden="true" />
            أضف للسلة
          </button>
        </div>
      </div>
    </article>
  )
}
