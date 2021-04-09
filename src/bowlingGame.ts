// Write code for a bowling game.
//
// The roll() function should be called each time a player rolls the ball
// The getScoreForCompleteGame() should be called only once the game is
// complete and will return the final score.
//
// For example to simulate a game where a player knocks down 1 pin each roll
// you should call roll(1) 20 times (10 frames and two rolls per frame). This
// will be a complete game. Then you can call getScoreForCompleteGame().
// A second example is if a player gets a strike on every roll. This game would
// be roll(10) for 12 rolls (10 frames with 1 roll + 2 extra rolls in the 10th
// frame).
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
