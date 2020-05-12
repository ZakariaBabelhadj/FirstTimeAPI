import React, { Component } from 'react';
import Signup from './components/Signup';
import Home from './components/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Posts from './components/Posts';


class App extends Component{
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/posts" component={Posts} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;