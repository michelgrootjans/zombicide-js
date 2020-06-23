import React from "react";
import {connect} from "react-redux";
import {attackWith} from "../actions";
import './Actions.css'
import Card from "./Card";
import {CardStatistics} from "./CardStatistics";

const Equipment = ({equipment}) => (
  <span>
    {equipment.map(item => {
      return <>
        <Card item={item} />
        <CardStatistics item={item} />
      </>
    })}
  </span>);

const mapStateToProps = state => ({equipment: state.equipment});

export default connect(mapStateToProps)(Equipment);
