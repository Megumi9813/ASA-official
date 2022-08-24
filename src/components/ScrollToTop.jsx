import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
 
    return (
        <>
            {showTopBtn && ( 
                <button className="toTop" onClick={goToTop}>
                    <FontAwesomeIcon icon="fa-up-long" />
                </button>
            )}
        </>
    )
}

export default ScrollToTop;

