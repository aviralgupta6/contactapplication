import { Fragment } from "react";
import React from "react";
import { Table } from "react-bootstrap";

function Homepage() {
  return (
    <Fragment>
      Homepage
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Type</th>
            <th>WhatsApp Active</th>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
}

export default Homepage;
