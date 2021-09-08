import { useState } from "react";

import actorsList from "../contacts.json";

function ActorsData() {
  const [actors, setActors] = useState(actorsList);

  return (
    <div>
      <h2>IronContacts</h2>
      <div>
        <button className="btn-rdm"> Add Random Contact </button>
        <button className="btn-sort-popularity"> Sort by Popularity </button>
        <button className="btn-sort-name"> Sort by Name </button>
      </div>
      
      {actors.map((actors) => {
        return (
          <table>
            <tr>
              <th> Picture </th>
              <th> Name: </th>
              <th>Popularity:</th>
              <th> wonOscar</th>
              <th> wonEmmy</th>
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
              <td>{actors.wonOscar} 🏆</td>
              <td>{actors.wonEmmy}🏆</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default ActorsData;
