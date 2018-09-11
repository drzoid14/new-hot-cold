import {MAKE_GUESS,NEW_GAME,GET_INFO} from './actions'

const initialState = {
    guessCount: 0,
    guesses:[],
    correct: Math.floor(Math.random()*100),
    feedback: "Make a guess"
}

const hotColdReducer = (state=initialState, action) =>{
    if(action.type===MAKE_GUESS) {
        let feedback, guess;

        guess = action.guess;

        const difference = Math.abs(guess-state.correct)

        if(isNaN(guess)){
            feedback = 'please enter a valid number'
        } else if(difference >= 50) {
                feedback = "You're Ice Cold...";
            } else if (difference >= 30) {
                feedback = "You're Cold...";
            } else if (difference >= 10) {
                feedback = "You're Warm.";
            } else if (difference >= 1) {
                feedback = "You're Hot!";
            } else {
                feedback = 'You got it!';
            } 

        
        return Object.assign({}, state, { 
            guesses:[...state.guesses, action.guess],
            guessCount:state.guesses.length,
            isCorrect: action.guess===state.correct,
            feedback: feedback
        })
    }
    if(action.type===NEW_GAME) {
        return Object.assign({}, state, {
            guessCount: initialState.guessCount,
            guesses:[],
            correct: Math.floor(Math.random()*100),
            isCorrect:false
        })
    }
    if(action.type===GET_INFO) {
        return Object.assign({}, state, {
            
        })
    }
    return state;
}