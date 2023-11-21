import React, { useState } from "react";
import { Input, Space } from "antd";
const { Search } = Input;

const Navbar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  function onChangeInputSearch(e) {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  }
  return (
    <nav className="shadow py-1">
      <div className="max-w-[1100px] mx-auto ">
        <div className="flex  justify-between items-center">
          <div className="flex items-center font-sans gap-3">
            <img
              src="https://th.bing.com/th/id/R.a26c05b2f779ad4e653ac61570bf503f?rik=FmK1XUlx6ruWvg&pid=ImgRaw&r=0"
              alt="shoplogo"
              className="w-20 h-20 rounded-full shadow"
            />
            <p className="font-bold text-orange-600"> OBO PET SHOP</p>
          </div>
          <div>
            <Search
              placeholder="input search text"
              onChange={onChangeInputSearch}
              enterButton
              value={search}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
