import React from "react";

import { useParams } from "react-router-dom";

import Contact from "../../components/contact.component";

function EditContact() {
  document.title = "Edit Contact";
  const { id } = useParams();
  const profile = JSON.parse(localStorage.getItem(id));
  const formDataValues = profile;
  return <Contact data={formDataValues} type="edit" contactId={id} />;
}

export default EditContact;
