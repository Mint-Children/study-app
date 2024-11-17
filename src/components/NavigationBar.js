import React, { useState } from 'react';
import '../App.css';

const NavigationBar = () => {
  // 네비게이션 전체 열림/닫힘 상태
  const [isNavOpen, setIsNavOpen] = useState(false);

  // 드롭다운 상태를 각각 관리 (공백 및 특수문자 포함)
  const [dropdownState, setDropdownState] = useState({
    "교육목표": false,
    "교과안내": false,
    "졸업후 진로": false,
    "학사 일정": false, // 공백 포함
    "E-행정실": false, // 하이픈 포함
  });

  // 특정 드롭다운을 열거나 닫는 함수
  const toggleDropdown = (menu, isOpen) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [menu]: isOpen, // 문자열로 키 접근
    }));
  };

  // 네비게이션 전체 토글 함수
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      {/* 네비게이션 바 상단 */}
      <ul className="nav-list">
        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("교육목표", true)}
          onMouseLeave={() => toggleDropdown("교육목표", false)}
        >
          교육목표
          {dropdownState["교육목표"] && (
            <ul className="dropdown">
              <li className="dropdown-item">목표 1</li>
              <li className="dropdown-item">목표 2</li>
              <li className="dropdown-item">목표 3</li>
            </ul>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("교과안내", true)}
          onMouseLeave={() => toggleDropdown("교과안내", false)}
        >
          교과안내
          {dropdownState["교과안내"] && (
            <ul className="dropdown">
              <li className="dropdown-item">과목 1</li>
              <li className="dropdown-item">과목 2</li>
              <li className="dropdown-item">과목 3</li>
            </ul>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("졸업후 진로", true)}
          onMouseLeave={() => toggleDropdown("졸업후 진로", false)}
        >
          졸업후 진로
          {dropdownState["졸업후 진로"] && (
            <ul className="dropdown">
              <li className="dropdown-item">진로 1</li>
              <li className="dropdown-item">진로 2</li>
            </ul>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("학사 일정", true)}
          onMouseLeave={() => toggleDropdown("학사 일정", false)}
        >
          학사 일정
          {dropdownState["학사 일정"] && (
            <ul className="dropdown">
              <li className="dropdown-item">일정 1</li>
              <li className="dropdown-item">일정 2</li>
            </ul>
          )}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => toggleDropdown("E-행정실", true)}
          onMouseLeave={() => toggleDropdown("E-행정실", false)}
        >
          E-행정실
          {dropdownState["E-행정실"] && (
            <ul className="dropdown">
              <li className="dropdown-item">문서 1</li>
              <li className="dropdown-item">문서 2</li>
            </ul>
          )}
        </li>
        {/*햄버거 버튼*/}
        <div className="hamburger-button" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </ul>

      {/* 햄버거 버튼으로 열리는 전체 드롭다운 */}
      {isNavOpen && (
        <div className="expanded-menu">
          <div className="menu-column">
            <h3>교육목표</h3>
            <ul>
              <li className="dropdown-item">목표 1</li>
              <li className="dropdown-item">목표 2</li>
              <li className="dropdown-item">목표 3</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>교과안내</h3>
            <ul>
              <li className="dropdown-item">과목 1</li>
              <li className="dropdown-item">과목 2</li>
              <li className="dropdown-item">과목 3</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>졸업후 진로</h3>
            <ul>
              <li className="dropdown-item">진로 1</li>
              <li className="dropdown-item">진로 2</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>학사 일정</h3>
            <ul>
              <li className="dropdown-item">일정 1</li>
              <li className="dropdown-item">일정 2</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>E-행정실</h3>
            <ul>
              <li className="dropdown-item">문서 1</li>
              <li className="dropdown-item">문서 2</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
