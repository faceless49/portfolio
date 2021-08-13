import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"

export function MyMap() {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`

  return (
    <Map height={500} defaultCenter={[59.9339, 30.3061]} defaultZoom={13} animate={true}>
      <Marker
        width={50}
        anchor={[59.9339, 30.3061]}
        color={color}
        onClick={() => setHue(hue + 20)}
      />
    </Map>
  )
}