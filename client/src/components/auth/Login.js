import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-8/12 md:w-4/12 mx-auto mt-24 bg-white'>
      <form onSubmit={submitHandler} className='border shadow-xl p-10'>
        <p className='text-center font-semibold pb-6 text-3xl'>Sign In</p>
        <section>
          {/* name */}
          <div>
            <input
              type='text'
              className='w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring focus:ring-gray-200'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* email */}
          <div className='my-6'>
            <input
              type='email'
              autoComplete='email'
              className='w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring focus:ring-gray-200'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* password */}
          <div className='relative'>
            <input
              type='password'
              className='w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring focus:ring-gray-200'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </section>

        {/* submit and google button */}
        <section className='mt-8'>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-gray-800 focus:outline-none'
          >
            {loading ? 'loading...' : 'Submit'}
          </button>

          <p className='text-center my-3 font-semibold'>OR</p>

          {/* login with google */}
          <button
            type='submit'
            className='group relative w-full gap-2 flex justify-center py-2 px-4 border-2 text-md items-center font-medium rounded-md focus:outline-none bg-gray-100'
          >
            <img
              src='https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg'
              alt='google'
              className='w-12 rounded-full'
            />
            <p>{loading ? 'loading...' : 'Sign in with Google'}</p>
          </button>
        </section>
      </form>
    </div>
  );
};

export default Login;
