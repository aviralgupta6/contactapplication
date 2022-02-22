import "./App.css";

import Homepage from "./pages/homepage/Homepage.component";
import EditContact from "./pages/edit-contact/Edit-Contact.compoent";
import AddContact from "./pages/add-contact/Add-Contact.component";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
