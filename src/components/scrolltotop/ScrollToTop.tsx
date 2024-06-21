import React from "react";
import styles from "@/components/scrolltotop/scroll.module.css";

const ScrollToTop = () => {
    const Scroll = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <i
                onClick={Scroll}
                className={`fa-solid fa-chevron-up ${styles.scroll}`}
            ></i>
        </>
    );
};

export default ScrollToTop;
