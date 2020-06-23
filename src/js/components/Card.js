import React from "react";

export default function Card({item, use}) {
  return <img
    className={'card'}
    src={item.src}
    alt={item.name}
    onClick={() => use(item.name)}
    height={300}
  />;
}