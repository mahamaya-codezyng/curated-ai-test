import React from 'react';
import './component.css';

const TabBar = ({ currentTab, onTabChange }) => {
  return (
    <nav className="tab-bar">
      <button 
        className={currentTab === 'insert' ? 'active' : ''}
        onClick={() => onTabChange('insert')}>
        Insert Image
      </button>
    </nav>
  );
};

export default TabBar;
