export default function Nav({ links }) {
  const priority = {
    zIndex: 999,
  };
  return (
    <nav style={priority} className="navbar navbar-expand-lg fixed-top ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
