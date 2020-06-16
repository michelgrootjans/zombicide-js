import buildStore from "../js/store/index";
import {ADD_ARTICLE} from "../js/constants/action-types";

describe('adding an article', () => {
  let store = undefined;
  beforeEach(() => store = buildStore());

  it('should list it', function () {
    store.dispatch({type: ADD_ARTICLE, payload: {title: 'some article'}})
    expect(store.getState()).toMatchObject({articles: [{title: 'some article'}]})
  });

  it.each([['spam'], ['money']])('should reject the word %s', badWord => {
    store.dispatch({type: ADD_ARTICLE, payload: {title: badWord}})
    expect(store.getState()).toMatchObject({articles: []})
  });
});