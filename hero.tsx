import Image from 'next/image'
import { ArrowLeft, ShieldCheck, Truck, Wrench } from 'lucide-react'

const stats = [
  { value: '+12,000', label: 'منزل ومنشأة' },
  { value: '25 سنة', label: 'ضمان الألواح' },
  { value: '70%', label: 'توفير في الفاتورة' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-secondary via-secondary/85 to-secondary/30" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:py-28">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="w-fit rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-sm font-medium text-primary">
            تركيب مجاني للطلبات فوق 10,000 ر.س
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl md:leading-tight">
            طاقة نظيفة من الشمس، <span className="text-primary">وفاتورة أقل</span> كل شهر
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-secondary-foreground/80">
            ألواح شمسية وانفرترات وبطاريات من أفضل العلامات العالمية، مع استشارة فنية مجانية وتركيب احترافي على يد مهندسين معتمدين.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              تسوّق الآن
              <ArrowLeft className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#calculator"
              className="inline-flex h-12 items-center rounded-lg border border-secondary-foreground/25 px-6 font-semibold transition-colors hover:bg-secondary-foreground/10"
            >
              احسب توفيرك
            </a>
          </div>
        </div>

        <dl className="grid max-w-xl grid-cols-3 gap-4 border-t border-secondary-foreground/15 pt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="text-sm text-secondary-foreground/70">{stat.label}</dt>
              <dd className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative border-t border-secondary-foreground/10 bg-secondary/80">
        <ul className="mx-auto grid max-w-6xl gap-4 px-4 py-5 text-sm sm:grid-cols-3">
          <li className="flex items-center gap-3">
            <Truck className="size-5 text-primary" aria-hidden="true" />
            توصيل لجميع المدن
          </li>
          <li className="flex items-center gap-3">
            <Wrench className="size-5 text-primary" aria-hidden="true" />
            تركيب وصيانة معتمدة
          </li>
          <li className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
            منتجات أصلية بضمان رسمي
          </li>
        </ul>
      </div>
    </section>
  )
}
