import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [spreadsheets, setSpreadsheets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newSpreadsheetName, setNewSpreadsheetName] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const userResponse = await axios.get(`http://13.233.152.107:5000/api/user/${userId}`);
        setUser(userResponse.data);
        setSpreadsheets(userResponse.data.spreadsheet);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user details:', error);
      }
    };

    fetchUserDetails();
    return () => {
      setSpreadsheets([]);
      setLoading(true);
    };
  }, []);

  const handleOpenSpreadsheet = (spreadsheetId) => {
    history(`/spreadsheet/${spreadsheetId}`);
    console.log(`Open spreadsheet with ID: ${spreadsheetId}`);
  };

  const handleCreateSpreadsheet = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    try {
      console.log('Creating spreadsheet with name:', newSpreadsheetName, 'and owner:', userId);
      const response = await axios.post('http://13.233.152.107:5000/api/spreadsheet', {
        name: newSpreadsheetName,
        owner: userId
      });
      console.log('Spreadsheet created:', response.data);
      setSpreadsheets([...spreadsheets, response.data]);
      setNewSpreadsheetName('');
      toast.success('Spreadsheet created successfully');
      handleOpenSpreadsheet(response.data.id);
    } catch (error) {
      console.error('Failed to create spreadsheet:', error);
      toast.error(`Failed to create spreadsheet: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Dashboard</h1>
        {loading && <p className="text-center text-gray-500">Loading Dashboard...</p>}
        {user && <h2 className="text-xl font-semibold mb-4 text-center">Welcome, {user.username}</h2>}
        <form onSubmit={handleCreateSpreadsheet} className="my-6">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={newSpreadsheetName}
              onChange={(e) => setNewSpreadsheetName(e.target.value)}
              placeholder="New Spreadsheet Name"
              required
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Create Spreadsheet
            </button>
          </div>
        </form>
        <ul className="space-y-4">
          {spreadsheets.reverse().map(spreadsheet => (
            <li key={spreadsheet._id} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{spreadsheet.name}</h2>
              <p className="text-gray-600">ID: {spreadsheet._id}</p>
              <button
                onClick={() => handleOpenSpreadsheet(spreadsheet._id)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Open
              </button>
            </li>
          ))}
        </ul>
        
      </div>
      <Toaster />
    </div>
    </>
  );
};

export default Dashboard;