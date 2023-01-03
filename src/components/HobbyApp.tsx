import React, { useState, useEffect } from "react";
import HobbyList from "./HobbyList";
import { Hobby } from "../models/models";
import "./styles.css"
import axios from "axios";
const HobbyApp: React.FC = () => {
  const [hobby, setHobby] = useState<string>("");
  const mockdata:Hobby[]= [
    { id: 1, name: "eka", isDone: false },
    { id: 2, name: "toka", isDone: false },
  ];
  const [hobbies, setHobbies] = useState<Hobby[]>(mockdata);
  const url:string = `http://localhost:3000`;


  useEffect(() => {
    axios.get(`${url}/hobbies`)
        .then(response => {
          console.log(response.data);
          // setHobbies(response.data)
        });
  }, [url])
  

  return(  <div className="HobbyApp">
    <ul className="nav">
      <li>Navi</li>
      <li>Navi</li>
    </ul>
    <HobbyList hobbies={hobbies} setHobbies={setHobbies} />
  </div>)

};

export default HobbyApp;
