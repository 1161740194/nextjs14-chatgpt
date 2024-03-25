import HeroNav from "@/components/hero-nav";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function PublicLayout({ children }: PropsWithChildren) {
  const { userId } = auth();
  if (userId) {
    redirect('/chat');
  }
  return (
    <div>
      <HeroNav />
      {children}
    </div>
  );
}
