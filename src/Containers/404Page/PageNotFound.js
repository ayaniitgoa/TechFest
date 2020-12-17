import React from "react";
import { Link } from "react-router-dom";
import "./404Page.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <p className="text404">404</p>
      <p className="text-pg">Page Not Found</p>
      <Link to="/">
        <button className="go-back-404">Go Back</button>
      </Link>
    </div>
  );
}

export default PageNotFound;
