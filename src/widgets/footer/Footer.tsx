import React from "react";
import styles from './Footer.module.scss';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer: React.FC = () => {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerColumn}>
                    <h5>Solutions and Services</h5>
                    <ul>
                        <li>Software Development</li>
                        <li>Outsourcing</li>
                        <li>Quality and Process Management</li>
                        <li>Consultancy</li>
                        <li>IoT Supported Solutions</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h5>Products</h5>
                    <ul>
                        <li>Education Management System</li>
                        <li>Human Capital/Resources Management System</li>
                        <li>Customer Relationship Management System</li>
                        <li>Content Management System</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h5>Corporate</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Documents and Competencies</li>
                        <li>Business Partners</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h5>Contact</h5>
                    <ul>
                        <li>Information Request Form</li>
                        <li>Expert Request Form</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <span>© Copyright 2010-2021</span>
                <div className={styles.socialIcons}>
                    <FaLinkedinIn />
                    <FaTwitter />
                    <FaInstagram />
                    <FaFacebookF />
                </div>
            </div>
        </div>
    )
};

export default Footer;
