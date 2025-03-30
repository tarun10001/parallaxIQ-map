const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const mapOptions = {
  googleMapApiKey: GOOGLE_MAPS_API_KEY,
  defaultCenter: { lat: 26.9124, lng: 75.7873 },
  defaultZoom: 10,
  mapTypes: ["roadmap", "satellite", "terrain", "hybrid"],
  mapThemes: {
    day: [],
    night: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    ],
  },
};
