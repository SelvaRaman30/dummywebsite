import { contactUs } from "@assets/images";
import React from "react";
import styles from './ContactuSection.module.scss';

const ContactusSection: React.FC = ({}) =>{
    return(
        <div className={`${styles.contactUsWrapper} container mt-5 mb-5 pt-5 pb-5`}>
            <div className={`row justify-content-center`}>
                <img src={contactUs} className={`${styles.img}`} width={150}/>

                <h2 className={`display-6 fw-bold`}>
                    Contact us
                </h2>

                <p className={`text-center fs-5 mt-0`}>Contact us for detailed information about our solutions, services, and products.</p>
                <button type="button" className={`btn btn-primary mt-3 btn-lg ${styles.contactBtn}`}>Contact Us</button>
            </div>
        </div>
    );
};

export default ContactusSection;