import React, { Component } from 'react';

class Signup extends Component{
    state = {
        name:null,
        password:null,
        phone:null,
        email:null
    }
    handleChanges = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render() {
        return (
            <form className="container">
                <h3 className="center">Sign Up To Have An Account</h3>
                <input type ="text" id="name" placeholder="Username" onChange={this.handleChanges}/>
                <input type ="password" id="password" placeholder="Password" onChange={this.handleChanges}/>
                <input type ="text" id="phone" placeholder="Phone" onChange={this.handleChanges}/>
                <input type ="email" id="email" placeholder="Email" onChange={this.handleChanges}/>
                <button className="btn waves-effect waves-light">SignUp<i className="material-icons right">send</i></button>
            </form>
        )
    }
}

export default Signup;