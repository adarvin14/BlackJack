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

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/blogs" component={ Index } />
          <Route exact path="/blogs/new" component={ Form } />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getBooks })(App);