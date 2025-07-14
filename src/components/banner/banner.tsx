import React from "react";
import styles from './Banner.module.scss';
import { Header } from "@widgets/index";

interface BannerProps {
    imageurl: string;
};

const Banner: React.FC<BannerProps> = ({ imageurl }) => {
    return(
        <div className={styles.bannerWrapper}>
            <img src={imageurl}  className={styles.bannerImage} alt="Banner Image"/>
                <Header />
        </div>
    );
};

export default Banner;