import React, { useState } from "react";
import styles from "@/components/header/header.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [isOpen, SetIsOpen] = useState(false);
    const [t, i18n] = useTranslation("global");

    const langChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    function triggerMenu() {
        SetIsOpen((open) => !open);
    }

    return (
        <>
            <div
                className={`${styles.main_header} ${
                    isOpen ? styles.margin_mobile : ""
                }`}
            >
                <div>
                    <Link href={"/"}>
                        <img
                            className={styles.logo}
                            src="/logos/mkdv_logo.svg"
                            alt="main mkdv logo"
                        />
                    </Link>
                </div>
                <div className={styles.menu_icon}>
                    <i
                        className={`fa-solid ${
                            isOpen ? "fa-xmark" : "fa-bars"
                        } icon-f `}
                        onClick={triggerMenu}
                    ></i>
                </div>
                <ul
                    className={`${styles.main_ul} ${
                        isOpen ? styles.is_open : ""
                    }`}
                >
                    <li className={styles.dropdown_main}>
                        {t("menu.aboutus")}
                        <ul className={styles.dropdown_menu}>
                            <Link href={"/koi-sme-nie.html"}>
                                <li>{t("menu.whoweare")}</li>
                            </Link>
                            <Link href={"/ogranoci.html"}>
                                <li>{t("menu.regions")}</li>
                            </Link>
                            <Link href={"/pretsedatelstvo.html"}>
                                <li>{t("menu.presidency")}</li>
                            </Link>
                            <Link href={"/timovi.html"}>
                                <li>{t("menu.teams")}</li>
                            </Link>
                        </ul>
                    </li>
                    <li className={styles.dropdown_main}>
                        {t("menu.competition")}
                        <ul className={styles.dropdown_menu}>
                            <Link href={"/akreditacii.html"}>
                                <li>{t("menu.accreditation")}</li>
                            </Link>
                            <Link href={"/testovi.html"}>
                                <li>{t("menu.tests")}</li>
                            </Link>
                            <Link href={"/rezultati.html"}>
                                <li>{t("menu.results")}</li>
                            </Link>
                        </ul>
                    </li>
                    <li className={styles.dropdown_main}>
                        {t("menu.docsandlinks")}
                        <ul className={styles.dropdown_menu}>
                            <Link href={"/dokumenti.html"}>
                                <li>{t("menu.docs")}</li>
                            </Link>
                            <Link href={"/linkovi.html"}>
                                <li>{t("menu.links")}</li>
                            </Link>
                            <Link href={"/resursi.html"}>
                                <li>{t("menu.resources")}</li>
                            </Link>
                        </ul>
                    </li>
                    <Link className={styles.contact_us} href={"/kontakt"}>
                        <li>{t("menu.contact")}</li>
                    </Link>
                    <div className={styles.flags}>
                        <li
                            onClick={() => langChange("mk")}
                            className={styles.dropdown_main}
                        >
                            <img
                                style={{ width: "25px" }}
                                src="/assets/Flag_of_North_Macedonia.png"
                                alt=""
                            />
                        </li>
                        <li
                            onClick={() => langChange("de")}
                            className={styles.dropdown_main}
                        >
                            <img
                                style={{ width: "25px" }}
                                src="/assets/Flag_of_Germany.png"
                                alt=""
                            />
                        </li>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Header;
