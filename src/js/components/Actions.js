import React, { Component } from "react";
import { connect } from "react-redux";

class ConnectedForm extends Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.use('Cattle Prod')}>Cattle Prod</button>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  use: weaponName => dispatch({type: "ATTACK", payload: {weaponName}})
});

export default connect(null, mapDispatchToProps)(ConnectedForm);
