import React, { useState } from 'react';
import '../App.css'; // CSS 파일 불러오기

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li
          className="nav-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          학과소개
          {isDropdownOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">학과장 인사말</li>
              <li className="dropdown-item">연혁</li>
              <li className="dropdown-item">교수진 소개</li>
              <li className="dropdown-item">캠퍼스 소개</li>
            </ul>
          )}
        </li>
        <li className="nav-item">입학안내</li>
        <li className="nav-item">커뮤니티</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
