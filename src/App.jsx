import React, { useState } from "react";

import Navbar from "./components/Navbar";
import PetList from "./components/PetList";
import { pets as petsArr } from "./assets/data";

const App = () => {
  const [pets, setPets] = useState(petsArr);
  function onSearch(search) {
    if (!search) return setPets(petsArr);
    const newPets = pets.filter(
      ({ id, name, type, location, race }) =>
        id.toLowerCase().includes(search) ||
        name.toLowerCase().includes(search) ||
        type.toLowerCase().includes(search) ||
        location.toLowerCase().includes(search) ||
        race.toLowerCase().includes(search)
    );
    setPets(newPets);
  }
  return (
    <>
      <Navbar handleSearch={onSearch} />
      <PetList pets={pets} />
    </>
  );
};

export default App;
