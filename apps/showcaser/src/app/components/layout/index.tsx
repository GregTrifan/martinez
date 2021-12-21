import React from 'react';
import Sidebar from './sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex">
      <Sidebar />
      <div className="m-3 w-full">{children}</div>
    </div>
  );
};

export default Layout;
