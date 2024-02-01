import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
const Project = ({ title, img, text, link, repo }) => {
  return (
    <Col>
      <Card style={{ width: "18rem", minHeight: "320px" }}>
        <Card.Img variant="top" src={img} />
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
