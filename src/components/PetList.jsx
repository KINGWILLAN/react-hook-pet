import React, { useState } from "react";
import PetCard from "./PetCard";
const PetList = ({ pets }) => {
  return (
    <div className="my-8 max-w-[1100px] px-2 mx-auto grid justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>
    </div>
  );
};

export default PetList;
