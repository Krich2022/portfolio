import { ListGroup, Accordion } from "react-bootstrap";

export default function ResumeAccordion() {
  const frontEnd = ["HTML5", "CSS", "JavaScript", "React.js"];
  const backEnd = [
    "Express.js",
    "Node.js",
    "GraphQL",
    "MySQL",
    "MongoDB",
    "Mongoose",
    "SQL",
    "Redux",
    "REST",
  ];
  const other = ["XML", "GitHub", "OOP", "PWA", "ORM", "API"];

  return (
    <Accordion defaultActiveKey="0" style={{ width: "300px" }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Front End</Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ol">
            {frontEnd.map((skill, index) => (
              <ListGroup.Item as="li" key={index}>
                {skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Back End</Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ol">
            {backEnd.map((skill, index) => (
              <ListGroup.Item as="li" key={index}>
                {skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Other</Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ol">
            {other.map((skill, index) => (
              <ListGroup.Item as="li" key={index}>
                {skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
