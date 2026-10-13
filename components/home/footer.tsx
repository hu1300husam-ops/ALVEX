import { brand, contact, navigation } from "@/content/site";
import { Logo } from "@/components/brand/logo";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-midnight text-porcelain">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 border-t border-white/12 px-5 py-16 sm:px-8 md:grid-cols-12 lg:px-12">
        <div className="md:col-span-5">
          <Logo tone="light" height={34} />
          <p className="mt-6 max-w-[24rem] font-display text-[22px] font-semibold leading-snug tracking-tight">
            {brand.positioning}
          </p>
          <p className="mt-3 max-w-[26rem] text-[15px] leading-[1.6] text-white/65">{brand.supportingLine}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-steel-light">Explore</p>
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="link-indicator py-1.5 text-[15px] text-white/85 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-steel-light">Contact</p>
          <ul className="space-y-3 text-[15px] text-white/85">
            <li>{contact.phone.label}</li>
            <li>
              <a href={contact.email.href} className="link-indicator">{contact.email.label}</a>
            </li>
            <li>WeChat · {contact.wechat.label}</li>
            <li>{contact.social.label}</li>
            <li className="pt-2 text-white/60">Based in China</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1320px] flex-col gap-4 border-t border-white/12 px-5 py-6 text-[13px] text-white/65 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p>© 2026 ALVEX. All rights reserved.</p>
        <p className="text-white/50">Based in China. ALVEX is not affiliated with the Canton Fair organisers.</p>
      </div>
    </footer>
  );
}
