'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/lib/products'
import { useCart } from './cart-context'

export function CartDrawer() {
  const { lines, subtotal, isOpen, setOpen, updateQuantity, remove } = useCart()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cart-title"
      onClose={() => setOpen(false)}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false)
      }}
      className="m-0 ms-auto h-dvh max-h-dvh w-full max-w-md bg-transparent p-0 backdrop:bg-secondary/60 backdrop:backdrop-blur-sm"
    >
      <div className="flex h-full flex-col bg-background text-foreground">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 id="cart-title" className="text-lg font-bold">
            سلة التسوق
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex size-9 items-center justify-center rounded-lg hover:bg-muted"
            aria-label="إغلاق السلة"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <ShoppingBag className="size-12 text-muted-foreground" aria-hidden="true" />
            <p className="font-medium">سلتك فارغة</p>
            <p className="text-sm text-muted-foreground">أضف بعض المنتجات لتبدأ رحلتك نحو الطاقة النظيفة.</p>
          </div>
        ) : (
          <>
            <ul className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
              {lines.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image src={product.image} alt="" fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <p className="text-sm font-semibold leading-snug">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-border">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="flex size-8 items-center justify-center hover:bg-muted"
                          aria-label={`زيادة كمية ${product.name}`}
                        >
                          <Plus className="size-3.5" aria-hidden="true" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium" aria-live="polite">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="flex size-8 items-center justify-center hover:bg-muted"
                          aria-label={`تقليل كمية ${product.name}`}
                        >
                          <Minus className="size-3.5" aria-hidden="true" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        className="flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                        aria-label={`حذف ${product.name}`}
                      >
                        <Trash2 className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 border-t border-border p-5">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">المجموع الفرعي</span>
                <span className="text-xl font-bold">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground">الشحن والتركيب يُحسبان عند تأكيد الطلب.</p>
              <a
                href="tel:+966500000000"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                إتمام الطلب
              </a>
            </div>
          </>
        )}
      </div>
    </dialog>
  )
}
