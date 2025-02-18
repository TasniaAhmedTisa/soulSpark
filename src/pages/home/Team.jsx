import React from 'react';

const Team = () => {
    return (
        <div>
                <section className="py-10 bg-gradient-to-b from-blue-900 to-green-100 text-white my-5">
                <h2 className="animate__animated animate__fadeInDown font-bold text-center italic">----Meet Our Team----</h2>
                <div className='flex justify-between px-4 gap-4 py-4'>
                <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/ymqJk61Y/p1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className='text-xl font-extrabold text-blue-900'>David Thompson </h2>
    <p>Chief Technology Officer (CTO)</p>
    
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/JFWTVmxN/female.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="text-xl font-extrabold text-blue-900">Emily Carter</h2>
    <p>Marketing Manager</p>
    
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/ymqJk61Y/p1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="text-xl font-extrabold text-blue-900">Ethan Roberts</h2>
    <p>Head of Customer Success</p>
    
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/JFWTVmxN/female.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="text-xl font-extrabold text-blue-900">Sonia Ahmed</h2>
    <p>CEO & Founder</p>
    
  </div>
</div>
                </div>
                </section>

            
        </div>
    );
};

export default Team;