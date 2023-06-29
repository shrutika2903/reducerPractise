import React, {useReducer} from 'react';

//define the state
type State = {
    count: number;
}

//define the action
type CountAction = { type: 'increment' } | { type: 'decrement' };

//Reducer function 

function reducer(state: State, action: CountAction): State {

 switch (action.type) {
    case 'increment': 
    return {
        count: state.count + 1
    };

    case 'decrement':
        return {
            count: state.count - 1
        };
        default:
            throw new Error('Unexpected action type');
 }
}

const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    const handleIncrement = () => {
        dispatch({type: 'increment'});
    };

    const handleDecrement = () => {
        dispatch({type: 'decrement'});
    };

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <span>{state.count}</span>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;
