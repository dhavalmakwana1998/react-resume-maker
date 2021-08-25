import React from "react";
import { Link } from "react-router-dom";

function Header({ handleClick, ref }) {
  return (
    <div>
      <header className="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0 shadow-sm">
        <Link className="text-center mx-auto px-4 navbar-brand " to={"/"}>
          <img alt="logo" src="./images/logo192.png" style={{ width: "50%" }} />
        </Link>
        {/* <ul className="navbar-nav ms-auto mb-2 px-4 mb-lg-0">
          <ReactToPdf targetRef={ref} filename="div-blue.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
          </ReactToPdf>
          <li className="nav-item">
            <button
              onClick={handleClick}
              className="px-3 btn btn-warning nav-link active"
            >
              Download PDF
            </button>
          </li> 
        </ul>*/}
        <button
          className="navbar-toggler d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </header>
    </div>
  );
}

export default Header;
