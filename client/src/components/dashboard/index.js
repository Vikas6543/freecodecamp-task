import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <main className='lg:w-6/12 lg:mx-auto mt-20 mx-4'>
      <section>
        <p className='text-3xl lg:text-5xl font-bold'>
          Learn to code - for free.
        </p>
        <p className='text-3xl lg:text-5xl font-bold py-6'>Build projects.</p>
        <p className='text-3xl lg:text-5xl font-bold'>Earn certifications.</p>

        <p className='my-8 text-xl font-semibold'>
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>
      </section>

      <section className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <i className='fa-brands fa-apple text-3xl'></i>
          <p className='text-xl font-semibold'>Google</p>
        </div>

        <div className='flex items-center gap-3'>
          <i className='fa-brands fa-microsoft text-3xl'></i>
          <p className='text-xl font-semibold'>Microsoft</p>
        </div>

        <div className='flex gap-3'>
          <i className='fa-brands fa-amazon text-3xl'></i>
          <p className='text-xl font-semibold'>Amazon</p>
        </div>
      </section>

      <section className='flex justify-center mt-10'>
        <Link
          to='/courses'
          className='bg-orange-400 text-black font-semibold px-12 py-2 rounded text-lg'
        >
          Get Started (It's Free)
        </Link>
      </section>
    </main>
  );
};

export default Dashboard;
