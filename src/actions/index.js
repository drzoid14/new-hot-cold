export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
})

export const NEW_GAME = 'NEW_GAME';
export const newGame = () =>({
    type: NEW_GAME
})

export const GET_INFO = 'GET_INFO';
export const getInfo= () =>({
    type: GET_INFO
})