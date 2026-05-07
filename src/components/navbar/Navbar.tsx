// import Bars from "../../svgs/Bars";
import Logo from "../../svgs/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Logo svgWidth="36px" svgHeight="36px" />
        <div className="navbar-rafael-sites">
          <span className="navbar-rafael-vendramini">RAFAEL VENDRAMINI</span>
          <span className="navbar-sites">SITES</span>
        </div>
      </div>
      <div>
        {/* <Bars svgWidth="30px" svgHeight="30px" svgFill="#fff" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
