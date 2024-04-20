import "./sidebar.css";

import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo-details">
        <span className="logo_name">Administrator</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/admin/forms">
            <i className="fa-solid fa-gauge"></i>
            <span className="link_name">Faculty Forms</span>
          </Link>
          <ul className="sub-menu blank">
            <li>
              <Link className="link_name" to="/admin/forms">
              Faculty Forms
              </Link>
            </li>
          </ul>
        </li>
        {/* <li>
          <Link to="/admin/donations">
            <i className="fa-solid fa-chart-simple"></i>
            <span className="link_name">Donations</span>
          </Link>
          <ul className="sub-menu blank">
            <li>
              <Link className="link_name" to="/admin/donatins">
                Donations
              </Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  );
}
export default SideBar;
