import React, { useState, useEffect } from "react";
import HobbyList from "./HobbyList";
import { Hobby } from "../models/models";
import "./styles.css";
import axios from "axios";
import AddHobby from "./AddHobby";
const HobbyApp: React.FC = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const url: string = `http://localhost:3001`;

  useEffect(() => {
    axios.get(`${url}/hobbies`).then((response) => {
      console.log(response.data);
      setHobbies(response.data);
      // setHobbies(mockdata)
    });
  }, [url]);

  return (
    <div className="HobbyApp">
      <ul className="nav">
        <li>Navi</li>
        
      </ul>
      <AddHobby hobbies={hobbies} setHobbies={setHobbies} />
      <HobbyList hobbies={hobbies} setHobbies={setHobbies} />
    </div>
  );
};

export default HobbyApp;
