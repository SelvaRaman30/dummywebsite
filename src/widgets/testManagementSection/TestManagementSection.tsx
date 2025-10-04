import React from "react";
import styles from "./TestManagementSection.module.scss";

const TestManagementSection: React.FC = () => {
    return (
        <section className={`mt-5 ${styles.managementSection} py-5 `}>
            <div className={`container`}>
                <h2 className={`display-6 fw-bold`}>
                    What Do We Provide with Test Management?
                    <p className={`fs-6 m-0 fw-light mt-2`}>IoT-Enabled Solutions</p>
                </h2>
                <div className={`row ${styles.managementSubHeading}`}>
                    <p className={`text-start position-relative fw-semibold ps-5 ${styles.subContent}`}>We Improve Software <span className={`d-block`}>Quality</span></p>
                    <p className={`text-start position-relative fw-semibold ps-5 ${styles.subContent}`}>We Identify Possible Errors <span className={`d-block`}>in Advance</span></p>
                    <p className={`text-start position-relative fw-semibold ps-5 ${styles.subContent}`}>We Prevent Potential <span className={`d-block`}>Risks</span></p>
                    <p className={`text-start position-relative fw-semibold ps-5`}>We Save Time and<span className={`d-block`}>Costs</span></p>
                </div>
            </div>
        </section>
    )
}

export default TestManagementSection;