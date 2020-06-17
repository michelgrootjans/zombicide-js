import buildStore from "../js/store/index";

let fakeRolls = []

function mockDice() {
  return {roll: () => fakeRolls.shift() || 1};
}

jest.mock('../js/domain/dice', () => mockDice());

describe('use', () => {
  let store = undefined;
  beforeEach(() => {
    store = buildStore();
  });

  describe('Cattle Prod', () => {

    it('does 1 damage with when rolling 4-4', function () {
      fakeRolls = [4, 4]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Cattle Prod'}})
      expect(store.getState()).toMatchObject({combats: [{rolls: [4, 4], damage: 0}]})
    });

    it('does 1 damage with when rolling 4-5', function () {
      fakeRolls = [4, 5]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Cattle Prod'}})
      expect(store.getState()).toMatchObject({combats: [{rolls: [4, 5], damage: 1}]})
    });

    it('does 1 damage with when rolling 5-4', function () {
      fakeRolls = [5, 4]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Cattle Prod'}})
      expect(store.getState()).toMatchObject({combats: [{rolls: [5, 4], damage: 1}]})
    });

    it('does 2 damage with when rolling 5-5', function () {
      fakeRolls = [5, 5]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Cattle Prod'}})
      expect(store.getState()).toMatchObject({combats: [{rolls: [5, 5], damage: 2}]})
    });
  });
  describe('SMG', () => {

    it('does 1 damage with when rolling 4-4', function () {
      fakeRolls = [4, 4]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Cattle Prod'}})
      expect(store.getState()).toMatchObject({combats: [{rolls: [4, 4], damage: 0}]})
    });

    it('does 1 damage with when rolling 4-5', function () {
      fakeRolls = [4, 5]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Cattle Prod'}})
      expect(store.getState()).toMatchObject({combats: [{rolls: [4, 5], damage: 1}]})
    });

    it('does 1 damage with when rolling 5-4', function () {
      fakeRolls = [5, 4]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Cattle Prod'}})
      expect(store.getState()).toMatchObject({combats: [{rolls: [5, 4], damage: 1}]})
    });

    it('does 2 damage with when rolling 5-5', function () {
      fakeRolls = [5, 5]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Cattle Prod'}})
      expect(store.getState()).toMatchObject({combats: [{rolls: [5, 5], damage: 2}]})
    });
  });
})
