import React from "react";

export default function Layout({ children }) {
  return (
    <div className="container">
      <div>
        <nav>
          <div className="logo gradient__text">OLAMZ</div>
          <label htmlFor="toggle" className="hamburger">
            <img src="assets/icon-hamburger.svg" alt="hamburger-icon" />
          </label>
          <input type="checkbox" className="check" id="toggle"></input>
          <ul className="nav-ul" id="nav-ul">
            <li className="nav-li">
              <a href="/">Home</a>
            </li>
            <li className="nav-li">
              <a href="/users">Users</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
