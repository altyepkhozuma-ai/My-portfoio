'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { products, type Product } from '@/lib/products'

type CartLine = { product: Product; quantity: number }

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  isOpen: boolean
  setOpen: (open: boolean) => void
  add: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  remove: (id: string) => void
}

const MAX_QUANTITY = 50

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({})
  const [isOpen, setOpen] = useState(false)

  const add = useCallback((id: string) => {
    setItems((prev) => ({ ...prev, [id]: Math.min((prev[id] ?? 0) + 1, MAX_QUANTITY) }))
    setOpen(true)
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) => {
      const next = { ...prev }
      if (quantity <= 0) delete next[id]
      else next[id] = Math.min(quantity, MAX_QUANTITY)
      return next
    })
  }, [])

  const remove = useCallback((id: string) => {
    setItems((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  const value = useMemo<CartContextValue>(() => {
    const lines = Object.entries(items).flatMap(([id, quantity]) => {
      const product = products.find((p) => p.id === id)
      return product ? [{ product, quantity }] : []
    })
    return {
      lines,
      count: lines.reduce((sum, l) => sum + l.quantity, 0),
      subtotal: lines.reduce((sum, l) => sum + l.quantity * l.product.price, 0),
      isOpen,
      setOpen,
      add,
      updateQuantity,
      remove,
    }
  }, [items, isOpen, add, updateQuantity, remove])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
