import './App.css';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountDown from './components/CountDown';
import Session from './components/Session';
import Break from './components/Break';
import { handleCountDown } from './store';

function App() {
    const { breakTime, isStop, countDown } = useSelector(state => {
        console.log(state.timer);
        return {
            breakTime: state.timer.breakTime,
            isStop: state.timer.isStop,
            countDown: state.timer.countDown
        };
    });

    const dispatch = useDispatch();

    const timer = useRef();


    useEffect(() => {
        if (!isStop) {
            timer.current = setInterval(() => {
                dispatch(handleCountDown());
            }, 1000);
        } else {
            clearInterval(timer.current);
        }

        return () => {
            clearInterval(timer.current);
        }

    }, [isStop, countDown, breakTime]);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold p-5">25 + 5 Clock</h1>
            <div className="w-1/3">
                <div className="flex justify-between items-center text-2xl">
                    <Break />
                    <Session />
                </div>
                <CountDown />
            </div>
            <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    );
}

export default App;