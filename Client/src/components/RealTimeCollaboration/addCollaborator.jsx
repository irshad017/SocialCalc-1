import React, { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const AddCollaboratorForm = ({ spreadsheetId }) => {
  const [collaboratorUsername, setCollaboratorUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (collaboratorUsername.trim()) {
      try {
        const response = await axios.post('http://localhost:5000/api/add-collaborator', {
          spreadsheetId,
          collaboratorUsername,
        });
        toast.success(response.data.message);
      } catch (error) {
        console.error('Error adding collaborator:', error);
        toast.error(error.response?.data?.error || 'Failed to add collaborator');
      }
      setCollaboratorUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={collaboratorUsername}
        onChange={(e) => setCollaboratorUsername(e.target.value)}
        placeholder="Collaborator Username"
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Collaborator
      </button>
      <Toaster/>
    </form>
  );
};

export default AddCollaboratorForm;