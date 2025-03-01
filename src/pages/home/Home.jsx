import React from 'react';
import Banner from '../../components/Banner';
import Works from './Work';
import Counter from './Counter';
import SuccessStories from './SuccessStories';
import Member from './Member';
import Team from './Team';
import NewsletterSubscription from './NewsLetter';
import WhyChooseUs from './Why';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Member></Member>
            <Works></Works>
            <Counter></Counter>
            <SuccessStories></SuccessStories>
            <Team></Team>
            <WhyChooseUs></WhyChooseUs>
            <NewsletterSubscription></NewsletterSubscription>

        </div>
    );
};

export default Home;