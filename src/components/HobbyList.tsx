import React from "react";
import HobbyListItem from "./HobbyListItem";
import { Hobby } from "../models/models";
interface props {
  hobbies: Hobby[];
  setHobbies: React.Dispatch<React.SetStateAction<Hobby[]>>;
}
const HobbyList: React.FC<props> = ({ hobbies, setHobbies }) => {
  return (
    <div className="hobbies">
      {hobbies.map((singlehobby) => (
        <HobbyListItem
          hobbies={hobbies}
          hobby={singlehobby}
          key={singlehobby.id}
          setHobbies={setHobbies}
        />
      ))
      
      
      }
    </div>
  );
};

export default HobbyList;
