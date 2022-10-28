import React from "react";

export default function Layout({children}) {
  return (
    <div className="container">
        <div>
      <nav>
        <div>O.L.A.M.Z</div>
        <ul className ="nav-ul" id="nav-ul">
          <li className="nav-li">
            <a href="/">Home</a>
          </li>
          <li className="nav-li">
            <a href="/about">About</a>
          </li>
          <li className="nav-li">
            <a href="/users">Users</a>
          </li>
        </ul>
      </nav></div>
      <div>{children}</div>
    </div>
  );
}
