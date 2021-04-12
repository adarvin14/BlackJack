import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getBooks } from './actions';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Index from './components/Index';
import Form from './components/Form';

class App extends Component {

  //const componentDidMount

  render() {
    return (
      <div className="App">
        <h1>
          Hello World
        </h1>
      </div>
    );
  }
}

//const mapStateToProps = state => {}

export default connect(mapStateToProps, { getBooks })(App);