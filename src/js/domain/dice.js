// see https://dev.to/wasthishelpful/how-to-roll-a-dice-in-javascript-51j0
const roll = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

export default {
  roll: () => roll(1, 6)
};