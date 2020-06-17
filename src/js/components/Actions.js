import React, { Component } from "react";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    use: itemName => dispatch({type: "USE_ITEM", payload: {itemName}})
  };
}

class ConnectedForm extends Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.use('Cattle Prod')}>Cattle Prod</button>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(ConnectedForm);
