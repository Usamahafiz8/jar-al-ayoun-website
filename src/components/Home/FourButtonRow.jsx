import React from "react";

function FourButtonRow() {
  return (
    <div className="flex items-center justify-between">
      <div className="bg-red-600 text-white p-4 rounded-lg cursor-pointer hover:bg-red-400 mx-10 w-64">
        <div className="text-xl font-bold">Button 1</div>
        <p className="text-base">Description 1</p>
      </div>

      <div className="bg-red-600 text-white p-4 rounded-lg cursor-pointer hover:bg-red-400 mx-2 w-64">
        <div className="text-xl font-bold">Button 2</div>
        <p className="text-base">Description 2</p>
      </div>

      <div className="bg-red-600 text-white p-4 rounded-lg cursor-pointer hover:bg-red-400 mx-2 w-64">
        <div className="text-xl font-bold">Button 3</div>
        <p className="text-base">Description 3</p>
      </div>

      <div className="bg-red-600 text-white p-4 rounded-lg cursor-pointer hover:bg-red-400 mx-10 w-64">
        <div className="text-xl font-bold">Button 4</div>
        <p className="text-base">Description 4</p>
      </div>
    </div>
  );
}

export default FourButtonRow;
