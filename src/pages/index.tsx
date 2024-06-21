import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Head>
                <title>MDKV | Дома</title>
                <meta name="description" content="MKDV" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main>
                {/* main banner */}
                <div className={styles.main_banner_div}>
                    <div className={styles.main_banner_text}>
                        <p className={styles.main_banner_para}>
                            „Sprache verbindet, Kultur bereichert – gemeinsam
                            für Deutsch!“
                        </p>
                        <p className={styles.main_banner_para}>
                            „Јазикот поврзува, културата збогатува - заедно за
                            германски!“
                        </p>
                        <p className={styles.main_banner_subtitle}>
                            {t("banner.text")}
                        </p>
                        <div className={styles.main_banner_button_div}>
                            <Link
                                target="_blank"
                                href={
                                    "https://docs.google.com/forms/d/e/1FAIpQLSdqk4dgbFh1yxfAlohwN5JXUW_JsgM5BF7zX2ktL8tYKeRvEw/viewform"
                                }
                            >
                                <button className={styles.main_banner_button}>
                                    {t("banner.button")}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* main blurb */}
                <div className={styles.main_blurb}>
                    <p className={styles.heading}>{t("home.redheading")}</p>
                    <p className={styles.paragraph}>{t("home.redtext")}</p>
                    <Link className={styles.blurb_link} href={"/koi-sme-nie"}>
                        <p>{t("home.homelink")}</p>
                    </Link>
                </div>
                {/* secondary banner */}
                <div className={styles.sec_banner}></div>
                {/* carousel */}
                <div className={styles.carousel}>
                    <div
                        id="carouselExampleRide"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div
                            className={`carousel-inner ${styles.carousel_inner_mob}`}
                        >
                            <div className="carousel-item active">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann1.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann1.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann1.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="./carousel/caro_2.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/getvico24.html"
                                            }
                                        >
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann1.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann2.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann2.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann2.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="/images/carousel_img1.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/ido2024.html"
                                            }
                                        >
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann2.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann3.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann3.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann3.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="/carousel/caro_5.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/idt2025.html"
                                            }
                                        >
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann3.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann4.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann4.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann4.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="/carousel/caro_3.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/drzavna-olimpijada-2024.html"
                                            }
                                        >
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann4.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann5.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann5.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann5.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="/carousel/caro_4.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/regionalen-natprevar-po-germanski-jazik-2024.html"
                                            }
                                        >
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann5.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann6.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann6.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann6.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="/carousel/caro_6.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/konkurs-za-izbor-na-izraboten-strip.html"
                                            }
                                        >
                                            {" "}
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann6.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann7.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann7.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann7.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="/carousel/caro_9.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/14ti-kongres-na-nastavnici-po-germanski-jazik-vo-bih.html"
                                            }
                                        >
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann7.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann8.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann8.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann8.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="/carousel/caro_8.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/panel-diskusija-skopje.html"
                                            }
                                        >
                                            {" "}
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann8.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann9.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann9.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann9.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="/carousel/caro_10.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/drzavna-olimpijada-po-germanski-jazik-za-osnovno-obrazovanie-2023.html"
                                            }
                                        >
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann9.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={styles.carousel_inner_div}>
                                    <div className={styles.carousel_text}>
                                        <p className={styles.carousel_date}>
                                            {t("ann.ann10.date")}
                                        </p>
                                        <p className={styles.carousel_title}>
                                            {t("ann.ann10.title")}
                                        </p>
                                        <p
                                            className={
                                                styles.carousel_paragraph
                                            }
                                        >
                                            {t("ann.ann10.para1")}
                                        </p>
                                    </div>
                                    <div className={styles.carousel_img}>
                                        <img
                                            style={{
                                                width: "400px",
                                                borderRadius: "50px",
                                            }}
                                            src="/carousel/caro_7.png"
                                            alt="carousel image 1"
                                        />
                                        <Link
                                            href={
                                                "https://www.mkdv.mk/nastani/bozikjen-panagjur-vo-bitola.html"
                                            }
                                        >
                                            <button
                                                className={
                                                    styles.carousel_img_button
                                                }
                                            >
                                                {t("ann.ann10.btn")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <button
                                className={`carousel-control-prev ${styles.prev_btn}`}
                                type="button"
                                data-bs-target="#carouselExampleRide"
                                data-bs-slide="prev"
                            >
                                <span
                                    className={`carousel-control-prev-icon ${styles.prev_icon_btn}`}
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className={`carousel-control-next ${styles.next_btn}`}
                                type="button"
                                data-bs-target="#carouselExampleRide"
                                data-bs-slide="next"
                            >
                                <span
                                    className={`carousel-control-next-icon ${styles.next_icon_btn}`}
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className={styles.announcement}>
                        <h1 style={{ color: "var(--beige-main)" }}>
                            {t("events.heading")}
                        </h1>
                    </div>
                </div>
                {/* president section */}
                <div className={styles.president_sec}>
                    <p className={styles.president_heading}>
                        {t("pressec.presheading")}
                    </p>
                    <p className={styles.president_blurb}>
                        {t("pressec.presblurb1")}
                        <br />
                        <br />
                        {t("pressec.presblurb2")}
                    </p>
                    <div className={styles.president_img}>
                        <img
                            className={styles.pres_img}
                            style={{ width: "250px" }}
                            src="./members_imgs/gabi.png"
                            alt="gabriela temelkoska pretsedatel na MKDV"
                        />
                        <div className={styles.member_div}>
                            <p className={styles.member_name}>
                                {t("pressec.presname")}
                            </p>
                            <p className={styles.member_title}>
                                {t("pressec.prestitle")}
                            </p>
                        </div>
                    </div>
                </div>
                {/* members */}
                <div className={styles.members_sec}>
                    <span className={styles.line}></span>
                    <p className={styles.members_heading}>
                        {t("memberssec.membersheading")}
                    </p>
                    <p className={styles.members_blurb}>
                        {t("memberssec.membersblurb1")}
                        <br className={styles.break} />
                        {t("memberssec.membersblurb11")}
                    </p>
                    <p className={styles.members_blurb}>
                        {t("memberssec.membersblurb2")}
                        <br className={styles.break} />{" "}
                        {t("memberssec.membersblurb22")}
                    </p>

                    <div>
                        <Link
                            target="_blank"
                            href={
                                "https://docs.google.com/forms/d/e/1FAIpQLSdqk4dgbFh1yxfAlohwN5JXUW_JsgM5BF7zX2ktL8tYKeRvEw/viewform"
                            }
                        >
                            <button className={styles.members_button}>
                                {t("memberssec.membersbtn")}
                            </button>
                        </Link>
                    </div>
                </div>
                {/* partners */}
                <div className={styles.partners_sec}>
                    <p className={styles.partners_heading}>
                        {" "}
                        {t("partnerssec.partnersheading")}
                    </p>
                    <div className={styles.partners_logos}>
                        <Link
                            target="_blank"
                            style={{ width: "300px" }}
                            href={"https://www.goethe.de/ins/mk/mk/index.html"}
                        >
                            <img
                                style={{ width: "100%" }}
                                src="/partners_logos/gi_logo.png"
                                alt="goethe institut logo"
                            />
                        </Link>
                        <Link
                            target="_blank"
                            style={{ width: "300px" }}
                            href={"https://skopje.diplo.de/"}
                        >
                            <img
                                style={{ width: "100%" }}
                                src="./partners_logos/gerambasada_logo.png"
                                alt="logo na germanska ambasada"
                            />
                        </Link>
                        <Link
                            target="_blank"
                            style={{ width: "300px" }}
                            href={"https://idvnetz.org/"}
                        >
                            <img
                                style={{ width: "100%" }}
                                src="./partners_logos/idv_logo.png"
                                alt="idv logo"
                            />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
