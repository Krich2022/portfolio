import Navbar from "./UI/Navbar";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light fs-5" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light fs-5" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="nav-link text-light fs-5" to="/about">
          About Me
        </Link>,
        <Link key={4} className="nav-link text-light fs-5" to="/contact">
          Contact Me
        </Link>,
        <Link key={5} className="nav-link text-light fs-5" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
