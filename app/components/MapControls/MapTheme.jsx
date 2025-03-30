const MapTheme = ({ mapTheme, toggleMapTheme }) => {
  return (
    <div className="mb-4 bg-[#f5f5f7] py-2 rounded-xl">
      <div className="place-items-center">
        <p className="font-semibold text-[#13809C]">Map Theme</p>
      </div>

      <div className="flex items-center justify-between space-x-4 px-4 py-2">
        <div className="items-center justify-center">
          <div
            className={`border ${
              mapTheme === "day" ? "border-blue-500" : "border-[#dddada]"
            } px-16 py-3 rounded-xl`}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/869/869869.png"
              alt="Day"
              className="h-14 w-14"
            />
          </div>
          <label className="flex items-center cursor-pointer px-16 py-2">
            <input
              type="radio"
              name="mapTheme"
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              checked={mapTheme === "day"}
              onChange={() => toggleMapTheme("day")}
            />
            <span className="text-sm font-medium text-gray-700 ml-2">Day</span>
          </label>
        </div>

        <div className="items-center justify-center">
          <div
            className={`border ${
              mapTheme === "night" ? "border-blue-500" : "border-[#dddada]"
            } px-16 py-3 rounded-xl`}
          >
            <img
              src="https://cdn-icons-png.freepik.com/256/4867/4867890.png?semt=ais_hybrid"
              alt="Night"
              className="h-14 w-14"
            />
          </div>
          <label className="flex items-center cursor-pointer px-16 py-2">
            <input
              type="radio"
              name="mapTheme"
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              checked={mapTheme === "night"}
              onChange={() => toggleMapTheme("night")}
            />
            <span className="text-sm font-medium text-gray-700 ml-2">
              Night
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MapTheme;
