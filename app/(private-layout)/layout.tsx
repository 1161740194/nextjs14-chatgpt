import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function PrivateLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
