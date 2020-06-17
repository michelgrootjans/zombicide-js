function cattleProd() {
  return {
    name: "Cattle Prod", src: 'cards/cattle-prod.jpeg',
    range: 0, dice: 2, accuracy: 5, damage: 1
  };
}

function smg() {
  return {
    name: "SMG", src: 'cards/smg.jpeg',
    range: 0, dice: 2, accuracy: 5, damage: 1};
}

function chainsaw() {
  return {
    name: "Chainsaw", src: 'cards/ZCS001-Equipment-Cards-Chainsaw.jpg',
    range: 0, dice: 5, accuracy: 5, damage: 2};
}

export function initialEquipment() {
  return [cattleProd(), smg(), chainsaw()];
}