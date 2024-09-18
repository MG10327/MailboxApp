import { cn } from "@/lib/utils";
import { Button } from "./base";

export const SocialLinks = ({ links, className}) => {
  return(
    <div className={cn("inline-flex gap-2 items-center", className)}>
      {links.map((link, index) => (
        <Button
          key={index}
          icons={link.icon}
          href={link.url}
          color="white"
          className="pt-3" />
      ))}
    </div>
  )
}