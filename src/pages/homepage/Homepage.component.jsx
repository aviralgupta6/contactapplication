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
      <div className="card">
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
          {profiles.length ? (
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
          ) : (
            <tbody>
              <tr>
                <td colSpan="3">No Contacts Found</td>
                <td colSpan="2">
                  <Link to={"/add-contact"} className="btn btn-primary">
                    Add Contact
                  </Link>
                </td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
    </Fragment>
  );
}

export default Homepage;
