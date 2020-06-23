function cardFile(fileName) {
  return `${process.env.PUBLIC_URL}/cards/${fileName}`;
}

function cattleProd() {
  return {
    name: "Cattle Prod", src: cardFile('cattle-prod.jpeg'),
    range: 0, dice: 2, accuracy: 5, damage: 1
  };
}

function smg() {
  return {
    name: "SMG", src: cardFile('smg.jpeg'),
    range: 0, dice: 2, accuracy: 5, damage: 1};
}

function chainsaw() {
  return {
    name: "Chainsaw", src: cardFile('ZCS001-Equipment-Cards-Chainsaw.jpg'),
    range: 0, dice: 5, accuracy: 5, damage: 2};
}

export function initialEquipment() {
  return [cattleProd(), smg(), chainsaw()];
}