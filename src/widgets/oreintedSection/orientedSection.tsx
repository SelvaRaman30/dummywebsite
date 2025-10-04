import { acceptanceIcon, bussinessIcon, documentIcon, flowIcon, prototypingIcon, stackholderIcon } from "@assets/icons";
import React from "react";
import styles from './OreintedSection.module.scss';

const OrientedSection: React.FC = ({ }) => {
    return (
        <div className={`container mt-5 pt-5 mb-5 pb-5`}>
            <div className={`row`}>
                <h2 className={`display-6 fw-bold`}>
                    Quality and Process Management
                </h2>
                <p className={`text-center fs-5 mt-3`}>
                    In order to help our customers maintain high quality standards, we provide Project Management, Business Analysis, and Test Management services with our team of experts who have gained experience in different sectors.
                </p>
            </div>

            <div className={`row ${styles.qualityIconWrapper} mt-5`}>
                <div className={`text-center`}>
                    <img src={documentIcon} width={100} height={100} alt="Document Analysis"/>
                    <p className={`fs-5 fw-bold`}>
                        Document Analysis
                    </p>
                    <p className={`fs-5`}>
                        Conducting analysis of documents to ensure accuracy, relevance, and clarity.
                    </p>
                </div>

                <div className={`text-center`}>
                    <img src={acceptanceIcon} width={100} height={100} alt="Acceptance and Evaluation"/>
                    <p className={`fs-5 fw-bold`}>
                        Acceptance and Evaluation
                    </p>
                    <p className={`fs-5`}>
                        Reviewing and evaluating requirements, deliverables, or solutions for acceptance.
                    </p>
                </div>

                <div className={`text-center`}>
                    <img src={bussinessIcon} width={100} height={100} alt="Business Rules Analysis"/>
                    <p className={`fs-5 fw-bold`}>
                        Business Rules Analysis
                    </p>
                    <p className={`fs-5`}>
                        Identifying, analyzing, and defining the rules that guide business processes.
                    </p>
                </div>

                <div className={`text-center`}>
                    <img src={flowIcon} width={100} height={100} alt="Flow Diagrams"/>
                    <p className={`fs-5 fw-bold`}>
                        Flow Diagrams
                    </p>
                    <p className={`fs-5`}>
                        Visual representation of processes and workflows for better understanding.
                    </p>
                </div>

                <div className={`text-center`}>
                    <img src={stackholderIcon} width={100} height={100} alt="Stakeholder Analysis"/>
                    <p className={`fs-5 fw-bold`}>
                        Stakeholder Analysis
                    </p>
                    <p className={`fs-5`}>
                        Analyzing stakeholders to understand their needs, expectations, and influence.
                    </p>
                </div>

                <div className={`text-center`}>
                    <img src={prototypingIcon} width={100} height={100} alt="Prototyping"/>
                    <p className={`fs-5 fw-bold`}>
                        Prototyping
                    </p>
                    <p className={`fs-5`}>
                        Creating preliminary models or mockups to validate ideas and requirements.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default OrientedSection;