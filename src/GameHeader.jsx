/* eslint-disable react/prop-types */
import { Typography, Grid } from "@mui/material";

function GameHeader({ score, currentQuestionIndex, timer, remainingLives }) {
    return (
        <Grid container className="game-header" spacing={4} marginBottom="50px">
            <Grid item xs={6}>
                <Typography
                    color="white"
                    align="center"
                    className="active-question-no"
                >
                    {/* Display the current question number */}
                    Question: {currentQuestionIndex + 1}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography
                    color="white"
                    align="center"
                    className="total-score"
                >
                    {/* Display the total score */}
                    Score:{score}
                </Typography>
            </Grid>
            <Grid item xs={6} align="center">
                {timer}
            </Grid>
            <Grid item xs={6} align="center">
                {" "}
                {Array.from({ length: remainingLives }).map((num, index) => (
                    <img
                        key={index}
                        src={
                            index < remainingLives
                                ? "/fullHeart.png"
                                : "/clearHeart.png"
                        }
                        alt="Heart"
                        width={30}
                    />
                ))}
            </Grid>
        </Grid>
    );
}

export default GameHeader;
