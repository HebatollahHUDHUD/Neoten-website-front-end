import type { Metadata } from "next";
import "../globals.css";
import AOSInit from "@/components/AOSInit";
import { Toaster } from "react-hot-toast";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { FontProvider } from "@/providers/font";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export async function generateMetadata() {
const t = await getTranslations();
const metadata: Metadata = {
  title: t("title"),
  description: t("description"),
  icons: {
      icon: "/Logo.svg",
    },
};
return metadata;
}

export default async function RootLayout({
 children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <AOSInit />
      <FontProvider>
            <NextIntlClientProvider>
              <div
              className={locale === "ar" ? "GE-Dinar" : "Poppins"}
              >
              <NavBar />
              <Header />
                {children}
                <WhatsAppButton />
                <Footer />
                <Toaster position="top-right" reverseOrder={false} />
              </div>
            </NextIntlClientProvider>
      </FontProvider>
    </html>
  );
}
