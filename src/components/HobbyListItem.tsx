import { Types } from "mongoose";
import React from "react";
import {Hobby} from "../models/models";
interface props {
    hobbies:Hobby[];
    hobby: Hobby;
    setHobbies: React.Dispatch<React.SetStateAction<Hobby[]>>;
}
const HobbyListItem:React.FC<props> = ({hobbies, hobby, setHobbies}) => {
    const handleDeleteHobby = (id:Types.ObjectId) => {

    };
  console.log(hobby.hobbyname)
  return (
    <div className="HobbyListItem">
    <div>{hobby.hobbyname}</div>
   <span className="delete" onClick={() => {
    handleDeleteHobby(hobby.id)
   }}>X</span>
    
    
    </div>
  )
}

export default HobbyListItem