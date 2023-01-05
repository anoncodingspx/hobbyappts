import React, { useState, useEffect, useRef } from "react";
import HobbyList from "./HobbyList";
import { Hobby } from "../models/models";
import "./styles.css"
import axios from "axios";
import AddHobby from "./AddHobby";
const HobbyApp: React.FC = () => {
  const [hobby, setHobby] = useState<string>("");
  // const mockdata:Hobby[]= [
  //   { id: 1, name: "first", isDone: false },
  //   { id: 2, name: "second", isDone: false },
  // ];

  
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const url:string = `http://localhost:3001`;


  useEffect(() => {
    axios.get(`${url}/hobbies`)
        .then(response => {
          console.log(response.data);
          setHobbies(response.data)
          // setHobbies(mockdata)
        });
  }, [url])
  

  return(  <div className="HobbyApp">
    <ul className="nav">
      <li>Navi</li>
      <li>Navi</li>
    </ul>
    <AddHobby />
    <HobbyList hobbies={hobbies} setHobbies={setHobbies} />
  </div>)

};

export default HobbyApp;
