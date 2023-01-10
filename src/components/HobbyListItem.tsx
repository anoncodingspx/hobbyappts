import axios from "axios";
import { Types } from "mongoose";
import React from "react";
import { Hobby } from "../models/models";
interface props {
  hobbies: Hobby[];
  hobby: Hobby;
  setHobbies: React.Dispatch<React.SetStateAction<Hobby[]>>;
}
const HobbyListItem: React.FC<props> = ({ hobbies, hobby, setHobbies }) => {
  const url: string = `http://localhost:3001`;
  const handleDeleteHobby = (deleteId: Types.ObjectId) => {
    axios
      .delete(`${url}/hobbies/${deleteId}`)
      .then((response) => {
        setHobbies(hobbies.filter( hobbyelem => hobbyelem._id !== deleteId));
        console.log("Successful deletion");
      }
      ).catch((error) => {
        console.error("There was an error!", error);
      });
  };
  console.log(hobby.hobbyname);
  console.log(hobby._id);
  return (
    <div className="HobbyListItem">
      <div>{hobby.hobbyname}</div>
      <span
        className="delete"
        onClick={() => {
          handleDeleteHobby(hobby._id);
        }}
      >
        Delete
      </span>
    </div>
  );
};

export default HobbyListItem;
