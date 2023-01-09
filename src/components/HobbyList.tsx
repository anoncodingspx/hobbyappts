import React from "react";
import HobbyListItem from "./HobbyListItem";
import { Hobby } from "../models/models";
interface props {
  hobbies: Hobby[];
  setHobbies: React.Dispatch<React.SetStateAction<Hobby[]>>;
}
const HobbyList: React.FC<props> = ({ hobbies, setHobbies }) => {
  return (
    <div className="HobbyList">
      {hobbies.map((singlehobby) => (
          <HobbyListItem
            hobbies={hobbies}
            hobby={singlehobby}
            setHobbies={setHobbies}
            key={singlehobby.id}
          />
      ))}
    </div>
  );
};

export default HobbyList;
