https://gist.git.generalassemb.ly/katie/d4c2013a89a9a3da9650cc6c5851b07f

##Components

API: https://opentdb.com/api_config.php?ref=altcademy.com ???

App
Category State: check if the category changed

    HeaderComponent: contains the logo and app name. No nav bar

    HowToPlayComponent
        shows the instructions
        SelectCategoryComponent
            Categories : choose question category
            Suggestion: ReadyToStarteGameComponent

        GameComponent
            props: category

            Score State: count the score
            Lives State: count the active lives. If no more lives, the game is over and it renders the score board.
            TimeStatus State: beforeQuestionCountDown, duringQuestionCountDown, afterQuestionCountDown

            ScoreComponent: show score. receives the score props from GameComponent
                props: score

            TimerComponent: show decremet time starting at 20s
                Countdown State: displays the number of seconds left.
                Callback: onTimeIsOver update the state of the game (similar as onWrongAnswer?)

            LivesComponent: show lives - heart shape - background red: full life - no background: no life.
                props: lives
                WHERE TO CHECK IF NO LIVES THEN GAMEOVER?

            QuestionComponent : show the question and let user to choose an answer. If wrong answer, show X mark and moves into the next question, no points, loose 1 life. If correct answer, show tick mark and moves into the next questio, add points, lives not affected.
                QuestionComponent
                    props: question and answers
                    callbacks: onCorrectAnswer, onWrongAnswer (create these func in the parent, pass them as a props to the child, and call them in the child)
                    state: selectedAnswer start as null and is modified by clicking on a answer and assigns the answer to the state

            GameOverComponent: is it necessary if we just want to display a "game over" message?

            YouWinComponent: is it necessary if we just want to display a "you win" message?

            ScoreBoardComponent : user adds their name and then it shows a score board containing the user name and total score

    FooterComponent

##Future Add ons:
Chat room for players to interact with each other and ask for help

##Routes
Game Route
Score Board Route
Feature: copy the url button in the score board (https://blog.dadops.co/2021/03/17/copy-and-paste-in-a-react-app/)
