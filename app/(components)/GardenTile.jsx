/* eslint-disable @next/next/no-img-element */
import React from "react";

const GardenTile = ({ info }) => {
  return (
    <div className="bg-gray-400 aspect-square hover:border-2 hover:border-green-300 relative">
      {info.backgroundURL != "" ? (
        <img
          className="absolute"
          src={info.backgroundURL}
          alt="Floor texture"
          width="100%"
          height="100%"
        ></img>
      ) : (
        <div className="bg-gray-400 aspect-square hover:border-green-300"></div>
      )}
      {info.middleLayerURL != "" ? (
        <img
          className="absolute"
          src={info.middleLayerURL}
          alt="Middle Layer"
          width="100%"
          height="100%"
        ></img>
      ) : null}
      {/* <img
        className="absolute"
        src="null"
        alt="Top item"
        width="100%"
        height="100%"
      ></img> */}
    </div>
  );
};

export default GardenTile;
