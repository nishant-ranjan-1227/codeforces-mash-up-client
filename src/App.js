import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "fontsource-roboto";
import axios from "axios";

function App() {
  let [userid, setUserid] = useState("");
  let [minRating, setMinRating] = useState(0);
  let [maxRating, setMaxRating] = useState(0);
  let [tags, setTags] = useState([]);
  let [number, setNumber] = useState(0);

  let url = "http://localhost:9000/testAPI";

  const handleChange = (e) => {
    let data = e.target.value;
    setUserid(data);
  };

  const handleMinRating = (e) => {
    let data = e.target.value;
    setMinRating(data);
  };

  const handleMaxRating = (e) => {
    let data = e.target.value;
    setMaxRating(data);
  };

  const handleNumber = (e) => {
    let data = e.target.value;
    setNumber(data);
  };

  const handleTags = (e) => {
    let data = tags;
    console.log(e.target.value);
    console.log(data);
    setTags(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let value = {
      userID: userid,
      minR: minRating,
      maxR: maxRating,
      num: number,
    };

    axios
      .post(url, value)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className="App" onSubmit={handleSubmit}>
        <label>
          UserID :
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Enter Maximum Rating :
          <input type="text" name="name" onChange={handleMaxRating} />
        </label>
        <br />
        <label>
          Enter Minimum Rating :
          <input type="text" name="name" onChange={handleMinRating} />
        </label>
        <br />
        <label>
          Enter Number of Problem :
          <input type="text" name="name" onChange={handleNumber} />
        </label>

        <br />
        <label>Enter your tags Name</label>
        <br />
        <div>
          <span>
            <Checkbox value="dp" onChange={handleTags} />
            dp
          </span>
          <span>
            <Checkbox value="math" onChange={handleTags} />
            math
          </span>
          <span>
            <Checkbox value="implementation" onChange={handleTags} />
            implementation
          </span>
        </div>
        <input type="submit" name="name" />
      </form>
      <text> {userid} </text>
      <text> {number} </text>
      <text> {minRating} </text>
      <text> {maxRating} </text>
      <text> {tags} </text>
    </div>
  );
}

export default App;
