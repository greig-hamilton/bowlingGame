// Write code for a bowling game.
// The roll function should be called each time a player rolls the ball
// The getScoreForCompleteGame should be called once the game is complete
// and will return the final score.
//
// If time allows extend the functionality to support getting a score for
// a game that is still in progress.
//
// Use TDD to develop the code.
export class BowlingGame {
    private rolls: number[] = [];

    public getScoreForCompleteGame(): number {
        return 0;
    }

    public getScoreForGameInProgress(): number {
        // Implement this functionality last
        return 0;
    }

    /** Handles a single roll of the bowling ball. */
    public roll(numberOfPinsKnockedDown: number): void {}
}
