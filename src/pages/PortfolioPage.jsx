import Project from "../components/Project";
// import bakston from "/bakston.jpg";
// import Plug from "/theplug.jpg";
// import crunchtime from "/crunchtime.jpg";
// import macromanager from "/macromanager.jpg";
// import mongomesh from "/mongomesh.jpg";
// import quiver from "/quiver.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function PortfolioPage() {
  const projects = [
    {
      img: "/bakston.jpg",
      text: "Full-Stack",
      title: "Bakston Freight",
      link: "https://www.Bakston.com",
    },
    {
      img: "/theplug.jpg",
      text: "Full-Stack",
      title: "The Plug",
      link: "https://sleepy-bayou-35337-4939ad58a73e.herokuapp.com/",
      repo: "https://github.com/Krich2022/The_Plug",
    },
    {
      img: "/quiver.png",
      text: "Full-Stack",
      title: "Character Quiver",
      link: "https://character-quiver.onrender.com/",
      repo: "https://github.com/Krich2022/character-quiver",
    },
    {
      img: "/crunchtime.jpg",
      text: "Front-End",
      title: "Crunch Time",
      link: "https://krich2022.github.io/crunch-time/",
      repo: "https://github.com/Krich2022/crunch-time",
    },

    {
      img: "/macromanager.jpg",
      text: "Back-End",
      title: "Macro-Manager",
      link: "",
      repo: "https://github.com/Krich2022/macro-manager",
    },
    {
      img: "/mongomesh.jpg",
      text: "Back-End",
      title: "MongoMesh",
      link: "",
      repo: "https://github.com/Krich2022/mongomesh",
    },
  ];

  return (
    <Container className="align-items-center">
      <Row xs={1} sm={2} md={3}>
        {projects.map((project, index) => (
          <div key={index} className="col-auto px-2 py-2">
            <Project {...project} />
          </div>
        ))}
      </Row>
    </Container>
  );
}
