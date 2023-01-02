import React, { useState } from "react";
import HobbyList from "./HobbyList";
import { Hobby } from "../models/models";

const HobbyApp: React.FC = () => {
  const [hobby, setHobby] = useState<string>("");
  const [hobbies, setHobbies] = useState<Hobby[]>([
    { id: 1, hobby: "eka", isDone: false },
    { id: 2, hobby: "toka", isDone: false },
  ]);

  return <HobbyList hobbies={hobbies} setHobbies={setHobbies} />;
};

export default HobbyApp;
