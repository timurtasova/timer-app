import { createSlice } from '@reduxjs/toolkit';

const timeLength = createSlice({
    name: 'timeLength',
    initialState: {
        sessionLength: 25,
        breakLength: 5,
        isStop: true,
        breakTime: false,
        countDown: 25 * 60
    },
    reducers: {
        incrementSession(state, action) {
            if (state.isStop) {
                if (state.sessionLength < 60) {
                    state.sessionLength = state.sessionLength + 1;
                    if (!state.breakTime) {
                        state.countDown = state.sessionLength * 60;
                    }
                }
            }
        },
        decrementSession(state, action) {
            if (state.isStop) {
                if (state.sessionLength > 1) {
                    state.sessionLength = state.sessionLength - 1;
                    if (!state.breakTime) {
                        state.countDown = state.sessionLength * 60;
                    }
                }
            }
        },
        incrementBreak(state, action) {
            if (state.isStop) {
                if (state.breakLength < 60) {
                    state.breakLength = state.breakLength + 1;
                    if (state.breakTime) {
                        state.countDown = state.breakLength * 60;
                    }
                }
            }
        },
        decrementBreak(state, action) {
            if (state.isStop) {
                if (state.breakLength > 1) {
                    state.breakLength = state.breakLength - 1;
                    if (state.breakTime) {
                        state.countDown = state.breakLength * 60;
                    }
                }
            }
        },
        handleCountDown(state, action) {
            if (state.countDown > 0) {
                state.countDown = state.countDown - 1;
            } else {
                document.getElementById('beep').play();
                state.breakTime = !state.breakTime;

                if (state.breakTime) {
                    state.countDown = state.breakLength * 60;
                } else {
                    state.countDown = state.sessionLength * 60;
                }
            }
        },
        resetTime(state, action) {
            document.getElementById('beep').pause();
            document.getElementById('beep').currentTime = 0;
            state.sessionLength = 25;
            state.breakLength = 5;
            state.isStop = true;
            state.breakTime = false;
            state.countDown = 25 * 60;
        },
        startStop(state, action) {
            state.isStop = !state.isStop;
        }
    }
});


export const { incrementBreak, incrementSession, decrementBreak, decrementSession, resetTime, startStop, handleCountDown } = timeLength.actions;
export const timeLengthReducer = timeLength.reducer;