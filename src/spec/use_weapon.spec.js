import buildStore from "../js/store/index";
import {attackWith} from "../js/actions";

let fakeRolls = []

function mockDice() {
  return {roll: () => fakeRolls.shift() || 1};
}

jest.mock('../js/domain/dice', () => mockDice());

describe('use', () => {
  let store = undefined;
  beforeEach(() => store = buildStore());

  describe('Cattle Prod', () => {
    it('does 0 damage with when rolling 4-4', function () {
      fakeRolls = [4, 4]
      store.dispatch(attackWith('Cattle Prod'))
      expect(store.getState()).toMatchObject({combats: [{weaponName: 'Cattle Prod', rolls: [4, 4], damage: 0}]})
    });

    it('does 1 damage with when rolling 4-5', function () {
      fakeRolls = [4, 5]
      store.dispatch(attackWith('Cattle Prod'))
      expect(store.getState()).toMatchObject({combats: [{weaponName: 'Cattle Prod', rolls: [4, 5], damage: 1}]})
    });

    it('does 1 damage with when rolling 5-4', function () {
      fakeRolls = [5, 4]
      store.dispatch(attackWith('Cattle Prod'))
      expect(store.getState()).toMatchObject({combats: [{weaponName: 'Cattle Prod', rolls: [5, 4], damage: 1}]})
    });

    it('does 2 damage with when rolling 5-5', function () {
      fakeRolls = [5, 5]
      store.dispatch(attackWith('Cattle Prod'))
      expect(store.getState()).toMatchObject({combats: [{weaponName: 'Cattle Prod', rolls: [5, 5], damage: 2}]})
    });
  });

  describe('Chainsaw', () => {
    it('does 0 damage with when rolling all 4s', function () {
      fakeRolls = [4, 4, 4, 4, 4]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Chainsaw'}})
      expect(store.getState()).toMatchObject({combats: [{weaponName: 'Chainsaw', rolls: [4, 4, 4, 4, 4], damage: 0}]})
    });
    it('does 2 damage with when rolling one 5', function () {
      fakeRolls = [4, 4, 5, 4, 4]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Chainsaw'}})
      expect(store.getState()).toMatchObject({combats: [{weaponName: 'Chainsaw', rolls: [4, 4, 5, 4, 4], damage: 2}]})
    });
    it('does 10 damage with when rolling all 5es', function () {
      fakeRolls = [5, 5, 5, 5, 5]
      store.dispatch({type: "ATTACK", payload: {weaponName: 'Chainsaw'}})
      expect(store.getState()).toMatchObject({combats: [{weaponName: 'Chainsaw', rolls: [5, 5, 5, 5, 5], damage: 10}]})
    });
  });
})
