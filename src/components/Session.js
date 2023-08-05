import { decrementSession, incrementSession } from '../store';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';

function Session() {
    const dispatch = useDispatch();

    const sessionLength = useSelector(state => {
        return state.timer.sessionLength;
    });

    return (
        <div className="session-length p-2 rounded-xl">
            <h3 id="session-label" className="font-bold">Session Length</h3>
            <button onClick={() => dispatch(decrementSession())} id="session-decrement" className="font-bold text-3xl p-3 active:bg-red-500 rounded active:text-white"><GoArrowDown /></button>
            <span id="session-length" className="mx-2 text-2xl font-bold">{sessionLength}</span>
            <button onClick={() => dispatch(incrementSession())} id="session-increment" className="font-bold text-3xl p-3 active:bg-green-500 rounded active:text-white"><GoArrowUp /></button>
        </div>
    );
}

export default Session;