import { useState } from "react";
import actorsList from "../contacts.json";

const initContacts = actorsList.splice(0, 5);

function ActorsData() {
  const [actors, setList] = useState(initContacts);
  const [outRemaining, setOutRemaining] = useState(actorsList);

  function addRandom() {
    if (outRemaining && outRemaining.length > 0) {
      let index = Math.floor(Math.random() * (outRemaining.length - 0) + 0);
      setList([...actors, outRemaining[index]]);
      let filtered = outRemaining.filter((contact, i) => {
        return i !== index;
      });
      setOutRemaining(filtered);
    }
  }

  function byPopularity() {
    let sorted = actors.sort((a, b) => b.popularity - a.popularity);
    setList([...sorted]);
  }

  function byName() {
    let sorted = actors.sort((a, b) => a.name.localeCompare(b.name));
    setList([...sorted]);
  }

  function deleteActor(id) {
    let filtered = actors.filter((actors) => {
      return actors.id !== id;
    });
    setList(filtered);
  }

  return (
    <div className="table">
      <h2>IronContacts</h2>

      <div>
        <button onClick={addRandom} className="btn-top">
          {" "}
          Add Random Contact{" "}
        </button>
        <button onClick={byPopularity} className="btn-top">
          {" "}
          Sort by Popularity{" "}
        </button>
        <button onClick={byName} className="btn-top">
          {" "}
          Sort by Name{" "}
        </button>
      </div>

      {actors.map((actors) => {
        return (
          <table>
            <tr>
              <th> Picture </th>
              <th> Name </th>
              <th>Popularity</th>
              <th> Won Oscar</th>
              <th> Won Emmy</th>
              <th> Actions </th>
            </tr>
            <tr>
              <td>
                {" "}
                <img
                  src={actors.pictureUrl}
                  width="80px"
                  height="100px"
                  alt="actorphoto"
                />{" "}
              </td>
              <td> {actors.name} </td>
              <td> {actors.popularity}</td>
              <td>{actors.wonOscar ? "🏆" : "X"}</td>
              <td>{actors.wonEmmy ? "🏆" : "X"}</td>
              <td>
                {" "}
                <button
                  onClick={() => deleteActor(actors.id)}
                  class="btn-delete"
                >
                  {" "}
                  Delete{" "}
                </button>{" "}
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default ActorsData;
