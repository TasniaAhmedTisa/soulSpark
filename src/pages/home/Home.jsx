import React from 'react';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';
import Banner from '../../components/Banner';
import Works from './Work';
import Counter from './Counter';
import SuccessStories from './SuccessStories';
import Member from './Member';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Member></Member>
            <Works></Works>
            <Counter></Counter>
            <SuccessStories></SuccessStories>
            <Footer></Footer>
        </div>
    );
};

export default Home;