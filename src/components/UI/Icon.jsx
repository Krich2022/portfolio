import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function Icon({ images }) {
  return (
    <Container
      fluid
      className=" text-center mx-auto"
      style={{ maxWidth: "400px" }}>
      <Row className="justify-content-center">
        {images.map(({ image, link }, index) => (
          <Col key={index} className="max-100 cursor-pointer">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div style={{ backgroundColor: "white", borderRadius: "12px" }}>
                <Image src={image} style={{ width: "100%", height: "auto" }} />
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
