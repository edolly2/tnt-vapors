import { BiCart, BiSearch } from "react-icons/bi";

import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../_assets/tnt1.png";

const Header = () => {
  return (
    <header>
      <div className="site-brand">
        <img src={Logo} alt="logo" />
        <p>TNT VAPORS</p>
      </div>
      <div className="site-brand-list-container">
        <ul>
          <li>
            <BiSearch className="icons" />
          </li>
          <li>
            <FaRegUserCircle className="icons" />
          </li>
          <li>
            <BiCart className="icons" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
