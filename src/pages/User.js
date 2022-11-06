/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class User extends Component {
 
  constructor(props){
    super(props)
 
    this.state={
        check : 0, 
        schoolname:""
    }
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  applyChange=(e)=>{

    let obj={};
    obj[e.target.name]=e.target.value;
    this.setState(obj);
  }

//   handleChange=(e)=> {
//     this.props.handleChange(e);
//   }
  nextPage=(e,error)=>{  
    e.preventDefault();
    if(error.firstname && error.lastname && error.email){
        this.setState({check:1});
        }
    else{
        this.props.nextPage(e,this.state)
        
    } 
    
  }

  render() {
    const {values ,step,error} = this.props;
   
    return (
      <div>
        <h1>Page - {step}</h1>
         <form >
           <label>
            First name:
            <input type="text" name="firstname" value={values.firstname} onChange={e => this.handleChange(e)}  />
            <p>{error.firstname}</p>
           </label>
           <label>
            Last name :
            <input type="text" name="lastname"  value={values.lastname} onChange={e => this.handleChange(e)}/>
            <p>{error.lastname}</p>
           </label>
           <label>
            Email :<input type="text" name="email"  value={values.email} onChange={e => this.handleChange(e)}/>
            <p>{error.email}</p>
           </label>


           <input type={"text"} value ={this.state.schoolname} name="schoolname" onChange={(e)=>this.applyChange(e)}></input>
           <input type="submit" value="Next"  onClick={e => this.nextPage(e,error)} />
          
        </form> 
      </div>
    )
  }
}
