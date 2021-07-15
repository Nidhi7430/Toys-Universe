import React, { useState } from "react";
import InnerBanner from "../inner_banner/InnerBanner";
import contact from "../../images/contact.webp";
import {
  MDBValidation,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBContainer,
} from "mdb-react-ui-kit";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: "",
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <>
      <InnerBanner image={contact} title="Contact" />
      <MDBContainer>
        <MDBValidation className="row g-3" noValidate>
          <div className="col-md-4">
            <MDBInput
              value={formValue.fname}
              name="fname"
              onChange={onChange}
              id="validationCustom01"
              required
              label="First name"
              validation="Looks good!"
            />
          </div>
          <div className="col-md-4">
            <MDBInput
              value={formValue.lname}
              name="lname"
              onChange={onChange}
              id="validationCustom02"
              required
              label="Last name"
              validation="Looks good!"
            />
          </div>
          <div className="col-md-4">
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                placeholder="Username"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-6">
            <MDBInput
              value={formValue.city}
              name="city"
              onChange={onChange}
              id="validationCustom03"
              required
              label="City"
              validation="Please provide a valid city."
              invalid
            />
          </div>
          <div className="col-md-6">
            <MDBInput
              value={formValue.zip}
              name="zip"
              onChange={onChange}
              id="validationCustom05"
              required
              label="Zip"
              validation="Please provide a valid zip."
              invalid
            />
          </div>
          <div className="col-12">
            <MDBCheckbox
              label="Agree to terms and conditions"
              id="invalidCheck"
              validation="You must agree before submitting."
              invalid
              required
            />
          </div>
          <div className="col-12">
            <MDBBtn type="submit">Submit form</MDBBtn>
          </div>
        </MDBValidation>
      </MDBContainer>
    </>
  );
};

export default Contact;
