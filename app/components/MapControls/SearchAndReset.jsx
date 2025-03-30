import { Autocomplete } from "@react-google-maps/api";

const SearchAndReset = ({
  onLoadAutocomplete,
  onPlaceChanged,
  handleReset,
  searchInputRef,
}) => {
  return (
    <div className="bg-white p-2 rounded shadow-md w-full flex items-center justify-between">
      <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search places..."
          className="p-2 border border-gray-300 rounded w-[380px] ml-2"
        />
      </Autocomplete>
      <button
        onClick={handleReset}
        className="px-3 py-3 mr-2 text-sm bg-gray-100 rounded hover:bg-gray-200"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchAndReset;
