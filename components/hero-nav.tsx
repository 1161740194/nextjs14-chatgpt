import Link from "next/link";
import { NamedLogoWithLink } from "./logo";
import { buttonVariants } from "./ui/button";
import ToggleTheme from "./toggle";
import { UserButton } from "@clerk/nextjs";

export default function HeroNav() {
  return (
    <nav className="w-full flex flex-row items-center justify-between h-24 mb-7 top-0 sticky bg-background">
      <NamedLogoWithLink />
      <div className="flex flex-row items-center">
        <ToggleTheme />
        <UserButton />
      </div>
    </nav>
  );
}
