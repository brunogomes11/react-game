import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

import axios from "axios";

function Scoreboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/scores")
      .then((res) => {
        console.log(res.data);
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
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{getOrdinalSuffix(index + 1)}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Scoreboard;
