import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const logoutHandler = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <main className='flex justify-between items-center bg-black text-white px-4'>
      <section className='relative hidden lg:block'>
        <input
          type='text'
          className='bg-gray-200 w-80 pl-9 rounded text-black outline-none focus:border border-gray-200'
          placeholder='Search 10000+ tutorials'
        />
        <i className='fa-solid fa-magnifying-glass absolute top-1 left-0 pl-2 text-gray-600'></i>
      </section>

      <section>
        <Link to='/'>
          <img
            src='https://d33wubrfki0l68.cloudfront.net/dbb80e7ad5b16d0a5838e5ccef1833e54d2737ff/eb5ee/img/misuse-4.png'
            className='h-16'
          />
        </Link>
      </section>

      <section className='flex items-center gap-4'>
        <i className='fa-solid fa-globe border px-2 py-1 text-lg rounded'></i>
        <p className='border py-2 px-3 rounded'>Menu</p>
        {user ? (
          <Link
            to='/signin'
            className='bg-orange-400 text-black px-4 py-2 rounded font-semibold'
            onClick={logoutHandler}
          >
            Logout
          </Link>
        ) : (
          <Link
            to='/signin'
            className='bg-orange-400 text-black px-4 py-2 rounded font-semibold'
          >
            Sign in
          </Link>
        )}
      </section>
    </main>
  );
};

export default Navbar;
