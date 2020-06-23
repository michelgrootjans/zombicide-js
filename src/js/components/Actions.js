import React from "react";
import {connect} from "react-redux";
import {attackWith} from "../actions";
import './Actions.css'
import Card from "./Card";

const Equipment = ({equipment, use}) => (
  <span>
    {equipment.map(item => {
      return <>
        <Card key={item.key} item={item} use={use}/>
      </>
    })}
  </span>);

const mapDispatchToProps = dispatch => ({
  use: weaponName => dispatch(attackWith(weaponName))
});

const mapStateToProps = state => ({equipment: state.equipment});

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);
