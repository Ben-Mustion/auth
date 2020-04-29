import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <h3>Sorry to see you go</h3>;
  }
}

export default connect(null, actions)(Signout);
