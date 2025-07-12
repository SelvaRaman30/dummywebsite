import React from "react";
import styles from './Banner.module.scss';

interface BannerProps {
    imageurl: string;
};

const Banner: React.FC<BannerProps> = ({ imageurl }) => {
    return(
        <div className={styles.bannerWrapper}>
            <img src={imageurl} alt="Banner Image"/>
        </div>
    );
};

export default Banner;