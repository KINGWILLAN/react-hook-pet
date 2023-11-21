import React from "react";
import { Button, Card, Divider } from "antd";

const PetCard = ({ name, race, type, adopted, location, photo }) => (
  <Card
    className="shadow-md"
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={photo}
        className="w-full h-[300px] object-cover"
      />
    }
  >
    {/* <Meta
      avatar={
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
      }
      title={name}
      description={race}
    /> */}
    <div className="flex flex-col space-y-5">
      <h1 className="text-[17px] font-[500] my-0">{name}</h1>
      <div className="border-red-200 border border-solid">
        <Button className="my-btn-red">{type}</Button>
      </div>
      {/* <Divider plain /> */}
      <div className="flex justify-between border-green-200 border border-solid">
        <Button className="my-btn">{race}</Button>
        <Button className="my-btn-green">{location}</Button>
      </div>
      <div className="border-gray-200 border border-solid">
        <Button className="my-btn font-[600]">
          {adopted ? "Adopted" : "Adopt"}
        </Button>
      </div>
    </div>
  </Card>
);

export default PetCard;
