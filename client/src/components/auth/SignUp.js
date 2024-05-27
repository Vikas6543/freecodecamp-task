import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        'https://freecodecamp-task.onrender.com/user/signup',
        {
          name,
          email,
          password,
        }
      );
      if (response) {
        navigate('/signin');
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-8/12 md:w-4/12 mx-auto mt-20 bg-white'>
      <ToastContainer />
      <form onSubmit={submitHandler} className='border shadow-xl p-10'>
        <p className='text-center font-semibold pb-6 text-3xl'>Sign Up</p>
        <section>
          {/* name */}
          <div className='my-6'>
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

          <p className='text-center my-3 font-semibold'>
            Already have an account?{' '}
            <Link to='/signin' className='text-blue-500'>
              Sign In
            </Link>
          </p>
        </section>
      </form>
    </div>
  );
};

export default SignUp;
