import React from 'react';
import Banner from '../../components/Banner';
import Works from './Work';
import Counter from './Counter';
import SuccessStories from './SuccessStories';
import Member from './Member';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Member></Member>
            <Works></Works>
            <Counter></Counter>
            <SuccessStories></SuccessStories>
            <Team></Team>

        </div>
    );
};

export default Home;