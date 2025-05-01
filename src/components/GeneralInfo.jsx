import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <>
      <Container className="p-4">
        <h2>General Information</h2>
        {isEditing ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={generalInfo.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={generalInfo.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                name="phoneNumber"
                type="number"
                value={generalInfo.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="mt-3 w-100"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        ) : (
          <>
            <Card className="p-4 shadow-sm">
              <p>
                <strong>Name : </strong>
                {generalInfo.name}
              </p>
              <p>
                <strong>Email : </strong>
                {generalInfo.email}
              </p>
              <p>
                <strong>Phone number : </strong>
                {generalInfo.phoneNumber}
              </p>
            </Card>
            <Button className="mt-3 w-100" variant="warning" onClick={handleEdit}>
              Edit
            </Button>
          </>
        )}
      </Container>
    </>
  );
}
export default GeneralInfo;
