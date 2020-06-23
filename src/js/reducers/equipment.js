const cardFile = fileName => `${process.env.PUBLIC_URL}/cards/${fileName}`;

let equipment = [({
  name: "Cattle Prod", src: cardFile('cattle-prod.jpeg'),
  range: 0, dice: 2, accuracy: 5, damage: 1
}), ({
  name: "SMG", src: cardFile('smg.jpeg'),
  range: 0, dice: 2, accuracy: 5, damage: 1
}), ({
  name: "Chainsaw", src: cardFile('ZCS001-Equipment-Cards-Chainsaw.jpg'),
  range: 0, dice: 5, accuracy: 5, damage: 2
})];

const addKey = item => ({...item, key: item.name});

export function initialEquipment() {
  return equipment.map(addKey);
}