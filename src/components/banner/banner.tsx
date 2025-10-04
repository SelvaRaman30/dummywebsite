import React from "react";
import styles from './Banner.module.scss';
import { Header } from "@widgets/index";
import { mobileBanner } from "@assets/images";

interface BannerProps {
    imageurl: string;
};

const Banner: React.FC<BannerProps> = ({ imageurl }) => {
    return(
        <div className={styles.bannerWrapper}>
            <img src={imageurl}  className={`${styles.bannerImage} d-sm-none d-none d-md-block`} alt="Banner Image"/>
            <img src={mobileBanner} className={`${styles.bannerImage} d-block d-md-none`} alt="Banner Image"/>
                <Header />
        </div>
    );
};

export default Banner;