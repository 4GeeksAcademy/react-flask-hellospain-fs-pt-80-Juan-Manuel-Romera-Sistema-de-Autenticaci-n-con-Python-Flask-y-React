import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <button className="btn btn-primary px-2 py-2">React Boilerplate</button>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary px-2 py-2">Check the Context in action</button>
          </Link>
          <button className="btn btn-danger ml-2 px-2 py-2" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

//import React from "react";
//import { Link } from "react-router-dom";
//
//export const Navbar = () => {
//	return (
//		<nav className="navbar navbar-light bg-light">
//			<div className="container">
//				<Link to="/">
//					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
//				</Link>
//				<div className="ml-auto">
//					<Link to="/demo">
//						<button className="btn btn-primary">Check the Context in action</button>
//					</Link>
//				</div>
//			</div>
//		</nav>
//	);
//};
//