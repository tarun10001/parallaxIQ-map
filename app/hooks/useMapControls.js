"use client";
import { useState, useRef, useEffect } from "react";
import { mapOptions } from "../components/MapConfiguration";

export const useMapControls = () => {
  const [center, setCenter] = useState(mapOptions.defaultCenter);
  const [zoom, setZoom] = useState(mapOptions.defaultZoom);
  const [map, setMap] = useState(null);
  const [visualizationType, setVisualizationType] = useState("markers");
  const [mapType, setMapType] = useState("roadmap");
  const [mapTheme, setMapTheme] = useState("day");
  const [enableClustering, setEnableClustering] = useState(false);
  const [showGeofences, setShowGeofences] = useState(false);
  const [drawingManager, setDrawingManager] = useState(null);
  const [territories, setTerritories] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [markers, setMarkers] = useState([
    {
      id: 1,
      name: "location-1",
      location: { lat: 26.823423122858426, lng: 75.81134446010292 },
    },
    {
      id: 2,
      name: "location-2",
      location: { lat: 26.843259601499273, lng: 75.80155976181011 },
    },
    {
      id: 3,
      name: "location-3",
      location: { lat: 26.838970927531278, lng: 75.80233223799111 },
    },
    {
      id: 4,
      name: "location-4",
      location: { lat: 26.834683542678942, lng: 75.81270876133264 },
    },
    {
      id: 5,
      name: "location-5",
      location: { lat: 26.83850145961273, lng: 75.79817315640308 },
    },
    {
      id: 6,
      name: "location-6",
      location: { lat: 26.83985354520347, lng: 75.79449003574918 },
    },
  ]);
  const [heatmapData, setHeatmapData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [infoWindowContent, setInfoWindowContent] = useState(null);

  const searchInputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const drawingManagerRef = useRef(null);

  const onLoadDrawingManager = (drawingManager) => {
    drawingManagerRef.current = drawingManager;
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      if (!place || !place.geometry) {
        return;
      }

      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      setZoom(15);
    }
  };

  const toggleMapType = (type) => {
    setMapType(type);
  };

  const toggleMapTheme = (theme) => {
    setMapTheme(theme);
  };

  const getMapIcon = (type) => {
    const icons = {
      roadmap: "7891/7891893.png", // Default map icon
      satellite: "18631/18631656.png", // Satellite view icon
      terrain: "18022/18022270.png", // Terrain/mountain icon
      hybrid: "3050/3050793.png", // Hybrid view icon
    };
    return icons[type] || "7891/7891893.png";
  };

  const handleCreateTerritory = () => {
    if (drawingManager) {
      drawingManager.setDrawingMode(null);
      setTimeout(() => {
        drawingManager.setDrawingMode(
          window.google.maps.drawing.OverlayType.POLYGON
        );
      }, 50);
    }
  };

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const toggleVisualization = (type) => {
    setVisualizationType(type);
  };

  const onPolygonComplete = (polygon) => {
    const newTerritory = {
      id: Date.now(),
      polygon: polygon,
      name: `Territory ${territories.length + 1}`,
    };
    setTerritories([...territories, newTerritory]);
    console.log(newTerritory, "newTerritory");
    if (drawingManager) {
      drawingManager.setDrawingMode(null);
    }
  };

  const containerStyle = {
    width: "100%",
    height: "120vh",
  };

  const handleMarkerClick = async (marker) => {
    setSelectedMarker(marker);

    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ location: marker.location }, (results, status) => {
      if (status === "OK" && results[0]) {
        const address = results[0].address_components.reduce(
          (acc, component) => {
            if (component.types.includes("street_number")) {
              acc.streetNumber = component.long_name;
            }
            if (component.types.includes("route")) {
              acc.route = component.long_name;
            }
            if (component.types.includes("postal_code")) {
              acc.postalCode = component.long_name;
            }
            return acc;
          },
          {}
        );

        setInfoWindowContent(
          <div className="p-2">
            <h3 className="font-bold text-sm mb-1">{marker.name}</h3>
            <div className="text-xs space-y-1">
              <p>{results[0].formatted_address}</p>
              {(address.streetNumber ||
                address.route ||
                address.postalCode) && (
                <div className="mt-1 pt-1 border-t border-gray-200">
                  {address.streetNumber && address.route && (
                    <p>
                      Address: {address.streetNumber} {address.route}
                    </p>
                  )}
                  {address.postalCode && (
                    <p>Postal Code: {address.postalCode}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      } else {
        setInfoWindowContent(
          <div className="p-2">
            <h3 className="font-bold text-sm">{marker.name}</h3>
            <p className="text-xs">Address details not available</p>
          </div>
        );
      }
    });
  };

  const onLoadAutocomplete = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const handleReset = () => {
    setCenter(mapOptions.defaultCenter);
    setZoom(mapOptions.defaultZoom);
    setVisualizationType("markers");
    setMapType("roadmap");
    setMapTheme("day");
    setEnableClustering(false);
    setShowGeofences(false);
    setTerritories([]);
    setSelectedMarker(null);
    setInfoWindowContent(null);

    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }

    if (autocompleteRef.current) {
      autocompleteRef.current.set("place", null);
    }
  };

  useEffect(() => {
    setHeatmapData(
      markers.map((marker) => ({
        location: new window.google.maps.LatLng(
          marker.location.lat,
          marker.location.lng
        ),
        weight: 1,
      }))
    );
  }, [markers]);

  return {
    center,
    setCenter,
    zoom,
    setZoom,
    map,
    setMap,
    visualizationType,
    setVisualizationType,
    mapType,
    setMapType,
    mapTheme,
    setMapTheme,
    enableClustering,
    setEnableClustering,
    showGeofences,
    setShowGeofences,
    drawingManager,
    setDrawingManager,
    territories,
    setTerritories,
    sidebarOpen,
    setSidebarOpen,
    markers,
    setMarkers,
    heatmapData,
    setHeatmapData,
    selectedMarker,
    setSelectedMarker,
    infoWindowContent,
    setInfoWindowContent,
    searchInputRef,
    autocompleteRef,
    drawingManagerRef,
    onPolygonComplete,
    handleMarkerClick,
    containerStyle,
    onLoad,
    onUnmount,
    handleCreateTerritory,
    getMapIcon,
    onLoadDrawingManager,
    onPlaceChanged,
    toggleMapType,
    toggleMapTheme,
    toggleVisualization,
    onLoadAutocomplete,
    handleReset,
  };
};
