import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { actions: state.fights };
};

const ConnectedList = ({ actions }) => (
  <ul>
    {
      actions
        .reverse()
        .slice(0, 5)
        .map(action => (<li>Damage: {action.damage}</li>))
    }
  </ul>
);

const CombatActions = connect(mapStateToProps)(ConnectedList);

export default CombatActions;
