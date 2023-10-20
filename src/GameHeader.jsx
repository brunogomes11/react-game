/* eslint-disable react/prop-types */
import { Typography, Grid } from "@mui/material";
// import fullHeart from "../public/fullHeart.png";
// import clearHeart from "../public/clearHeart.png";

function GameHeader({ score, currentQuestionIndex, timer, remainingLives }) {
    return (
        <Grid container className="game-header">
            <Grid>
                <Typography color="white" className="active-question-no">
                    {/* Display the current question number */}
                    Question: {currentQuestionIndex + 1}
                </Typography>
            </Grid>
            <Grid>
                <Typography
                    color="white"
                    align="center"
                    className="total-score"
                >
                    {/* Display the total score */}
                    Score:{score}
                </Typography>
            </Grid>
            <Grid>{timer}</Grid>
            <Grid>
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
                        width={30} // adjust size as needed
                    />
                ))}
            </Grid>
        </Grid>
    );
}

export default GameHeader;
