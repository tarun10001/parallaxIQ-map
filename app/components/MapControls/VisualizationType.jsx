const VisualizationType = ({ visualizationType, toggleVisualization }) => {
  return (
    <div className="mb-4 bg-[#f5f5f7] py-2 rounded-xl">
      <div className="place-items-center mb-4">
        <p className="font-semibold text-[#13809C]">Visualization Type</p>
      </div>
      <div className="flex items-center space-x-4 px-4 py-2">
        <div className="border border-[#dddada] px-14 py-3 rounded-xl">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="visualization"
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              checked={visualizationType === "markers"}
              onChange={() => toggleVisualization("markers")}
            />
            <span className="text-sm font-medium text-gray-700">Markers</span>
          </label>
        </div>
        <div className="border border-[#dddada] px-16 py-3 rounded-xl">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="visualization"
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              checked={visualizationType === "heatmap"}
              onChange={() => toggleVisualization("heatmap")}
            />
            <span className="text-sm font-medium text-gray-700">Heatmap</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default VisualizationType;
