import React from 'react';
import { connect } from 'react-redux';

const Welcome = props => {
  if (props.authenticated) {
    return <h3>Home Page</h3>;
  } else {
    console.log(props);
    return <h3>Welcome! Sign up or sign in!</h3>;
  }
};

const mapStateToProps = state => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(Welcome);
