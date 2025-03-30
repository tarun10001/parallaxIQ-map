const VisualizationOptions = ({
  enableClustering,
  setEnableClustering,
  showGeofences,
  setShowGeofences,
}) => {
  return (
    <div className="mb-4 bg-[#f5f5f7] py-2 rounded-xl">
      <div className="place-items-center mb-4">
        <p className="font-semibold text-[#13809C]">Visualization Options</p>
      </div>
      <div className="mb-4 border border-gray-200 p-4 rounded-xl mx-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Enable Clustering
          </span>
          <button
            type="button"
            className={`relative inline-flex cursor-pointer h-5 w-9 items-center rounded-full transition-colors ${
              enableClustering ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setEnableClustering(!enableClustering)}
          >
            <span
              className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-sm transition-transform ${
                enableClustering ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="mb-4 border border-gray-200 p-4 rounded-xl mx-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Show Geofences
          </span>
          <button
            type="button"
            className={`relative inline-flex h-5 w-9 cursor-pointer items-center rounded-full transition-colors ${
              showGeofences ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setShowGeofences(!showGeofences)}
          >
            <span
              className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-sm transition-transform ${
                showGeofences ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisualizationOptions;
