import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
const Project = ({ title, img, text, link, repo }) => {
  const backgroundImg = {
    background: `url(${img})`,
    width: "300px",
    height: "200px",
    backgroundSize: "cover",
  };
  return (
    <Col>
      <Card style={{ maxHeight: "320px", width: "100%", minWidth: "300px" }}>
        <div style={backgroundImg}></div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" href={link}>
            Go to {title}
          </Button>
          {repo && (
            <Button variant="primary" href={repo}>
              Repository
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Project;
