'use client'

import { useId, useState } from 'react'
import { formatPrice } from '@/lib/products'

const TARIFF_PER_KWH = 0.18
const PEAK_SUN_HOURS = 5.5
const PANEL_WATTS = 550
const COST_PER_KW = 3200

export function SavingsCalculator() {
  const [bill, setBill] = useState(800)
  const id = useId()

  const monthlyKwh = bill / TARIFF_PER_KWH
  const systemKw = Math.max(1, Math.round((monthlyKwh / 30 / PEAK_SUN_HOURS) * 10) / 10)
  const panels = Math.ceil((systemKw * 1000) / PANEL_WATTS)
  const yearlySaving = bill * 12 * 0.7
  const systemCost = systemKw * COST_PER_KW
  const paybackYears = Math.max(1, Math.round((systemCost / yearlySaving) * 10) / 10)

  const results = [
    { label: 'حجم النظام المقترح', value: `${systemKw} كيلوواط` },
    { label: 'عدد الألواح (550 واط)', value: `${panels} لوح` },
    { label: 'التوفير السنوي المتوقع', value: formatPrice(yearlySaving) },
    { label: 'فترة استرداد التكلفة', value: `${paybackYears} سنوات` },
  ]

  return (
    <section id="calculator" className="scroll-mt-20 bg-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">كم ستوفّر مع الطاقة الشمسية؟</h2>
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            أدخل متوسط فاتورة الكهرباء الشهرية لتحصل على تقدير فوري لحجم النظام المناسب لك ومقدار التوفير المتوقع.
          </p>

          <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <label htmlFor={id} className="font-medium">
                الفاتورة الشهرية
              </label>
              <output htmlFor={id} className="text-xl font-bold">
                {formatPrice(bill)}
              </output>
            </div>
            <input
              id={id}
              type="range"
              min={200}
              max={5000}
              step={50}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full accent-[var(--primary)]"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatPrice(200)}</span>
              <span>{formatPrice(5000)}</span>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-4" aria-live="polite">
          {results.map((r, i) => (
            <div
              key={r.label}
              className={
                i === 2
                  ? 'flex flex-col gap-2 rounded-2xl bg-secondary p-6 text-secondary-foreground'
                  : 'flex flex-col gap-2 rounded-2xl border border-border bg-card p-6'
              }
            >
              <dt className={i === 2 ? 'text-sm text-secondary-foreground/70' : 'text-sm text-muted-foreground'}>
                {r.label}
              </dt>
              <dd className={i === 2 ? 'text-2xl font-bold text-primary' : 'text-2xl font-bold'}>{r.value}</dd>
            </div>
          ))}
          <p className="col-span-2 text-xs text-muted-foreground">
            * تقديرات تقريبية. يحدد مهندسونا التصميم النهائي بعد معاينة الموقع.
          </p>
        </dl>
      </div>
    </section>
  )
}
