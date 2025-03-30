"use client";
import MapComponent from "./components/MapComponent";
import { useGoogleMaps } from "./hooks/useGoogleMaps";

export default function Home() {
  const { isLoaded } = useGoogleMaps();

  return (
    <div className="h-screen w-full">
      {isLoaded ? (
        <MapComponent />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p>Loading map...</p>
        </div>
      )}
    </div>
  );
}
