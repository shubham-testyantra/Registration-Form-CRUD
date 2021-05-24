import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initialvalues = {
    fullname: "",
    mobile: "",
    email: "",
    address: "",
  };
  var [values, setValues] = useState(initialvalues);

  useEffect(() => {
    if (props.currentID == "")
      setValues({
        ...initialvalues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentID],
      });
  }, [props.currentID, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };
  return (
    <div>
      <h4 className="text-center ">Contact Form</h4>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-group input-group my-3">
          <div className="input-group-prepend">
            <div className="input-group-text py-3">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group input-group col-md-6 my-3">
            <div className="input-group-prepend">
              <div className="input-group-text py-3">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group input-group col-md-6 my-3">
            <div className="input-group-prepend">
              <div className="input-group-text py-3">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group input-group col-md-6 my-3">
            <textarea
              type="text"
              className="form-control"
              placeholder="Address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-12">
          <input
            type="submit"
            value={props.currentID == "" ? "Register" : "Update"}
            className="btn btn-danger btn-block d-flex mx-auto px-4 my-4 "
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
