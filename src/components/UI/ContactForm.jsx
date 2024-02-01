import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("example@exampl.com");
  const [name, setName] = useState("asdf");
  const [message, setMessage] = useState("asdf");

  const [isValidName, setIsValidName] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    // Email validation logic (you can use a library like validator)
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValidEmail(isValid);
  }, [email]);

  useEffect(() => {
    setIsValidName(name.trim() !== "");
  }, [name]);

  useEffect(() => {
    setIsValidMessage(message.trim() !== "");
  }, [message]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className={`mb-3 ${isValidName ? "" : "has-danger"}`}
        style={{ color: "black" }}
      >
        <Form.Control
          type="text"
          placeholder="Name"
          onBlur={handleNameChange}
          isInvalid={!isValidName}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className={`mb-3 ${isValidEmail ? "" : "has-danger"}`}
        style={{ color: "black" }}
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onBlur={handleEmailChange}
          isInvalid={!isValidEmail}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextArea"
        label="Message"
        className={`mb-3 ${isValidMessage ? "" : "has-danger"}`}
        style={{ color: "black" }}
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a message!"
          onBlur={handleMessageChange}
          isInvalid={!isValidMessage}
          style={{ height: "300px" }}
        ></Form.Control>
      </FloatingLabel>
      <Button>Submit</Button>
    </>
  );
}
