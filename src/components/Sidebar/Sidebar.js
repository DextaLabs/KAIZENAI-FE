import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";

import { Container, Nav, NavItem, NavLink, Navbar } from "reactstrap";

const Sidebar = (props) => {
  const onSidebarMove = () => {
    document.body.classList.remove("opened");
  };
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.isMenu !== false)
        return (
          <NavItem key={key}>
            <NavLink
              to={prop.layout + prop.path}
              tag={NavLinkRRD}
              activeClassName="active"
            >
              <div className="navbar-icon">
                <i className={prop.icon} />
              </div>
              {prop.name}
            </NavLink>
          </NavItem>
        );
    });
  };

  const { routes } = props;

  const handleClickOutSide = (e) => {
    if (document.body.classList.contains("opened")) {
      let sidenavMain = document.getElementById("sidenav-main");
      let toggleButton = document.getElementById("toggleButton");
      if(toggleButton.contains(e.target)){
        return
      }
      if (!sidenavMain.contains(e.target)) {
        document.body.classList.remove("opened");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutSide);
    return () => {
      window.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return (
    <Navbar
      className="navbar-vertical fixed-left shadow-none sidebar"
      expand="sm"
      onMouseLeave={onSidebarMove}
      id="sidenav-main"
    >
      <Container fluid className="justify-content-start">
        <div className="">
          <h1 className="text-white">Logo</h1>
        </div>
        <Nav navbar>{createLinks(routes)}</Nav>
        <Nav className="mt-auto" navbar>
          <NavItem>
            <NavLink
              to={"/admin/help"}
              tag={NavLinkRRD}
              activeClassName="active"
            >
              <div className="navbar-icon">
                <i className={"fa fa-info"} />
              </div>
              Help
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
