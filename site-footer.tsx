import { Mail, MapPin, Phone, Sun } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sun className="size-5" aria-hidden="true" />
            </span>
            شمس
          </div>
          <p className="max-w-xs leading-relaxed text-secondary-foreground/70">
            شريكك الموثوق في التحول إلى الطاقة الشمسية للمنازل والمزارع والمنشآت التجارية.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">تواصل معنا</h2>
          <ul className="flex flex-col gap-3 text-secondary-foreground/80">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" aria-hidden="true" />
              <a href="tel:+966500000000" dir="ltr">+966 50 000 0000</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              <a href="mailto:info@shams.store">info@shams.store</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              الرياض، المملكة العربية السعودية
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold">احصل على استشارة مجانية</h2>
          <p className="text-secondary-foreground/70">
            اتصل بنا أو راسلنا وسيتواصل معك مهندس متخصص خلال 24 ساعة لتصميم النظام المناسب لك.
          </p>
          <a
            href="tel:+966500000000"
            className="mt-2 inline-flex h-11 w-fit items-center rounded-lg bg-primary px-5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            اطلب استشارة
          </a>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-secondary-foreground/60">
          © 2026 شمس للطاقة الشمسية. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}
