import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
    const [data, setData] = useState();
    return (
        <div className={`container-fluid`}>
            <div className={`${styles.headerContainer} row`}>
                <div className={`col-xxl-4 col-xl-4 col-lg-4 col-sm-6 col-md-12`}></div>
                <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-12 col-md-12'>
                    <ul className={styles.listStyle}>
                        <li><a href="#">Solutions & Services</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Human Resources</a></li>
                        <li><a href="#">Corporate</a></li>
                        <li>
                            <button type="button" className="btn btn-primary loginBtn">Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.subscriberWrap} col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-md-6`}>
                <p className='text-start fs-1 fw-bold lh-sm'>23 Years of Experience <br /> in Information Technologies</p>
                <p className='text-start fs-5 fw-normal'>We offer Project Management, Business Analysis, and Test Management services with our expert teams who have gained experience in various sectors to help our clients maintain high quality standards.</p>

                <div className={`input-group mb-3 col-4 ${styles.subscriberInputWrap}`}>
                    <input type="text" className="form-control" name="subscribe" placeholder="Subscribe to our newsletter" aria-label="Subscribe to our newsletter" aria-describedby="subscribe" />
                    <button className="btn btn-outline-primary" type="button" id="subscribe">Subscribe</button>
                </div>
            </div>
        </div>
    )
};

export default Header;