import { Fragment } from "react";
import React from "react";
import { Table } from "react-bootstrap";

function Homepage() {
  return (
    <Fragment>
      Homepage
      {/* <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Type</th>
            <th>WhatsApp Active</th>
          </tr>
        </thead>
      </table> */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
}

export default Homepage;
