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
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    zip: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  return (
    <>
      <InnerBanner image={contact} title="Contact" />
      <MDBContainer>
        <MDBValidation className="row g-3" noValidate>
          <div className="col-md-6">
            <MDBInput
              value={formValue.fname}
              name="fname"
              onChange={onChange}
              id="validationFirstName"
              required
              label="First Name"
              validation="Please provide a First Name."
              invalid
              type="text"
            />
          </div>
          <div className="col-md-6">
            <MDBInput
              value={formValue.lname}
              name="lname"
              onChange={onChange}
              id="validationLastName"
              required
              label="Last Name"
              validation="Please provide a Last Name."
              invalid
              type="text"
            />
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
