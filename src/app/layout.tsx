import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/styles/globals.css";
import { ThemeProvider } from "@/src/components/ui/Providers/ThemeProvider";
import Header from "../ui/Header";
 // Ajusta tu ruta si es necesario

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mabel Galindo Núñez",
  description: "Creado con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning previene errores de parpadeo de hidratación en SSR
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
            <div className="md:p-6 p-4">
              {children}
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}