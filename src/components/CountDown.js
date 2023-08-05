import { useSelector, useDispatch } from 'react-redux';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa';
import { startStop, resetTime } from '../store';

function CountDown() {
    const dispatch = useDispatch();

    const { countDown, breakTime, isStop } = useSelector(state => {
        return {
            countDown: state.timer.countDown,
            breakTime: state.timer.breakTime,
            isStop: state.timer.isStop
        };
    });

    let minutes = String(Math.floor(countDown / 60)).length < 2 ? '0' + Math.floor(countDown / 60) : Math.floor(countDown / 60);
    let seconds = String(countDown % 60).length < 2 ? '0' + (countDown % 60) : countDown % 60;

    const content = minutes < 1 ?
        <div className="border-dashed border-8 border-x-rose-300 rounded-xl p-10 m-2 text-red-500 text-center font-bold text-4xl">
            <p id="timer-label" className="text-2xl mb-2">{breakTime ? 'Break' : 'Session'}</p>
            <h2 id="time-left" className="text-4xl">{minutes}:{seconds}</h2>
        </div> :
        <div className="border-dashed border-8 rounded-xl p-10 m-2 text-center font-bold text-4xl">
            <p id="timer-label" className="text-2xl mb-2">{breakTime ? 'Break' : 'Session'}</p>
            <h2 id="time-left" className="text-4xl">{minutes}:{seconds}</h2>
        </div>;

    return (
        <>
            {content}
            <div className="flex justify-center items-center">
                <button onClick={() => dispatch(startStop())} id="start_stop" className="rounded mx-2 p-2 text-2xl hover:bg-gray-900 hover:text-white">{isStop ? <FaPlay /> : <FaPause />}</button>
                <button onClick={() => dispatch(resetTime())} id="reset" className="rounded mx-2 p-2 text-2xl hover:bg-gray-900 hover:text-white"><FaStop /></button>
            </div>
        </>
    );
}

export default CountDown;