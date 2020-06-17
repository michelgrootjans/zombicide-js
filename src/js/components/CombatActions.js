import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { combats: state.combats };
};

const renderRoll = action => action.rolls.join('-');
const renderAction = (action, i) => <li key={`action_${i}`}>{action.weaponName}: {action.damage} ({renderRoll(action)})</li>;

const CombatActions = ({ combats }) => (
  <ul>
    {
      combats
        .slice(0, 10)
        .map(renderAction)
    }
  </ul>
);

export default connect(mapStateToProps)(CombatActions);
