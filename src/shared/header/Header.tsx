import "./header.css";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Header() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setIsLogin(true);
    }
  }, []);
  return (
    <div className="navbox">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light">Faculty Appraisal Form</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "45%" }}
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link text-light">
                  Profile
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/checkout" className="nav-link">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/orderhistory" className="nav-link">
                  Orders History
                </Link>
              </li> */}
              {isLogin ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item aa"
                        onClick={() => {
                          sessionStorage.clear();
                          navigate("/");
                        }}
                      >
                        SignOut
                      </a>
                    </li>
                    {/* <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        Profile
                      </Link>
                  
                    </li> */}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/" className="nav-link text-light">
                    login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
