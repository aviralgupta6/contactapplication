import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";

function EditContact() {
  const { id } = useParams();
  console.log(id);
  return <Fragment>EditContact : {id}</Fragment>;
}

export default EditContact;
