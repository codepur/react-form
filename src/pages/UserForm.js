/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Logins from "./Logins";
import User from "./User";
import Data from "./Data";

//import children

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstname: "",
      lastname: "",
      email: "",
      user: "",
      password: "",
      error: {},
      formData:{}
    };
  }

  handleChange = (e) => {
    let { error } = this.state;
    error[e.target.name] = "";
    this.setState({ [e.target.name]: e.target.value, error: error });
  };

  nextPage = (e,data) => {
    e.preventDefault();
    const { step, error } = this.state;
    let obj = this.state;

    for (let key in obj) {
      if (step == 1) {

        let rkeys=['error','user','password'];
        if (
          obj[key] == "" &&
           rkeys.indexOf(key)!==-1
        ) {
          error[key] = key + " is required";
        }
      } else {
        if (
          obj[key] == "" &&
          key != "error" &&
          key != "firstname" &&
          key != "lastname" &&
          key != "email"
        ) {
          error[key] = key + " is required";
        }
      }
    }


    let formData={...this.state.formData,...data};

    console.log(formData)

    let errval = Object.values(error).filter((val) => val && val != "");
    if (errval.length > 0) {
      this.setState({ error: error });
    } else {
      this.setState({ step: step + 1,formData });
    }
  };
  prevPage = (e) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  firstPage = (e) => {
    e.preventDefault();
    this.setState({ step: 1 });
  };

  render() {
    const { step } = this.state;
    const { firstname, lastname, email, user, password, error } = this.state;
    const values = { firstname, lastname, email, user, password };

    switch (step) {
      default:
        return <h1>not working</h1>;
      case 1:
        return (
          <div>
            <h1>User</h1>
            <User
              values={values}
              handleChange={this.handleChange}
              nextPage={this.nextPage}
              step={step}
              error={error}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Login</h1>
            <Logins
              values={values}
              handleChange={this.handleChange}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
              step={step}
              error={error}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Data</h1>
            <Data values={values} step={step} firstPage={this.firstPage} />
          </div>
        );
    }
  }
}
