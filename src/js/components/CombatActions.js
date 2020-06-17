import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { combats: state.combats };
};

const render = action => <li>Damage: {action.damage} ({action.rolls.join('-')})</li>;

const CombatActions = ({ combats }) => (
  <ul>
    {
      combats
        .slice(0, 5)
        .map(render)
    }
  </ul>
);

export default connect(mapStateToProps)(CombatActions);
