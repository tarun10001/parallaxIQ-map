import {
  GoogleMap,
  Marker,
  HeatmapLayer,
  DrawingManager,
  Polygon,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import { Fragment } from "react";
import { mapOptions } from "./MapConfiguration";

export const MapVisualization = ({
  containerStyle,
  center,
  zoom,
  mapType,
  mapTheme,
  visualizationType,
  enableClustering,
  showGeofences,
  markers,
  heatmapData,
  territories,
  selectedMarker,
  infoWindowContent,
  onLoad,
  onUnmount,
  onLoadDrawingManager,
  onPolygonComplete,
  handleMarkerClick,
  setSelectedMarker,
  setInfoWindowContent,
  setDrawingManager,
}) => {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapTypeId={mapType}
      options={{
        styles: mapTheme === "night" ? mapOptions.mapThemes.night : [],
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      <DrawingManager
        onLoad={(manager) => {
          setDrawingManager(manager);
          onLoadDrawingManager(manager);
        }}
        onPolygonComplete={onPolygonComplete}
        options={{
          drawingControl: true,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [window.google.maps.drawing.OverlayType.POLYGON],
          },
          polygonOptions: {
            fillColor: "#FF0000",
            fillOpacity: 0.2,
            strokeWeight: 2,
            clickable: true,
            editable: true,
            zIndex: 1,
          },
        }}
      />
      {visualizationType === "markers" && (
        <>
          {enableClustering ? (
            <MarkerClusterer
              options={{
                imagePath:
                  "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
                gridSize: 60,
                maxZoom: 20,
                styles: [
                  {
                    url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
                    width: 56,
                    height: 56,
                    textColor: "#fff",
                    textSize: 12,
                  },
                ],
              }}
            >
              {(clusterer) => (
                <Fragment>
                  {markers.map((marker) => (
                    <Marker
                      key={marker.id}
                      position={marker.location}
                      clusterer={clusterer}
                      onClick={() => setSelectedMarker(marker)}
                    />
                  ))}
                  {selectedMarker && (
                    <InfoWindow position={selectedMarker.location}>
                      <h1>{selectedMarker.name}</h1>
                    </InfoWindow>
                  )}
                </Fragment>
              )}
            </MarkerClusterer>
          ) : (
            markers.map((marker) => (
              <Fragment key={`marker-fragment-${marker.id}`}>
                <Marker
                  key={marker.id}
                  position={marker.location}
                  onClick={() => handleMarkerClick(marker)}
                />
                {selectedMarker && (
                  <InfoWindow
                    position={selectedMarker.location}
                    onCloseClick={() => {
                      setSelectedMarker(null);
                      setInfoWindowContent(null);
                    }}
                  >
                    {infoWindowContent || (
                      <div className="p-2">
                        <p>Loading location details...</p>
                      </div>
                    )}
                  </InfoWindow>
                )}
              </Fragment>
            ))
          )}
        </>
      )}

      {visualizationType === "heatmap" && (
        <HeatmapLayer
          data={heatmapData}
          options={{
            radius: 20,
            opacity: 0.6,
          }}
        />
      )}

      {showGeofences &&
        territories.map((territory) => {
          try {
            let paths = [];
            if (territory.polygon.getPath) {
              paths = territory.polygon
                .getPath()
                .getArray()
                .map((latLng) => ({
                  lat: latLng.lat(),
                  lng: latLng.lng(),
                }));
            } else if (Array.isArray(territory.polygon)) {
              paths = territory.polygon.map((point) => ({
                lat: point.lat,
                lng: point.lng,
              }));
            }

            return (
              <Polygon
                key={territory.id}
                paths={paths}
                options={{
                  fillColor: "#FF0000",
                  fillOpacity: 0.2,
                  strokeColor: "#FF0000",
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  clickable: true,
                  editable: true,
                }}
              />
            );
          } catch (error) {
            console.error("Error rendering polygon:", error);
            return null;
          }
        })}
    </GoogleMap>
  );
};
