import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
 
} from "mdb-react-ui-kit";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: ""
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: this.state.email, password: this.state.password, name: this.state.name})
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  render() {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100 mt-5">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto "
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h1 className="fw-bold mb-2 text-center">Register</h1>
              <p className="text-white-50 mb-3 mt-1">
                Please enter your login and password!
              </p>
              <MDBInput
                wrapperClass="mb-4 w-100 mt-2"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                value={this.state.email} 
                onChange={e => this.setState({ email: e.target.value })}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                value={this.state.password} 
                onChange={e => this.setState({ password: e.target.value })}
              />
               <MDBInput
                wrapperClass="mb-4 w-100"
                label="Name"
                id="formControlLg"
                type="name"
                size="lg"
                value={this.state.name} 
                onChange={e => this.setState({ name: e.target.value })}
              />
            <a type="button" className="btn btn-primary btn-lg" href="/">Register</a>
            <p className="mt-3">You have account? <a className="hyperlink" href="/signin">Login Now</a></p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
}

export default Register;
