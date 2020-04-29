import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return <h3>This is the feature!</h3>;
  }
}

export default requireAuth(Feature);
