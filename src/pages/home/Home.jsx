import React from 'react';
import Footer from '../../components/shared/Footer';
import Banner from '../../components/Banner';
import Works from './Work';
import Counter from './Counter';
import SuccessStories from './SuccessStories';
import Member from './Member';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Member></Member>
            <Works></Works>
            <Counter></Counter>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;