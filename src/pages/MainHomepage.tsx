import { banner } from "@assets/images";
import { Banner } from "@components/index";
import { OrientedSection, TestManagementSection, QualityManagementSection, ReferenceSection, ContactusSection, Footer } from "@widgets/index";
import React from "react";

const MainHomepage: React.FC = () => {
    return (
        <><Banner imageurl={banner} /><OrientedSection /><TestManagementSection /><QualityManagementSection /><ReferenceSection /><ContactusSection /><Footer /></>
    )
};

export default MainHomepage;