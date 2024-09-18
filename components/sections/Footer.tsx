/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { SocialLinks } from "../SocialLinks"
import { cn } from "@/lib/utils"

export function footer ({copyright, logo, links, social, ...rest}) {
return (
  <footer className="bg-base-100 dark:bg-base-900 pt-6">
    <div className="container pt-4 mx-auto">
      <div className={cn("flex flex-col md:flex-row justify-between items-center")}>
      <img
        src="/logo.png"
        alt="logo"
        className="h-10 w-auto opacity-70 hover:opacity-100 dark:invert"
      />
      </div>
      <div className="flex flex-row gap-4 text-sm">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>{link.label}</Link>
        ))}
      </div>
        <SocialLinks links={social} />
    </div>
    <div className="border-t border-base py-4 text-center flex justify-between">
        <p className="text-sm"></p>
        <a href="">Themed By Marcus Graham</a>
    </div>
  </footer>
)
}