import { NextPage } from "next";
import React, { FormEvent, useState } from "react";
import styles from "@/styles/Kontakt.module.css";
import { useTranslation } from "react-i18next";

const Kontakt: NextPage = () => {
    const [name, SetName] = useState("");
    const [surName, SetSurName] = useState("");
    const [email, SetEmail] = useState("");
    const [message, SetMessage] = useState("");

    const [t, i18n] = useTranslation("global");

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    surName,
                    email,
                    message,
                }),
                headers: {
                    "content-type": "application/json",
                },
            });
        } catch (error) {
            console.error(error);
        }

        SetName("");
        SetSurName("");
        SetEmail("");
        SetMessage("");
    };

    return (
        <>
            <div className={styles.main_div}>
                <div>
                    <p className={styles.contact_heading}>
                        {t("contact.contformh")}
                    </p>
                    <p>
                        <i>{t("contact.contob")}</i>
                    </p>
                    <form
                        onSubmit={onSubmit}
                        className={styles.contact_form}
                        action=""
                    >
                        <label htmlFor="name">Име*</label>
                        <input
                            value={name}
                            onChange={(e) => SetName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            placeholder={t("contact.contname")}
                            required
                        />

                        <label htmlFor="surname">Презме*</label>
                        <input
                            value={surName}
                            onChange={(e) => SetSurName(e.target.value)}
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder={t("contact.contsurname")}
                            required
                        />

                        <label htmlFor="email">Е-пошта*</label>
                        <input
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            placeholder={t("contact.contemail")}
                            required
                        />

                        <label htmlFor="message">Порака*</label>
                        <textarea
                            value={message}
                            onChange={(e) => SetMessage(e.target.value)}
                            name="message"
                            id="message"
                            placeholder={t("contact.contmessage")}
                            rows={10}
                            required
                        ></textarea>
                        <button className={styles.form_button} type="submit">
                            {t("contact.contbtn")}
                        </button>
                    </form>
                </div>
                <div className={styles.address_div}>
                    <p className={styles.contact_heading}>
                        {t("contact.continfoh")}
                    </p>

                    <p className={styles.mkdv}>{t("contact.contmkdv")}</p>

                    <div>
                        <p className={styles.hq}>{t("contact.conthq")}</p>
                        <p className={styles.hq_address}>
                            {t("contact.contad1")} <br /> {t("contact.contad2")}
                            <br /> {t("contact.contad3")}
                        </p>
                    </div>

                    <div className={styles.hq_div}>
                        <p className={styles.hq}>{t("contact.contem")}</p>
                        <p>{t("contact.contem1")}</p>
                        <p>{t("contact.contem2")}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kontakt;
