import React from "react"
import { Map, Marker, ZoomControl } from "pigeon-maps"

export const MyMapComponent = () => {
  return (
    <div>
      <div className="my-5 mb-8">
        <h4 className="font-bold text-[1.2rem]">
          Location</h4>
      </div>
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
        <ZoomControl />
      </Map>
    </div>

  )
}

export default MyMapComponent;
