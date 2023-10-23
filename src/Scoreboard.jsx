/* eslint-disable react/prop-types */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
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
            <Table sx={{ marginBottom: "200px", width: "100%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{ color: "success.main", padding: "0 50px" }}
                        >
                            Rank
                        </TableCell>
                        <TableCell
                            sx={{ color: "info.main", padding: "0 50px" }}
                        >
                            Name
                        </TableCell>
                        <TableCell
                            sx={{ color: "warning.main", padding: "0 50px" }}
                        >
                            Points
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData
                        // Filter players: top 10 and any player with an empty name
                        .filter((row, index) => index < 10 || row.name === "")
                        .map((row, index) => (
                            <TableRow key={index}>
                                {/* Get the ordinal ranking based on the original sortedData array */}
                                <TableCell sx={{ color: "success.main" }}>
                                    {getOrdinalSuffix(
                                        sortedData.indexOf(row) + 1
                                    )}
                                </TableCell>
                                {row.name === "" && !isSubmitted ? (
                                    <TableCell sx={{ color: "info.main" }}>
                                        <form onSubmit={postNewPlayer}>
                                            <Input
                                                name="name"
                                                id="playerNameInput"
                                                aria-describedby="my-helper-text"
                                                onChange={toUppercaseInput}
                                                minLength="3"
                                                required
                                            />
                                        </form>
                                    </TableCell>
                                ) : (
                                    <TableCell
                                        sx={{
                                            color: "info.main",
                                            align: "center",
                                        }}
                                    >
                                        {row.name}
                                    </TableCell>
                                )}
                                <TableCell
                                    sx={{
                                        color: "warning.main",
                                    }}
                                >
                                    {row.score}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </>
    );
}

export default Scoreboard;
