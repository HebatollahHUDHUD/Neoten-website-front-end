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
import { QueryProvider } from "@/providers/query";
import { SearchParamsProvider } from "@/providers/search-params";
import { cookies } from "next/headers";
import { createHeaders } from "@/lib/createHeaders";
import { Info } from "@/schemas/shared";
import { getData } from "@/lib/request-server";

export async function generateMetadata() {
  const cookieStore = await cookies();
  const headers = createHeaders(cookieStore);
  const res = await getData<Info>({ endpoint: "/info", config: { headers } });
  const t = await getTranslations();

  const info = res.status === "success" ? res.result : null;

  const metadata: Metadata = {
    title: info?.website_name || t("title"),
    description: info?.website_desc || t("description"),
    openGraph: {
      title: info?.website_name || t("title"),
      description: info?.website_desc || t("description"),
    },

    icons: {
      icon: info?.website_favicon || "/images/Logo Icon.png",
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
        <QueryProvider>
          <SearchParamsProvider>
            <NextIntlClientProvider>
              <div className={locale === "ar" ? "GE-Dinar" : "Poppins"}>
                <NavBar />
                <Header />
                {children}
                <WhatsAppButton />
                <Footer />
                <Toaster position="top-right" reverseOrder={false} />
              </div>
            </NextIntlClientProvider>
          </SearchParamsProvider>
        </QueryProvider>
      </FontProvider>
    </html>
  );
}
