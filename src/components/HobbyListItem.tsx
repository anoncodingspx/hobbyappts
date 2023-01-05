import React from "react";
import {Hobby} from "../models/models";
interface props {
    hobbies:Hobby[];
    hobby: Hobby;
    setHobbies: React.Dispatch<React.SetStateAction<Hobby[]>>;
}
const HobbyListItem:React.FC<props> = ({hobbies, hobby, setHobbies}) => {
    
  console.log(hobby.hobbyname)
  return (
    <div className="HobbyListItem">{hobby.hobbyname}</div>
  )
}

export default HobbyListItem