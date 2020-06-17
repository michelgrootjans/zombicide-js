import dice from '../domain/dice'
import {initialEquipment} from "./equipment";

const initialState = {
  articles: [],
  remoteArticles: [],
  actions: [],
  equipment: initialEquipment()
};

function rootReducer(state = initialState, action) {
  if (action.type === "ATTACK") {
    const {weaponName} = action.payload;
    const weapon = state.equipment.find(item => item.name === weaponName)

    let rolls = Array.from(Array(weapon.dice).keys())
      .map(_ => dice.roll())
      .map(value => ({value, success: value >= weapon.accuracy}));
    let damage = rolls
      .filter(roll => roll.success)
      .reduce((acc, _) => acc + weapon.damage, 0);
    let newResult = {weaponName, rolls, damage};
    return {
      ...state,
      actions: [newResult, ...state.actions]
    }
  }

  return state;
}

export default rootReducer;
