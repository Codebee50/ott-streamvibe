import { useState } from "react";
import { Fragment } from "react";
import NavDrawer from "./NavDrawer";
import { navLinks } from "../constants";
import Nav from "./Nav";

const NavAndDrawer = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  const showNavDrawer = () => {
    setNavOpen(true);
  };

  const closeNavDrawer = () => {
    setNavOpen(false);
  };

  return (
    <Fragment>
      <NavDrawer open={navOpen} onClose={closeNavDrawer} navLinks={navLinks} />
      <section className="w-full bg-page-black">
        <Nav navLinks={navLinks} page={props.page} onOpenNav={showNavDrawer} />
      </section>
    </Fragment>
  );
};

export default NavAndDrawer;
