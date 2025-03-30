"use client";

const CreateTerritoryButton = ({ handleCreateTerritory }) => {
  return (
    <button
      className="w-full bg-green-500 text-white py-2 rounded"
      onClick={handleCreateTerritory}
    >
      Create Territory
    </button>
  );
};

export default CreateTerritoryButton;
