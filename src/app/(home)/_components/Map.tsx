import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

export function MyMap() {
  const [hue, setHue] = useState(0);
  const color = `hsl(120deg 39% 70%)`;

  return (
    <Map
      height={250}
      width={350}
      defaultCenter={[28.65874710260391, -106.09977694509463]}
      defaultZoom={17}
    >
      <Marker
        width={50}
        anchor={[28.65874710260391, -106.09977694509463]}
        color={color}
        onClick={() => setHue(hue + 20)}
      />
      <Marker
        className="w-3/4 sm:w-full"
        anchor={[50.879, 4.6997]}
        color={color}
        onClick={() => setHue(hue + 20)}
      ></Marker>
    </Map>
  );
}
