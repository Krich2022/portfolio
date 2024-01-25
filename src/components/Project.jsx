import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Project = ({ title, img, text, link }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={link}>
          Go to {title}
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Project;
