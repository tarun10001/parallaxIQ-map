"use client";
import { useMapControls } from "../hooks/useMapControls";
import { MapSidebar } from "./MapSidebar";
import { MapVisualization } from "./MapVisualization";

const MapComponent = () => {
  const {
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
    sidebarOpen,
    searchInputRef,
    autocompleteRef,
    onLoadAutocomplete,
    onPlaceChanged,
    handleReset,
    toggleVisualization,
    toggleMapType,
    toggleMapTheme,
    handleCreateTerritory,
    onLoad,
    onUnmount,
    onLoadDrawingManager,
    onPolygonComplete,
    handleMarkerClick,
    setSelectedMarker,
    setInfoWindowContent,
    setSidebarOpen,
    getMapIcon,
    setEnableClustering,
    setShowGeofences,
    setDrawingManager,
  } = useMapControls();

  const containerStyle = {
    width: "100%",
    height: "120vh",
  };

  return (
    <>
      <MapSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        searchAndResetProps={{
          onLoadAutocomplete,
          onPlaceChanged,
          handleReset,
          searchInputRef,
          autocompleteRef,
        }}
        visualizationTypeProps={{
          visualizationType,
          toggleVisualization,
        }}
        mapTypeProps={{
          mapType,
          toggleMapType,
          getMapIcon,
        }}
        mapThemeProps={{
          mapTheme,
          toggleMapTheme,
        }}
        visualizationOptionsProps={{
          enableClustering,
          setEnableClustering,
          showGeofences,
          setShowGeofences,
        }}
        createTerritoryProps={{
          handleCreateTerritory,
        }}
      />

      <MapVisualization
        containerStyle={containerStyle}
        center={center}
        zoom={zoom}
        mapType={mapType}
        mapTheme={mapTheme}
        visualizationType={visualizationType}
        enableClustering={enableClustering}
        showGeofences={showGeofences}
        markers={markers}
        heatmapData={heatmapData}
        territories={territories}
        selectedMarker={selectedMarker}
        infoWindowContent={infoWindowContent}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onLoadDrawingManager={onLoadDrawingManager}
        onPolygonComplete={onPolygonComplete}
        handleMarkerClick={handleMarkerClick}
        setSelectedMarker={setSelectedMarker}
        setInfoWindowContent={setInfoWindowContent}
        setDrawingManager={setDrawingManager}
        toggleVisualization={toggleVisualization}
      />
    </>
  );
};

export default MapComponent;
