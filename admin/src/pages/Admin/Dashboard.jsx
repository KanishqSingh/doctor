import React from 'react';
import { assets } from '../../assets/assets';

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  md:ml-72">
      <img className="max-w-72" src={assets.construction} alt="Under Construction" />
    </div>
  );
};

export default Dashboard;
