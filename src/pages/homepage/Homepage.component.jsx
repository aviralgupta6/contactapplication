import { Fragment } from "react";
import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage() {
  document.title = "Homepage";
  let totalCount = +sessionStorage.getItem("totalProfileCount");

  const storage = { ...localStorage };
  let profiles = [];
  for (let i = 0; i < totalCount; i++) {
    profiles.push(JSON.parse(storage[i]));
  }

  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Type</th>
            <th>WhatsApp Active</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, idx) => (
            <tr key={idx}>
              <td colSpan="1">
                <img
                  src={profile.fileUrl}
                  style={{ width: "40px", height: "40px" }}
                  alt={idx}
                />
              </td>
              <td>
                <Link to={`/edit-contact/${idx}`}>{profile.name}</Link>
              </td>
              <td>{profile.phone}</td>
              <td>{profile.type}</td>
              <td>
                <input
                  type="checkbox"
                  checked={profile.isWhatsApp}
                  readOnly
                  disabled
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default Homepage;
