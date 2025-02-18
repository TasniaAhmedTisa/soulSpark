import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <section className="py-5 bg-dark text-white text-center">
      <div className="container">
        <h2 className="mb-4 italic pb-5">----Our Achievements----</h2>
        <div className="grid grid-cols-4 justify-between gap-12 px-20">
          <div className="col-md-4">
            <h3><CountUp end={5000} duration={3} />+</h3>
            <p>Total Biodatas</p>
          </div>
          <div className="col-md-4">
            <h3><CountUp end={3000} duration={3} />+</h3>
            <p>Girls Biodatas</p>
          </div>
          <div className="col-md-4">
            <h3><CountUp end={2000} duration={3} />+</h3>
            <p>Boys Biodatas</p>
          </div>
          <div className="col-md-4">
            <h3><CountUp end={1000} duration={3} />+</h3>
            <p>Successful Marriages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
