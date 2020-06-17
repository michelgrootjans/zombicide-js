import { ADD_ARTICLE } from "../constants/action-types";
import dice from '../domain/dice'

const initialState = {
  articles: [],
  remoteArticles: [],
  combats: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  if (action.type === "ATTACK") {
    let rolls = [dice.roll(), dice.roll()];
    let newResult = {rolls: rolls, damage: rolls.filter(roll => roll >= 5).length};
    return {
      ...state,
      combats: [newResult, ...state.combats]
    }
  }

  [].reverse().slice(0, 10)
  return state;
}

export default rootReducer;
