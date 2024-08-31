import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  

  return (
    <header className="flex items-center justify-between p-2 bg-blue-500 text-white">
      <FontAwesomeIcon icon={faHome} className="h-8 w-8" />
      <div>
        {token ? (
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600">
            Logout
          </button>
        ) : (
          <>
            <Link to="/register" className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 mr-2">
              Register
            </Link>
            <Link to="/login" className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;