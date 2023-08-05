import { useSelector, useDispatch } from 'react-redux';
import { incrementBreak, decrementBreak } from '../store';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';

function Break() {
    const dispatch = useDispatch();

    const breakLength = useSelector(state => {
        return state.timer.breakLength;
    });

    return (
        <div className="break-length p-2 rounded-xl">
            <h3 id="break-label" className="font-bold">Break Length</h3>
            <button onClick={() => dispatch(decrementBreak())} id="break-decrement" className="font-bold text-3xl p-3 active:bg-red-500 rounded active:text-white"><GoArrowDown /></button>
            <span id="break-length" className="mx-2 text-2xl font-bold">{breakLength}</span>
            <button onClick={() => dispatch(incrementBreak())} id="break-increment" className="font-bold text-3xl p-3 active:bg-green-500 rounded active:text-white"><GoArrowUp /></button>
        </div>
    );
}

export default Break;