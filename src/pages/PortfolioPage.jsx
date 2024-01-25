import Project from "../components/Project";
import bakston from "../assets/bakston.png";
import Background from "../components/Background";

export default function PortfolioPage() {
  const projects = [
    {
      img: bakston,
      text: "",
      title: "Bakston Freight",
      link: "https://www.Bakston.com",
    },
    {
      img: "",
      text: "",
      title: "The Plug",
      link: "https://sleepy-bayou-35337-4939ad58a73e.herokuapp.com/",
    },
    // Add more projects as needed
  ];

  return (
    <Background>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Projects</h1>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-auto px-2 py-2">
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </Background>
  );
}
