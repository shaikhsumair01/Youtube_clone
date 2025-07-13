import React from "react";

export default function Header({ onToggle }){
  return (
    <header className="header-layout">
      <button onClick={onToggle} className="hamburger">
        ☰
      </button>
      <div className="main-header">
      <div className="title-div">
        <i className="fa-brands fa-youtube Youtube-icon"></i>
        <h1 className="Title"> Streamly</h1>
      </div>
      <div className="Search-section">
      <div className="Search-bar">
      <input type="text" placeholder="Search" className="search-bar-input"></input>
      <i className="fa-solid fa-magnifying-glass searchbtn"></i>
      </div>
      <i className="fa-solid fa-microphone microphone-logo"></i>
      </div>
      <div className="account-details">
        <div className="create-button-div">
      <i className="fa-solid fa-plus create-logo"></i>
      <p className="create-logo-text">Create</p>
      </div>
      <i className="fa-regular fa-bell bell-icon"></i>
      <i className="fa-solid fa-a name-tag"></i>
      </div>
      </div>
    </header>
  );
};


