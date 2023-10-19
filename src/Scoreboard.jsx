import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Input,
} from "@mui/material";
import { useEffect, useState } from "react";

import axios from "axios";

function Scoreboard({ score, isGameOver }) {
  const [data, setData] = useState([]);
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/scores")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("Error fetching scores:", err));
  }, []);

  function getOrdinalSuffix(number) {
    const lastDigit = number % 10;

    if (lastDigit === 1) {
      return number + "st";
    } else if (lastDigit === 2) {
      return number + "nd";
    } else if (lastDigit === 3) {
      return number + "rd";
    } else {
      return number + "th";
    }
  }

  console.log("outside if statement", isGameOver);
  let sortedData = data.sort((a, b) => b.score - a.score);
  // // check if isGameOver before create a new player and updating the data
  if (isGameOver) {
    console.log("inside if statement", isGameOver);
    let newPlayer = { name: "", score };

    // creates a new array by combining data and the newPlayer
    let updatedData = [...data, newPlayer];

    // sorts the new array
    sortedData = updatedData.sort((a, b) => b.score - a.score);
  }

  // upper case the input as the player types
  const toUppercaseInput = (e) => {
    e.target.value = e.target.value.toUpperCase();
    setPlayerName(e.target.value);
  };

  const postNewPlayer = (e) => {
    e.preventDefault();
    const newPlayer = { name: playerName, score };

    axios
      .post("http://localhost:5000/api/scores", newPlayer)
      .then((res) => {
        console.log("Data posted successfully:", res.data);
        setData([...data, newPlayer]);
        setPlayerName("");
      })
      .catch((err) => {
        console.error("Error posting data:", err);
      });
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Rank</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Points</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map((row, index) =>
          // check if index < 10
          index < 10 ? (
            <TableRow key={index}>
              <TableCell>{getOrdinalSuffix(index + 1)}</TableCell>
              {/* if the isGameOver is false, render the row.name only and not the form */}
              {row.name === "" ? (
                <TableCell>
                  <form onSubmit={postNewPlayer}>
                    <Input
                      name="name"
                      id="playerNameInput"
                      aria-describedby="my-helper-text"
                      onChange={toUppercaseInput}
                      required
                    />
                  </form>
                </TableCell>
              ) : (
                <TableCell>{row.name}</TableCell>
              )}
              <TableCell>{row.score}</TableCell>
            </TableRow>
          ) : null
        )}
      </TableBody>
    </Table>
  );
}

export default Scoreboard;
