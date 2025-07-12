import React from 'react';
import Banner from '@components/banner';
import {banner} from '@assets/images';

const Homepage = () => {

    return (
        <>
            <Banner imageurl={banner}/>
        </>
    );
};

export default Homepage;