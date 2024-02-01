import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
function OffcanvasExample() {
  const links = [
    { pathName: "Home", path: "/" },
    {
      pathName: "About",
      path: "/about",
    },
    {
      pathName: "Portfolio",
      path: "/portfolio",
    },
    { pathName: "Contact", path: "/contact" },
    {
      pathName: "Resume",
      path: "/resume",
    },
  ];
  const priority = {
    zIndex: 9999,
    width: "100%",
  };
  const expand = "sm";
  return (
    <>
      <Navbar
        fixed="top"
        style={priority}
        key={expand}
        expand={expand}
        variant="dark"
        className=" mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#" className="text-light">
            Keston Rich{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            style={{ background: "none" }}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {links.map((link) => (
                  <Link
                    key={link.pathName}
                    className="nav-link text-light fs-5"
                    to={link.path}
                  >
                    {link.pathName}
                  </Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
