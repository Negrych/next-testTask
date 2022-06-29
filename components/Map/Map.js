import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

import { useSelector } from "react-redux";

import mapStyle from "./mapStyle.module.scss";

const Map = () => {
  const { company } = useSelector((state) => state["company"]);

  return (
    <GoogleMap
      zoom={2}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName={`${mapStyle.mapContainer}`}
    >
      {company &&
        company.map((value) => (
          <Marker
            key={value.id}
            position={{ lat: value.address.lat, lng: value.address.lng }}
            icon={{
              url: value.status ? "map-marker1.svg" : "map-marker2.svg",
            }}
          />
        ))}
    </GoogleMap>
  );
};

export default Map;
