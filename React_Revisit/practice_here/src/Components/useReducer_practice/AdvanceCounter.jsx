import { useReducer } from "react";


const AdvanceCounter = () => {

    let initialState = {
        first_count: 0,
        second_count:10
    }

    const reducer = (state, Action) => {
        switch (Action.type) {
            case 'increment1':
                return {
                    ...state, first_count: state.first_count + Action.value, 
                }
            
            case 'decrement1':
                return {
                    ...state, first_count: state.first_count - Action.value
                }
            
            case 'increment2':
                return {
                    ...state, second_count: state.second_count + Action.value 
                }
            
            case 'decrement2':
                return {
                    ...state, second_count: state.second_count - Action.value
                }
            
            default:
                return initialState;
        }
    }

    const [Count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Counter using useReducer hook with state object</h1>
      <div>
        <h2>First_Counter : {Count.first_count}</h2>
        <button onClick={() => {dispatch({type:'increment1', value:2})}}>Increament</button>
        <button onClick={() => {dispatch({type:'decrement1', value:1})}}>Decreament</button>
        <button onClick={() => {dispatch({type:'reset', value:0})}}>Reset</button>
      </div>
      <hr />
      <div>
        <h2>Second_Counter : {Count.second_count}</h2>
        <button onClick={() => {dispatch({type:'increment2', value:10})}}>Increament</button>
        <button onClick={() => {dispatch({type:'decrement2', value:10})}}>Decreament</button>
        <button onClick={() => {dispatch({type:'reset', value:0})}}>Reset</button>
      </div>
    </div>
  );
};

export default AdvanceCounter;
