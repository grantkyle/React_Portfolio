import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      title: "Grant Kyle",
      headerLinks: [
        {title: 'Home', path: "/"},
        {title: 'About', path: "/about"},
        {title: 'Contact', path: "/contact"},
      ],
      home: {
        title: 'Portfolio',
        subTitle: 'Please Hire Me',
        text: "Projects"
      },
      about: {
        title: 'About Me',
    },
      contact: {
        title: 'Contact',
      }
  }

  }

  render() {
    return (
      <Router>
      <Container fluid={true}>
        <p>H1 From React</p>
      </Container>
      </Router>
  );
    }
}

export default App;
