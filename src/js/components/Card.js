import React from "react";
import {connect} from "react-redux";
import {attackWith} from "../actions";

  function Card({item, use}) {
    return <img
      className={'card'}
      key={item.key}
      src={item.src}
      alt={item.name}
      onClick={() => use(item)}
      height={300}
    />;
}

const mapDispatchToProps = dispatch => ({
  use: item => dispatch(attackWith(item.name))
});


export default connect(null, mapDispatchToProps)(Card)