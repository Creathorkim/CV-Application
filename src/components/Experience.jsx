import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";

function Experience({experience, setExperience}) {
  const [isEditing, setIsEditing] = useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  return (
    <Container className="p-4">
      <h2>Experience Information</h2>
      {isEditing ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-3">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={experience.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              name="position"
              value={experience.position}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Responsibility</Form.Label>
            <Form.Control
              type="text"
              name="responsibility"
              value={experience.responsibility}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="dateFrom"
              value={experience.dateFrom}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="dateUntil"
              value={experience.dateUntil}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            className="mt-3 w-100"
            variant="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      ) : (
        <>
          <Card className="p-4 shodow-sm">
            <p>
              <strong>Company : </strong>
              {experience.company}
            </p>
            <p>
              <strong>Position : </strong>
              {experience.position}
            </p>
            <p>
              <strong>Responsibility : </strong>
              {experience.responsibility}
            </p>
            <p>
              <strong>Start Date : </strong>
              {experience.dateFrom}
            </p>
            <p>
              <strong>End Date : </strong>
              {experience.dateUntil}
            </p>
          </Card>
          <Button className="mt-3 w-100" variant="warning" onClick={handleEdit}>
            Edit
          </Button>
        </>
      )}
    </Container>
  );
}

export default Experience;
