export default function Nav({ links }) {
  const priority = {
    zIndex: 999,
  };

  return (
    <nav
      style={priority}
      className="navbar navbar-expand-lg navbar-light fixed-top"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon navbar-dark"
            style={{
              backgroundColor: "black",
              borderRadius: "3px",
              border: "none",
            }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
