import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";

function Education({ education, setEducation }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  return (
    <Container className="p-4">
      <h2>Education Information</h2>
      {isEditing ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-3">
            <Form.Label>School Name</Form.Label>
            <Form.Control
              type="text"
              name="schoolName"
              value={education.schoolName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Title of study</Form.Label>
            <Form.Control
              type="text"
              name="titleOfStudy"
              value={education.titleOfStudy}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Date of study</Form.Label>
            <Form.Control
              type="date"
              name="dateOfStudy"
              value={education.dateOfStudy}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="mt-3 w-100" variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      ) : (
        <>
          <Card className="shadow-sm p-4">
            <p>
              <strong>School Name : </strong>
              {education.schoolName}
            </p>
            <p>
              <strong>Title of study: </strong>
              {education.titleOfStudy}
            </p>
            <p>
              <strong>Date of study: </strong>
              {education.dateOfStudy}
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

export default Education;
