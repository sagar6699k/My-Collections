import { BUY_CAKE } from "./actionType";


const initialState = {
    number_of_cake: 10
}

const cakeReducer = (state = initialState, Action) => {
    switch (Action.type) {
        case BUY_CAKE:
            return {
                ...state,
                number_of_cake: state.number_of_cake - 1
            }
            
    
        default:
            return state;
    }
}

export default cakeReducer;

