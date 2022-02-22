import { Fragment } from "react";
import React from "react";
import { DropdownButton, Dropdown, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function AddContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    isWhatsApp: false,
    type: "",
  });
  const handleChange = (id, value) => {
    console.log(id, value);
    setFormData({ ...formData, [id]: value });
  };

  useEffect(() => console.log(formData));
  return (
    <Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="type">
          <DropdownButton id="dropdown-button" title="Type">
            <Dropdown.Item
              id="personal"
              onClick={(e) => handleChange("type", e.target.text)}
            >
              Personal
            </Dropdown.Item>
            <Dropdown.Item
              id="office"
              onClick={(e) => handleChange("type", e.target.text)}
            >
              Office
            </Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Form.Group className="mb-3" controlId="isWhatsApp">
          <Form.Check
            type="checkbox"
            label="Are You on WhatsApp?"
            value={formData.isWhatsApp}
            onChange={(e) => handleChange(e.target.id, e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={(e) => console.log(e)}>
          Submit
        </Button>
      </Form>
      {/* <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="form-group"></div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="isWhatsApp" />
          <label className="form-check-label">Are You on WhatsApp?</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
       */}
    </Fragment>
  );
}

export default AddContact;
