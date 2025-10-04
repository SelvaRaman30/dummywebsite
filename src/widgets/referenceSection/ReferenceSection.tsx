import React from "react";
import styles from './ReferenceSection.module.scss';
import { Akbank, Akcansa, Aktas, Amazon, BookMyShow, Borusan, Istanbul, Ola, Tumunugor } from '../../assets/logos';

const ReferenceSection: React.FC = () => {
    return(
        <div className={`mt-5 mb-5 pt-5 pb-5 ${styles.wrapper}`}>
            <h2 className={`display-6 fw-bold`}>
                Our References
            </h2>
            <p className={`text-center fs-5 mt-3`}>Our business partners who trust and work with us</p>

            <div className={`${styles.gridContainer} mt-5 mb-5`}>
                <div className={`${styles.logoCard} ${styles.borusan}`}>
                    <img src={Borusan} alt="Borusan" />
                </div>
                <div className={`${styles.logoCard} ${styles.istanbul}`}>
                    <img src={Istanbul} alt="Istanbul" />
                </div>
                <div className={`${styles.logoCard} ${styles.bookMyShow}`}>
                    <img src={BookMyShow} alt="BookMyShow" />
                </div>
                <div className={`${styles.logoCard} ${styles.akbank}`}>
                    <img src={Akbank} alt="Akbank" />
                </div>
                <div className={`${styles.logoCard} ${styles.akcansa}`}>
                    <img src={Akcansa} alt="Akcansa" />
                </div>
                <div className={`${styles.logoCard} ${styles.aktas}`}>
                    <img src={Aktas} alt="Aktas" />
                </div>
                <div className={`${styles.logoCard} ${styles.ola}`}>
                    <img src={Ola} alt="Ola" />
                </div>
                <div className={`${styles.logoCard} ${styles.amazon}`}>
                    <img src={Amazon} alt="Amazon" />
                </div>
                <div className={`${styles.logoCard} ${styles.tumunugor}`}>
                    <img src={Tumunugor} alt="Tumunugor" />
                </div>
            </div>
        </div>
    )
};

export default ReferenceSection;