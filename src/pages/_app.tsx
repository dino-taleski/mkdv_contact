import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrolltotop/ScrollToTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styles from "@/styles/app.module.css";

import global_mk from "@/translations/mk/global.json";
import global_ger from "@/translations/ger/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
    interpolation: { escapeValue: true },
    lng: "mk",
    resources: {
        mk: {
            global: global_mk,
        },
        de: {
            global: global_ger,
        },
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className={styles.main_div}>
                <I18nextProvider i18n={i18next}>
                    <Header />
                    <Component {...pageProps} />
                    <ScrollToTop />
                    <Footer />
                </I18nextProvider>
            </div>
        </>
    );
}
