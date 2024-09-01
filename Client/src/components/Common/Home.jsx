import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  useEffect(() => {
    const cells = document.querySelectorAll('.spreadsheet td');
    cells.forEach((cell, index) => {
      cell.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to SocialCalc Modern Version</h2>
          <p className="text-lg mb-8">Create, edit, and share your spreadsheets online.</p>
          <div className="spreadsheet-container mb-8 overflow-x-auto">
          <table className="spreadsheet border-collapse border border-gray-400 w-full max-w-4xl mx-auto rounded-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 bg-gray-200">#</th>
                  <th className="border border-gray-300 p-2 bg-gray-200">A</th>
                  <th className="border border-gray-300 p-2 bg-gray-200">B</th>
                  <th className="border border-gray-300 p-2 bg-gray-200">C</th>
                  <th className="border border-gray-300 p-2 bg-gray-200">D</th>
                  <th className="border border-gray-300 p-2 bg-gray-200">E</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 bg-gray-200">1</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">John</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Doe</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">30</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Engineer</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">New York</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 bg-gray-200">2</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Jane</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Smith</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">25</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Designer</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Los Angeles</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 bg-gray-200">3</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Alice</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Johnson</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">28</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Developer</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">San Francisco</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 bg-gray-200">4</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Bob</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Brown</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">35</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Manager</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Chicago</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 bg-gray-200">5</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Charlie</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Davis</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">40</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">CEO</td>
                  <td className="border border-gray-300 p-2 animate-fade-in">Seattle</td>
                </tr>
              </tbody>
            </table>
          </div>
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