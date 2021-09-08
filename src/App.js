// src/App.js
import "./App.css";
import contacts from "./contacts.json";

export default function App() {
  return (
    <div key={contacts} className="App">
      <h1>IronContacts</h1>
      {contacts.map((actors) => {
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
              <td>{actors.wonOscar}🏆</td>
              <td>{actors.wonEmmy}🏆</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}
