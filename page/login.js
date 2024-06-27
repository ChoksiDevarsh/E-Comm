import React from 'react';
import NavBar from '../layout/NavBar/navBar';
import LoginHeaderImg from '../images/lhi.webp';

const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="bg-red-200 flex items-center justify-center h-full">
        <div className="w-1/3 h-full bg-white flex flex-col">
          <img src={LoginHeaderImg} alt="Login Header" className="w-full" />
          <form className="mt-4 flex flex-col items-center">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 text-sm px-3 py-2 leading-4 h-auto text-gray-800 mb-4"
            />
            <input
              type='password'
              placeholder='Password'
              className='border border-gray-300 text-sm px-3 py-2 leading-4 h-auto text-gray-800 mb-4'
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
