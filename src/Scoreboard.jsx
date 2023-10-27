/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
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
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage("");
      })
      .catch((err) => {
        console.error("Error posting data:", err);
        if (err.response && err.response.status === 11000) {
          // 11000 is MongoDB's duplicate key error code
          setErrorMessage("Name in use");
        } else {
          setErrorMessage("An unexpected error occurred. Please try again.");
        }
      });
  };

  return (
    <>
      <Spinner open={isLoading} />
      {/* test error message but duplicates not working yet */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <TableContainer>
        <Table
          sx={{
            mt: "3rem",
          }}
          size="small"
        >
          <TableBody>
            {sortedData
              // Filter players: top 10 and any player with an empty name
              .filter((row, index) => index < 10 || row.name === "")
              .map((row, index) => (
                <TableRow key={index} sx={{ height: 10 }}>
                  {/* Get the ordinal ranking based on the original sortedData array */}
                  <TableCell
                    align="center"
                    sx={{
                      color: "success.main",
                      border: "none",
                      fontWeight: "bold",
                      padding: "0px 16px",
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
                        padding: "0px 16px",
                      }}
                    >
                      <form onSubmit={postNewPlayer}>
                        <Input
                          inputProps={{
                            maxLength: 3,
                          }}
                          type="text"
                          name="name"
                          id="playerNameInput"
                          aria-describedby="my-helper-text"
                          onChange={toUppercaseInput}
                          required
                          border="none"
                          placeholder="ABC"
                          sx={{
                            "& .MuiInput-input": {
                              textAlign: "center",
                            },
                            borderRadius: ".2rem",
                            width: "30%",

                            "@keyframes fadeInOut": {
                              "0%": {
                                backgroundColor: "transparent",
                              },
                              "50%": {
                                backgroundColor: "info.main",
                              },
                              "100%": {
                                backgroundColor: "transparent",
                              },
                            },
                            animation: "fadeInOut 3s infinite",
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
                        padding: "0px 16px",
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
                      padding: "0px 16px",
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
