import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
const Project = ({ title, img, text, link, repo }) => {
  const backgroundImg = {
    background: `url(/public${img})`,
    minWidth: "100%",
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Col>
      <Card style={{ maxHeight: "400px", width: "100%", minWidth: "300px" }}>
        <div style={backgroundImg}></div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            {link && (
              <Button variant="primary" href={link}>
                Go to {title}
              </Button>
            )}
            {repo && (
              <Button variant="primary" href={repo}>
                Repository
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Project;
