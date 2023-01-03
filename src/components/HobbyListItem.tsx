import React from "react";
import {Hobby} from "../models/models";
interface props {
    hobbies:Hobby[];
    hobby: Hobby;
    setHobbies: React.Dispatch<React.SetStateAction<Hobby[]>>;
}
const HobbyListItem:React.FC<props> = ({hobbies, hobby, setHobbies}) => {
    
  console.log(hobby.name)
  return (
    <div>{hobby.name}</div>
  )
}

export default HobbyListItem