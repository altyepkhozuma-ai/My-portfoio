import { BadgeCheck, Headphones, HandCoins, Leaf } from 'lucide-react'

const features = [
  {
    icon: BadgeCheck,
    title: 'منتجات معتمدة',
    text: 'نتعامل مع وكلاء رسميين فقط، وكل منتج يأتي بشهادات الجودة العالمية.',
  },
  {
    icon: HandCoins,
    title: 'تقسيط ميسّر',
    text: 'ادفع على 12 شهرًا بدون فوائد عبر شركائنا في التمويل.',
  },
  {
    icon: Headphones,
    title: 'دعم فني 24/7',
    text: 'فريق هندسي جاهز لمساعدتك في التصميم والتركيب وما بعد البيع.',
  },
  {
    icon: Leaf,
    title: 'أثر بيئي حقيقي',
    text: 'كل نظام 5 كيلوواط يقلل نحو 6 أطنان من انبعاثات الكربون سنويًا.',
  },
]

const testimonials = [
  {
    quote: 'انخفضت فاتورة الكهرباء من 1,400 إلى أقل من 400 ريال. التركيب كان سريعًا ونظيفًا.',
    name: 'عبدالله الحربي',
    place: 'الرياض',
  },
  {
    quote: 'ركّبنا مضخة شمسية للمزرعة وتخلصنا تمامًا من تكاليف الديزل. خدمة ممتازة.',
    name: 'سارة القحطاني',
    place: 'القصيم',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <h2 className="text-balance text-3xl font-bold md:text-4xl">لماذا يختارنا عملاؤنا؟</h2>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex flex-col gap-3">
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent">
              <Icon className="size-6 text-secondary" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <blockquote className="text-pretty text-lg leading-relaxed">{`"${t.quote}"`}</blockquote>
            <figcaption className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{t.name}</span> — {t.place}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
