import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Neuromorphose® — La méthode",
    template: "%s · Neuromorphose®",
  },
  description:
    "La Neuromorphose® est une méthode d'accompagnement qui utilise la visualisation géométrique pour aider l'humain à transformer son rapport au passé, au présent et au futur. Site officiel de la méthode.",
  metadataBase: new URL("https://neuromorphose.com"),
  openGraph: {
    title: "Neuromorphose® — La méthode",
    description:
      "Une méthode d'accompagnement qui transforme la visualisation classique en futurisation : projection structurée de soi vers l'état souhaité.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
