import React, { useState } from 'react';
import styles from './Header.module.scss';
import { List } from '@assets/icons';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={`container-fluid`}>
            <div className={`${styles.headerContainer} row d-sm-none d-none d-md-flex`}>
                <div className={`col-xxl-4 col-xl-4 col-lg-2 col-sm-6 col-md-12`}></div>
                <div className='col-xxl-8 col-xl-8 col-lg-10 col-sm-12 col-md-12'>
                    <ul className={styles.listStyle}>
                        <li><button type="button" className={styles.linkButton}>Solutions & Services</button></li>
                        <li><button type="button" className={styles.linkButton}>Products</button></li>
                        <li><button type="button" className={styles.linkButton}>Technologies</button></li>
                        <li><button type="button" className={styles.linkButton}>Human Resources</button></li>
                        <li><button type="button" className={styles.linkButton}>Corporate</button></li>
                        <li>
                            <button type="button" className={`btn btn-primary ${styles.loginBtn}`}>Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className={`${styles.headerContainer} d-flex d-md-none justify-content-between row`}>
                <img className={`${styles.mobileHumburgerMenu}`} src={List} onClick={toggleMenu} />
                <button type="button" className={`btn btn-primary ${styles.loginBtn}`}>Contact</button>
            </div>
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <button className={styles.closeBtn} onClick={closeMenu}>×</button>
                    <ul className={styles.mobileList}>
                        <li><button type="button" className={styles.linkButton}>Solutions & Services</button></li>
                        <li><button type="button" className={styles.linkButton}>Products</button></li>
                        <li><button type="button" className={styles.linkButton}>Technologies</button></li>
                        <li><button type="button" className={styles.linkButton}>Human Resources</button></li>
                        <li><button type="button" className={styles.linkButton}>Corporate</button></li>
                        <li>
                            <button type="button" className={`btn btn-primary ${styles.loginBtn}`} onClick={closeMenu}>Contact</button>
                        </li>
                    </ul>
                </div>
            )}
            <div className={`${styles.subscriberWrap} col-xxl-6 col-xl-6 col-lg-8 col-sm-12 col-md-8`}>
                <p className={`text-start fs-1 fw-bold lh-sm ${styles.headingTitle}`}>23 Years of Experience <br /> in Information Technologies</p>
                <p className={`text-start fs-5 fw-normal ${styles.subHeading}`}>We offer Project Management, Business Analysis, and Test Management services with our expert teams who have gained experience in various sectors to help our clients maintain high quality standards.</p>

                <div className={`input-group mb-3 col-4 ${styles.subscriberInputWrap}`}>
                    <input type="text" className="form-control subscribeInput" name="subscribe" placeholder="Subscribe to our newsletter" aria-label="Subscribe to our newsletter" aria-describedby="subscribe" />
                    <button className="btn btn-outline-primary" type="button" id="subscribe">Subscribe</button>
                </div>
            </div>
        </div>
    )
};

export default Header;