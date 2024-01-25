import Navbar from "./UI/Navbar";
import { Link } from "react-router-dom";

export default function Nav() {
  <Navbar
    links={[
      <Link key={1} to="/">
        Home
      </Link>,
      <Link key={2} to="portfolio">
        Portfolio
      </Link>,
      <Link key={3} to="about">
        About Me
      </Link>,
      <Link key={4} to="contact">
        Contact Me
      </Link>,
      <Link key={5} to="resume">
        Resume
      </Link>,
    ]}
  />;
}
