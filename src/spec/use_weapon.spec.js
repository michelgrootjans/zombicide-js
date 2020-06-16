import buildStore from "../js/store/index";
jest.mock('../js/domain/dice', () => ({roll: () => 1}));

describe('use weapon', () => {
  let store = undefined;
  beforeEach(() => {
    store = buildStore();
  });

  it('should list it', function () {
    store.dispatch({type: "USE_ITEM", payload: {itemName: 'Cattle Prod'}})
    expect(store.getState()).toMatchObject({fights: [{damage: 1}]})
  });

});