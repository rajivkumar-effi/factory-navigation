import React, { useState } from "react";
import { MapContainer, ImageOverlay, Polygon, Rectangle, } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import CustomDrawControl from "./CustomDrawControl";

const IMAGE_WIDTH = 1000;
const IMAGE_HEIGHT = 800;

const IndoorMap = () => {
  const [walls, setWalls] = useState<any>([]);

  const handleShapeCreated = (latlngs: any, type: any) => {
    console.log("Shape created:", { latlngs, type });
    setWalls((prev: any) => [...prev, { latlngs, type }]);
  };


  return (
    <MapContainer
      crs={L.CRS.Simple}
      bounds={[
        [0, 0],
        [IMAGE_HEIGHT, IMAGE_WIDTH],
      ]}
      style={{ height: "90vh", width: "100%" }}
    >
      <ImageOverlay
        url="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*5dlOrU5nGQsCuZVo.png"
        bounds={[
          [0, 0],
          [IMAGE_HEIGHT, IMAGE_WIDTH],
        ]}
      />

      <CustomDrawControl onShapeDrawn={handleShapeCreated} />

      {walls.map((wall: any, idx: number) =>
        wall.type === "rectangle" ? (
          <Rectangle
            key={idx}
            bounds={wall.latlngs}
            pathOptions={{ color: "black", fillOpacity: 0.5 }}
          />
        ) : (
          <Polygon
            key={idx}
            positions={wall.latlngs}
            pathOptions={{ color: "black", fillOpacity: 0.5 }}
          />
        )
      )}
    </MapContainer>
  );
};

export default IndoorMap;
