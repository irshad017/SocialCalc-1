import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('clicked');
    navigate('/register'); // Replace with your actual target route
  };

  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to SolialCalc Modern version</h2>
          <p className="text-lg mb-8">Create, edit, and share your spreadsheets online.</p>
          <div className="space-x-4">
            <button onClick={handleClick} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Get Started
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;