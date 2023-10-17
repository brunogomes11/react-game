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

function Scoreboard(score) {
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

  // hard code a new player to test
  let newPlayer = { name: "", score: score.score };

  // creates a new array by combining data and the newPlayer
  let updatedData = [...data, newPlayer];
  // sorts the new array
  let sortedData = updatedData.sort((a, b) => b.score - a.score);

  // upper case the input as the player types
  const toUppercaseInput = (e) => {
    e.target.value = e.target.value.toUpperCase();
    setPlayerName(e.target.value);
  };

  const postNewPlayer = (e) => {
    e.preventDefault();
    const newPlayer = { name: playerName, score: score.score };

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
        {sortedData.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{getOrdinalSuffix(index + 1)}</TableCell>
            {row.name ? (
              <TableCell>{row.name}</TableCell>
            ) : (
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
            )}
            <TableCell>{row.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Scoreboard;
