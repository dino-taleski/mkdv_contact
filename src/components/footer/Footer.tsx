import React from "react";
import styles from "@/components/footer/footer.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Footer = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className={styles.footer_main_div}>
                <div className={styles.footer_inner_div}>
                    <div className={styles.footer_left}>
                        <p className={styles.footer_heading}>
                            {t("footer.footerheading")}
                        </p>
                        <img
                            className={styles.footer_logo}
                            src="/logos/mkdv_sec_logo.png"
                            alt="mkdv secondary logo"
                        />
                        <div className={styles.footer_address}>
                            <p>
                                {t("footer.footeraddress1")} <br />
                                {t("footer.footeraddress2")}
                                <br />
                                {t("footer.footeraddress3")}
                            </p>
                        </div>
                        <div className={styles.footer_contact_links}>
                            <Link
                                className={styles.footer_cont_links}
                                href={"/kontakt/"}
                            >
                                <p>{t("footer.footerlinks2")}</p>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footer_right}>
                        <div>
                            <p className={styles.links_heading}>
                                {t("footer.quicklinks")}
                            </p>
                            <ul className={styles.ql_ul}>
                                <Link
                                    className={styles.quick_links}
                                    href={
                                        "https://docs.google.com/forms/d/e/1FAIpQLSdqk4dgbFh1yxfAlohwN5JXUW_JsgM5BF7zX2ktL8tYKeRvEw/viewform"
                                    }
                                >
                                    <li>{t("footer.ql1")}</li>
                                </Link>
                                <Link
                                    className={styles.quick_links}
                                    href={
                                        "https://www.mkdv.mk/koi-sme-nie.html"
                                    }
                                >
                                    <li>{t("footer.ql2")}</li>
                                </Link>
                                <Link
                                    className={styles.quick_links}
                                    href={"https://www.mkdv.mk/ogranoci.html"}
                                >
                                    <li>{t("footer.ql3")}</li>
                                </Link>
                                <Link
                                    className={styles.quick_links}
                                    href={
                                        "https://www.mkdv.mk/pretsedatelstvo.html"
                                    }
                                >
                                    <li>{t("footer.ql4")}</li>
                                </Link>
                                <Link
                                    className={styles.quick_links}
                                    href={"https://www.mkdv.mk/timovi.html"}
                                >
                                    <li>{t("footer.ql5")}</li>
                                </Link>
                                <Link
                                    className={styles.quick_links}
                                    href={
                                        "https://www.mkdv.mk/akreditacii.html"
                                    }
                                >
                                    <li>{t("footer.ql6")}</li>
                                </Link>
                                <Link
                                    className={styles.quick_links}
                                    href={"https://www.mkdv.mk/testovi.html"}
                                >
                                    <li>{t("footer.ql7")}</li>
                                </Link>
                                <Link
                                    className={styles.quick_links}
                                    href={"https://www.mkdv.mk/rezultati.html"}
                                >
                                    <li>{t("footer.ql8")}</li>
                                </Link>
                            </ul>
                        </div>
                        <div className={styles.icons_div}>
                            <Link
                                target="_blank"
                                href={
                                    "https://www.facebook.com/mazedonischer.deutschlehrerverband"
                                }
                            >
                                <i
                                    className={`fa-brands fa-facebook-f ${styles.icons}`}
                                ></i>
                            </Link>

                            <i
                                className={`fa-brands fa-linkedin-in ${styles.icons}`}
                            ></i>
                            <Link href={"mailto:dlvmak@yahoo.de"}>
                                <i
                                    className={`fa-solid fa-envelope ${styles.icons}`}
                                ></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_credits}>
                    <p className={styles.copyright}>
                        <span className={styles.copysign}>&copy;</span>{" "}
                        {t("footer.copyright")}
                    </p>
                    <span className={styles.breaker}> | </span>
                    <Link
                        target="_blank"
                        className={styles.kd}
                        href={"https://kdgroup.mk/"}
                    >
                        <span>Powered by KD Group</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
