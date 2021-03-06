import React from "react";

import Contact from "../../components/contact.component";

function AddContact() {
  document.title = "Add Contact";

  const formDataValues = {
    name: "",
    phone: "",
    isWhatsApp: false,
    type: "Type",
    fileUrl: null,
  };

  return (
    <div className="card">
      <Contact data={formDataValues} type="add" />
    </div>
  );
}

export default AddContact;
