export function attackWith(weaponName) {
  return {type: "ATTACK", payload: {weaponName}};
}