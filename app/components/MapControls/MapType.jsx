const MapType = ({ toggleMapType, getMapIcon }) => {
  const mapTypes = ["roadmap", "satellite", "terrain", "hybrid"];

  return (
    <div className="mb-4 bg-[#f5f5f7] py-2 rounded-xl">
      <div className="place-items-center mb-4">
        <p className="font-semibold text-[#13809C]">Map Type</p>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 py-2">
        {mapTypes.map((type) => (
          <div
            className="border border-[#dddada] px-11 py-3 rounded-xl"
            key={type}
          >
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="mapType"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                onChange={() => toggleMapType(type)}
                defaultChecked={type === "roadmap"}
              />
              <span className="flex items-center space-x-2">
                <img
                  src={`https://cdn-icons-png.flaticon.com/128/${getMapIcon(
                    type
                  )}`}
                  alt={type}
                  className="h-5 w-5"
                />
                <span className="text-sm font-medium text-gray-700">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapType;
