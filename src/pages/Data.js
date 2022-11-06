import React, { Component } from 'react'



export default class Data extends Component {

  
    firstPage=(e)=>{
        this.props.firstPage(e);
      }
      
  render() {
    const {values ,step} = this.props;
    return (
      <div>
       <h1>{step}</h1>
         <div><h3>Firstname</h3> <span>-{values.firstname}</span></div>
         <div><h3>Lastname</h3> <span>-{values.lastname}</span></div>
         <div><h3>User</h3>      <span>-{values.user}</span></div>
         <div><h3>Pasword</h3>   <span>-{values.password}</span></div>
         <span>Goto </span><button onClick={e => this.firstPage(e)}>page 1</button>
      </div>
    )
  }
}
