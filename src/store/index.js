import { configureStore } from "@reduxjs/toolkit";
import { timeLengthReducer, incrementBreak, incrementSession, decrementBreak, decrementSession, resetTime, startStop, handleCountDown} from './slices/timeLengthSlice';

const store = configureStore({
    reducer: {
        timer: timeLengthReducer
    }
});

export {
    store,
    incrementSession,
    incrementBreak,
    decrementSession,
    decrementBreak,
    resetTime,
    startStop, 
    handleCountDown
};
