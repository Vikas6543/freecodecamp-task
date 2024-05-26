import React from 'react';
import { MockData } from './../../MockData';

const Course = () => {
  return (
    <main className='w-4/6 mx-auto mt-12 pl-16'>
      <p className='text-center text-3xl font-semibold'>Welcome Back, Vikas.</p>

      <p className='text-center text-xl mt-4 font-semibold'>
        Earn free verified certifications with freeCodeCamp's core curriculum:
      </p>

      {/* mock data */}
      <section className='mt-12'>
        {MockData?.map((data) => (
          <div key={data.id} className='my-6'>
            <div className='flex items-center gap-3'>
              <i className={data.icon}></i>
              <p>{data.title}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Course;
