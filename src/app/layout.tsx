import { Poppins, Anton } from "next/font/google";
import "./globals.css";

// Configura Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}

// Exporta también la fuente para uso en componentes
export { anton };
