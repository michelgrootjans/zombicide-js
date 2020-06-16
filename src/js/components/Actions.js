import React, { Component } from "react";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    fight: () => dispatch({type: "USE_ITEM", payload: {itemName: 'Cattle Prod'}})
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fight();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Fight!</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
