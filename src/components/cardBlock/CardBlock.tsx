import React from 'react';
import styles from './CardBlock.module.scss';

interface cardBlockProps {
    title: string;
    cardImageUrl: string;
    flexDirection: string;
    content: string;
    imgAlt: string;
    btnNmae: string;
    redirectBtnUrl?: string;
    orderRow?: string;
}

const CardBlock: React.FC<cardBlockProps> = ({ title, cardImageUrl, flexDirection = 'flex-row', content, imgAlt, btnNmae,  redirectBtnUrl, orderRow = 'order-0' }) => {
    return (
        <div className='row'>
            <div className={`${flexDirection} ${styles.cardWrapper}  align-content-center`}>
                <div className={`${orderRow} ${styles.mobileOrderCard} d-flex w-100 flex-column text-start flex-wrap justify-content-between align-content-start flex-grow-1 flex-shrink-1 py-1`}>
                    <h2 className={`display-6 fw-bold mb-4`}>{title}</h2>
                    <p className={`fs-5`}>{content}</p>

                    <button type="button" className={`btn btn-primary mt-5 btn-lg ${styles.cardBlockBtn}`}>{btnNmae}</button>
                </div>

                <div className={`flex-grow-1 w-100 flex-shrink-1`}>
                    <img className={`w-100 ${styles.imgHeight}`} src={cardImageUrl} alt={imgAlt} />
                </div>
            </div>
        </div>
    )
};

export default CardBlock;