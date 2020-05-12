import React, { Component } from 'react';

class Login extends Component{
    state = {
        name:null,
        password:null 
    }
    handleChanges = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render() {
        return(
            <form className="container">
                <h3 className="center">Login To Your Account</h3>
                <input type ="text" id="name" placeholder="Username" onChange={this.handleChanges}/>
                <input type ="password" id="password" placeholder="Password" onChange={this.handleChanges}/>
                <button className="btn waves-effect waves-light">Login<i className="material-icons">send</i></button>

            </form>
        )
    }
}

export default Login;