import { SiteHeader } from '@/components/store/site-header'
import { Hero } from '@/components/store/hero'
import { ProductsSection } from '@/components/store/products-section'
import { SavingsCalculator } from '@/components/store/savings-calculator'
import { WhyUs } from '@/components/store/why-us'
import { SiteFooter } from '@/components/store/site-footer'
import { CartDrawer } from '@/components/store/cart-drawer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductsSection />
        <SavingsCalculator />
        <WhyUs />
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
