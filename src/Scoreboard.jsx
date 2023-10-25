/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Input,
} from "@mui/material";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

import axios from "axios";

function Scoreboard({ score, isGameOver, isLoading, setIsLoading }) {
  const [data, setData] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/scores")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
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

  let sortedData = data.sort((a, b) => b.score - a.score);
  // check if isGameOver before create a new player and updating the data
  if (isGameOver && !isSubmitted) {
    let newPlayer = { name: "", score };
    let updatedData = [...data, newPlayer];
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
      .post("/api/scores", newPlayer)
      .then((res) => {
        console.log("Data posted successfully:", res.data);
        setData([...data, newPlayer]);
        setPlayerName("");
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error("Error posting data:", err);
      });
  };

  return (
    <>
      <Spinner open={isLoading} />
      <TableContainer
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Table
          sx={{
            mt: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          size="small"
        >
          <TableBody sx={{ border: "none" }}>
            {sortedData
              // Filter players: top 10 and any player with an empty name
              .filter((row, index) => index < 10 || row.name === "")
              .map((row, index) => (
                <TableRow key={index} sx={{ border: "none" }}>
                  {/* Get the ordinal ranking based on the original sortedData array */}
                  <TableCell
                    align="center"
                    sx={{
                      color: "success.main",
                      border: "none",
                      fontSize: ".9rem",
                      fontWeight: "bold",
                    }}
                  >
                    {getOrdinalSuffix(sortedData.indexOf(row) + 1)}
                  </TableCell>

                  {/* element for player to input their name */}
                  {row.name === "" && !isSubmitted ? (
                    <TableCell
                      align="center"
                      sx={{
                        color: "info.main",
                        border: "none",
                      }}
                    >
                      <form onSubmit={postNewPlayer}>
                        <Input
                          maxLength={3}
                          type="text"
                          name="name"
                          id="playerNameInput"
                          aria-describedby="my-helper-text"
                          onChange={toUppercaseInput}
                          required
                          border="none"
                          sx={{
                            fontSize: ".9rem",
                            backgroundColor: "rgba(255, 0, 0, 0.25)",
                            borderRadius: ".2rem",
                            width: "30%",
                          }}
                        />
                      </form>
                    </TableCell>
                  ) : (
                    // player name
                    <TableCell
                      align="center"
                      sx={{
                        color: "info.main",
                        border: "none",
                        fontSize: ".9rem",
                      }}
                    >
                      {row.name}
                    </TableCell>
                  )}
                  {/* player score */}
                  <TableCell
                    align="center"
                    sx={{
                      color: "warning.main",
                      align: "center",
                      border: "none",
                      fontSize: ".9rem",
                    }}
                  >
                    {row.score}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Scoreboard;
