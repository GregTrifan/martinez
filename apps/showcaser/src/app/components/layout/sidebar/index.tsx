import React from 'react';
import './sidebar.scss';
import {
  AiOutlineDashboard,
  AiOutlineLineChart,
  AiOutlineSearch,
  AiOutlineSetting,
} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="hidden md:flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
      <h2 className="heading text-gray-800 dark:text-white">Martinez</h2>
      <div className="relative mt-6 ">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <AiOutlineSearch />
        </span>

        <input
          type="text"
          className="w-full rounded-xl py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link to="/">
            <p
              className={`sidebar-item ${
                location.pathname === '/' ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
            >
              <AiOutlineDashboard />

              <span className="mx-4 font-medium">Dashboard</span>
            </p>
          </Link>

          <Link to="/analytics">
            <p
              className={`sidebar-item ${
                location.pathname === '/analytics'
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : ''
              }`}
            >
              <AiOutlineLineChart />

              <span className="mx-4 font-medium">Analytics</span>
            </p>
          </Link>

          <Link to="/settings">
            <p
              className={`sidebar-item ${
                location.pathname === '/settings'
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : ''
              }`}
            >
              <AiOutlineSetting />

              <span className="mx-4 font-medium">Settings</span>
            </p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
