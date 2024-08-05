import MenuComponent from "@/components/MenuComponent";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Information other",
  description: "Information other",
};

export default function InformationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MenuComponent />
      <small>Layout secundario</small>
      {children}
    </div>
  );
}
