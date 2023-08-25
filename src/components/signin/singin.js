import React from "react";
import './signin.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
 
} from "mdb-react-ui-kit";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    }
  }
  
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: this.state.email, password: this.state.password })
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
            <MDBCardBody onSubmit={this.handleSubmit} className="p-5 w-100 d-flex flex-column">
              <h1 className="fw-bold mb-2 text-center">Sign in</h1>
              
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
            <a type="button" class="btn btn-primary btn-lg" href="/">Sign In</a>
            <p className="mt-3">You don't have account? <a className="hyperlink" href="/register">Register Now</a></p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
  };
}

export default Signin;
