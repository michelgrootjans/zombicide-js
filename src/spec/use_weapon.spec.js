import buildStore from "../js/store/index";

let rolls = []
function mockDice() {
  return {roll: () => rolls.shift() || 1};
}

jest.mock('../js/domain/dice', () => mockDice());

describe('Cattle Prod', () => {
  let store = undefined;
  beforeEach(() => {
    store = buildStore();
  });

  it('does 1 damage with when rolling 4-4', function () {
    rolls = [4, 4]
    store.dispatch({type: "USE_ITEM", payload: {itemName: 'Cattle Prod'}})
    expect(store.getState()).toMatchObject({fights: [{rolls: [4, 4], damage: 0}]})
  });

  it('does 1 damage with when rolling 4-5', function () {
    rolls = [4, 5]
    store.dispatch({type: "USE_ITEM", payload: {itemName: 'Cattle Prod'}})
    expect(store.getState()).toMatchObject({fights: [{rolls: [4, 5], damage: 1}]})
  });

  it('does 1 damage with when rolling 5-4', function () {
    rolls = [5, 4]
    store.dispatch({type: "USE_ITEM", payload: {itemName: 'Cattle Prod'}})
    expect(store.getState()).toMatchObject({fights: [{rolls: [5, 4], damage: 1}]})
  });

  it('does 2 damage with when rolling 5-5', function () {
    rolls = [5, 5]
    store.dispatch({type: "USE_ITEM", payload: {itemName: 'Cattle Prod'}})
    expect(store.getState()).toMatchObject({fights: [{rolls: [5, 5], damage: 2}]})
  });

});