import Project from "../components/Project";
import bakston from "../assets/bakston.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Plug from "../assets/Screenshot 2023-12-22 at 6.12.09 PM.png";

export default function PortfolioPage() {
  const projects = [
    {
      img: bakston,
      text: "",
      title: "Bakston Freight",
      link: "https://www.Bakston.com",
    },
    {
      img: Plug,
      text: "",
      title: "The Plug",
      link: "https://sleepy-bayou-35337-4939ad58a73e.herokuapp.com/",
    },
    {
      img: "",
      text: "",
      title: "Crunch Time",
      link: "",
      repo: "",
    },
    {
      img: "",
      text: "",
      title: "",
      link: "",
      repo: "",
    },
    {
      img: "",
      text: "",
      title: "",
      link: "",
      repo: "",
    },
    {
      img: "",
      text: "",
      title: "",
      link: "",
      repo: "",
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
