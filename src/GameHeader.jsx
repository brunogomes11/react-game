import { Typography, Grid } from "@mui/material";

function GameHeader({ score, currentQuestionIndex }) {
  return (
    <Grid container className="game-header">
      <Grid>
        <Typography color="white" className="active-question-no">
          {/* Display the current question number */}
          Question: {currentQuestionIndex + 1}
        </Typography>
      </Grid>
      <Grid>
        <Typography color="white" align="center" className="total-score">
          {/* Display the total score */}
          Score:{score}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default GameHeader;
