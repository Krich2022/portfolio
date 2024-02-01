import { Form, FloatingLabel } from "react-bootstrap";
export default function ContactForm() {
  return (
    <>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextArea"
        label="Message"
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a message!"
        ></Form.Control>
      </FloatingLabel>
    </>
  );
}
