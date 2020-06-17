import React from "react";
import {connect} from "react-redux";
import './Actions.css';

const renderRoll = roll => {
  let className = `roll ${(roll.success ? 'success' : 'fail')}`;
  console.log({roll, className})
  return <span className={ className }>{roll.value}</span>
};

const renderAction = (action, i) => <li key={`action_${i}`}>Damage: {action.damage} - {action.weaponName} ({action.rolls.map(renderRoll)})</li>;

const CombatActions = ({ actions }) => (
  <ul className='rolls'>
    {
      actions
        .slice(0, 10)
        .map(renderAction)
    }
  </ul>
);

export default connect(state => state)(CombatActions);
