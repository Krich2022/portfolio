import ResumeAccordion from "../components/ResumeAccordion";
import { Button } from "react-bootstrap";

export default function ResumePage() {
  return (
    <>
      <h1>Resume</h1>
      <Button
        className="my-3"
        href="https://docs.google.com/document/d/1RxJkDdIk9zlLv5aDpWqAWwh8_oJI0eeQxNNrfr5u6EI/edit?usp=sharing"
        size="lg">
        View Resume
      </Button>
      <ResumeAccordion />
    </>
  );
}
