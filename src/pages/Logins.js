/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class Logins extends Component {

  constructor(props){
    super(props)
    this.state={
      check : 0, 
  }
  }
  handleChange=(e)=> {
    this.props.handleChange(e);
  }
  nextPage=(e,values)=>{

    // (values.user && values.password)?this.props.nextPage(e):e.preventDefault(); this.setState({check:1});
    this.props.nextPage(e);
    
  }
  prevPage=(e)=>{
    this.props.prevPage(e);
  }

  render() {
    const {values ,step,error} = this.props;
  
    return (
      <div>
        <h1>pages - {step}</h1>
        <form >
           <label>
          user name:<input type="text" name="user" value={values.user} onChange={e => this.handleChange(e)}/>
           </label>
           <label>
            password :<input type="password" name="password" value={values.password} onChange={e => this.handleChange(e)}/>
           </label>
           <input type="button" value="Previous" onClick={e => this.prevPage(e)} />
           <input type="submit" value="Submit" onClick={e => this.nextPage(e,values)}/>
           {this.state.check?<h1>bhai pura form bhar le</h1>:<h1> </h1>}
        </form>
      </div>
    )
  }
}
