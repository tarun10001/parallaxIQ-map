import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import VisualizationType from "./MapControls/VisualizationType";
import MapType from "./MapControls/MapType";
import MapTheme from "./MapControls/MapTheme";
import VisualizationOptions from "./MapControls/VisualizationOptions";
import CreateTerritoryButton from "./MapControls/CreateTerritoryButton";
import SearchAndReset from "./MapControls/SearchAndReset";

export const MapSidebar = ({ sidebarOpen, setSidebarOpen, ...props }) => {
  return (
    <>
      {!sidebarOpen && (
        <button
          className="absolute z-20 left-2 top-2 bg-white p-2 rounded shadow-md cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <GiHamburgerMenu className="w-[28px] h-[28px]" />
        </button>
      )}
      <div
        className={`absolute z-20 left-0 mb-2 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex p-2 justify-between items-center shadow-md bg-[#007C99]">
          <div className="text-white py-2">
            <p className="font-bold px-2">Map Settings</p>
          </div>
          <div className="">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 text-white cursor-pointer"
            >
              <IoCloseSharp className="w-[28px] h-[28px]" />
            </button>
          </div>
        </div>

        <SearchAndReset {...props.searchAndResetProps} />

        <div className="bg-white p-4 rounded shadow-md">
          <VisualizationType {...props.visualizationTypeProps} />
          <MapType {...props.mapTypeProps} />
          <MapTheme {...props.mapThemeProps} />
          <VisualizationOptions {...props.visualizationOptionsProps} />
          <CreateTerritoryButton {...props.createTerritoryProps} />
        </div>
      </div>
    </>
  );
};
