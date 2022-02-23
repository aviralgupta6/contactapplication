import { Fragment } from "react";
import React from "react";
import { DropdownButton, Dropdown, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { useEffect } from "react";
import { useRef } from "react";

function Contact({ data, type, contactId }) {
  const storageProfileCount = +sessionStorage.getItem("totalProfileCount");
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const profileNumber = useRef(storageProfileCount);
  const [formData, setFormData] = useState(data);
  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const localStorageSet = () => {
    if (formData.name !== "" && formData.phone !== "") {
      if (type === "add") {
        localStorage.setItem(profileNumber.current, JSON.stringify(formData));
        profileNumber.current = profileNumber.current + 1;
        sessionStorage.setItem("totalProfileCount", profileNumber.current);
      } else {
        localStorage.setItem(contactId, JSON.stringify(formData));
      }
      console.log("xxxx");
      setFormData({
        name: "",
        phone: "",
        isWhatsApp: false,
        type: "Type",
        fileUrl: null,
      });
    } else {
      console.error("Phone or Name cannot be empty");
    }
  };
  const uploadImage = () => {
    if (!file) return;

    const storageRef = ref(storage, `/profileImage/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
        console.log(progress);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          setFormData({ ...formData, fileUrl: url })
        );
      }
    );
  };
  const handleSubmit = () => {
    if (file !== null) {
      uploadImage();
    } else localStorageSet();
  };

  useEffect(() => {
    if (file != null) localStorageSet();
  }, [formData.fileUrl]);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
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
            type="number"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="type">
          <DropdownButton id="dropdown-button" title={formData.type}>
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
            checked={formData.isWhatsApp}
            value={formData.isWhatsApp}
            onChange={(e) => handleChange(e.target.id, e.target.checked)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload File</Form.Label>
          <Form.Control type="file" onChange={handleFile} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
}

export default Contact;
