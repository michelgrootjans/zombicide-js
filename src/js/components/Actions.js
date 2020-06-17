import React from "react";
import {connect} from "react-redux";

const Equipment = ({equipment, use}) => {
  const render = (item, i) => {
    const src = process.env.PUBLIC_URL + "/" + item.src
    return <img
      key={`card_${i}`}
      src={src}
      alt={item.name}
      onClick={() => use(item.name)}
      height={300}
    />;
  };

  return (<ul>{equipment.map(render)}</ul>);
};


const mapDispatchToProps = dispatch => ({
  use: weaponName => dispatch({type: "ATTACK", payload: {weaponName}})
});

const mapStateToProps = state => ({equipment: state.equipment});


export default connect(mapStateToProps, mapDispatchToProps)(Equipment);
