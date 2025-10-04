import React from 'react';
import {banner} from '@assets/images';
import { Banner } from '@components/index';
import { ContactusSection, Footer, OrientedSection, QualityManagementSection, ReferenceSection, TestManagementSection } from '@widgets/index';

const Homepage = () => {

    return (
        <>
            <Banner imageurl={banner}/>
            <OrientedSection />
            <TestManagementSection />
            <QualityManagementSection />
            <ReferenceSection />
            <ContactusSection />
            <Footer />
        </>
    );
};

export default Homepage;