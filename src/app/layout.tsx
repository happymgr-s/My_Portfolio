import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MY PORTFOLIO",
  description: "俺のポートフォリオだ！！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="p-24 h-auto ">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
