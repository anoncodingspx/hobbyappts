import React, { MutableRefObject, useRef } from "react";
import axios from "axios";
const AddHobbyForm: React.FC = () => {
  //useRefs for the AddHobby component
  const hobbynameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const outdoorsRef = useRef() as MutableRefObject<HTMLInputElement>;
  const indoorsRef = useRef() as MutableRefObject<HTMLInputElement>;
  const toolsNeededRef = useRef() as MutableRefObject<HTMLInputElement>;
  const humansNeededRef = useRef() as MutableRefObject<HTMLInputElement>;
  const tagsRef = useRef() as MutableRefObject<HTMLInputElement>;
  const url: string = `http://localhost:3001`;
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      hobbyname: hobbynameRef.current?.value,
      outside: outdoorsRef.current?.checked,
      inside: indoorsRef.current?.checked,
      toolsneeded: toolsNeededRef.current?.checked,
      otherhumansneeded: humansNeededRef.current?.checked,
      tags: tagsRef.current?.value,
    };
    console.log(data);

    if (data.hobbyname === "") {
      console.log("Your hobby didn't include enough required info to be added");
    } else {
      axios.post(`${url}/hobbies`, data).then((response) => {
        console.log(response.data);
        // setHobbies(response.data);
        // // setHobbies(mockdata)
      });
    }

    hobbynameRef.current.value = "";
    outdoorsRef.current.checked = false;
    indoorsRef.current.checked = false;
    toolsNeededRef.current.checked = false;
    humansNeededRef.current.checked = false;
    tagsRef.current.value = "";

  }; // handleAddSubmit
  return (
    <div>
      <form className="addForm" onSubmit={handleAddSubmit}>
        <fieldset>
          <legend>Obligatory hobby information</legend>
          <div>
            <label htmlFor="newHobbyName">Name of the new hobby</label>
            <input type="text" ref={hobbynameRef} required />
          </div>
        </fieldset>

        <fieldset>
          <legend>Other information about the hobby</legend>
          <div className="choices">
            <div>
              <input
                type="checkbox"
                ref={outdoorsRef}
                name="outsidehobbybool"
                value="outsidehobbybool"
              />
              <label htmlFor="outsidehobbybool">Outdoors hobby</label>
            </div>
            <div>
              <input
                type="checkbox"
                ref={indoorsRef}
                name="insidehobbybool"
                value="insidehobbybool"
              />
              <label htmlFor="insidehobbybool">Indoors hobby</label>
            </div>
            <div>
              <input
                type="checkbox"
                ref={toolsNeededRef}
                name="toolsbool"
                value="toolsbool"
              />
              <label htmlFor="toolsbool">Tools needed</label>
            </div>
            <div>
              <input
                type="checkbox"
                ref={humansNeededRef}
                name="peopleneededbool"
                value="peopleneededbool"
              />
              <label htmlFor="peopleneededbool">Other people needed</label>
            </div>
          </div>
          <div id="tagsdiv">
            <label htmlFor="hobbytags">
              Tags for the hobby (separate with a comma)
            </label>
            <br />
            <input type="text" ref={tagsRef} />
            <br />
          </div>
        </fieldset>
        <input type="submit" className="addButton" value="Add hobby"></input>
      </form>
    </div>
  );
};

export default AddHobbyForm;
