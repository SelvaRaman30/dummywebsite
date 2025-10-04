import { qualityImag, analysisImg } from "@assets/images";
import { CardBlock } from "@components/index";
import React from "react";

const QualityManagementSection: React.FC = () => {
    const content1 = `Our experienced staff consists of expert project managers who are experienced in many different sectors and hold the PMP certification. We are by your side to implement and develop the PMP$^{\circledR}$ methodology, which is internationally valid, in your company to strengthen the areas you believe are weak in supporting the management of your projects.`;
    const content2 = `To prevent software errors in the projects we manage, we implement the tests we carry out at every stage of the project, either manually or through test automation. Our experienced team provides a customer experience that starts with high-quality testing services for institutions and ends with quality and satisfying results.`
    return(
        <div className={`container mt-5 mb-5`}>
            <CardBlock title={'Quality and Process Management'} flexDirection={'flex-row mt-5 mb-5'} cardImageUrl={qualityImag} content={content1} imgAlt='Quality Image' btnNmae="Explore"/>
            <CardBlock title={'Test Management and Analysis'} flexDirection={'flex-row-reverse mt-5 mb-5'} cardImageUrl={analysisImg} content={content2} imgAlt='Analysis Image' btnNmae="Explore" orderRow="order-2"/>
        </div>
    )
}

export default QualityManagementSection;