import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { useEffect } from "react";

const sampleData = [
    { rank: 1, name: "Bruno", points: 500 },
    { rank: 2, name: "Joao", points: 400 },
];

function Scoreboard() {

    useEffect(()=>{
        axios
    })

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
                {sampleData.map((row) => (
                    <TableRow key={row.rank}>
                        <TableCell>{row.rank}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.points}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default Scoreboard;
