import React, { useState, useEffect } from "react";

import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

const Contacts = () => {
  var [contactObjects, setContactObjects] = useState({});
  var [currentID, setCurrentID] = useState("");
  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      } else {
        setContactObjects({});
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentID == "")
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentID("");
        }
      });
    else
      firebaseDb.child(`contacts/${currentID}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentID("");
        }
      });
  };
  const onDelete = (key) => {
    if (window.confirm("Are you sure you want to delete this")) {
      firebaseDb.child(`contacts/${key}`).remove((err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentID("");
        }
      });
    }
  };

  return (
    <>
      <div className=" text-center py-3  text-light bg-dark">
        <h1>Contact Register</h1>
      </div>
      <div className="row py-4">
        <div className="col-md-5 ms-3 ">
          <ContactForm {...{ addOrEdit, currentID, contactObjects }} />
        </div>
        <div className="col-md-6 ms-5 ">
          <div>
            <h4 className="text-center">List of Contacts</h4>
            <table className="table table-borderless table-stripped my-3">
              <thead className="table-dark">
                <tr>
                  <th>Full Name</th>
                  <th>Mobile</th>
                  <th>Emial</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-light">
                {Object.keys(contactObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{contactObjects[id].fullname}</td>
                      <td>{contactObjects[id].mobile}</td>
                      <td>{contactObjects[id].email}</td>
                      <td>
                        <a
                          className="btn text-primary "
                          onClick={() => {
                            setCurrentID(id);
                          }}
                        >
                          <i class="fas fa-user-edit"></i>
                        </a>

                        <a
                          className="btn text-danger"
                          onClick={() => {
                            onDelete(id);
                          }}
                        >
                          <i class="fas fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
