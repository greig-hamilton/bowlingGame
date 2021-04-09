import { expect } from 'chai';
import { BowlingGame } from './bowlingGame';

describe('Bowling Game', () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame();
    });

    describe('Get score for completed game', () => {
        it('Example unit test', () => {
            expect(game.getScoreForCompleteGame()).to.be.eq(0);
        });
    });
});
