import dice from '../domain/dice'
import {initialEquipment} from "./equipment";

const initialState = {
  articles: [],
  remoteArticles: [],
  combats: [],
  equipment: initialEquipment()
};

function rootReducer(state = initialState, action) {
  if (action.type === "ATTACK") {
    const {weaponName} = action.payload;
    const weapon = state.equipment.find(item => item.name === weaponName)

    let rolls = Array.from(Array(weapon.dice).keys()).map(_ => dice.roll());
    let damage = rolls
      .filter(roll => roll >= weapon.accuracy)
      .reduce((acc, _) => acc + weapon.damage, 0);
    let newResult = {weaponName, rolls, damage};
    return {
      ...state,
      combats: [newResult, ...state.combats]
    }
  }

  return state;
}

export default rootReducer;
