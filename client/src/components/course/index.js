import React from 'react';
import { MockData } from './../../MockData';

const Course = () => {
  return (
    <main className='w-full lg:w-4/6 mx-auto mt-12 lg:pl-16'>
      <p className='text-center text-3xl font-semibold'>Welcome Back, Vikas.</p>

      <p className='text-center text-xl mt-4 font-semibold'>
        Earn free verified certifications with freeCodeCamp's core curriculum:
      </p>

      {/* mock data */}
      <section className='mt-12 w-3/6 mx-auto'>
        {MockData?.map((data) => (
          <div
            key={data.id}
            className='my-5 cursor-pointer border-2 bg-gray-300 border-gray-500 p-3'
          >
            <div className='flex items-center gap-3'>
              <i className={`${data.icon} text-lg`}></i>
              <p className='text-lg'>{data.title}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Course;
