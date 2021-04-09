import {ADD_BREADMID} from "../constants/burgerConstant"
const initialState = {

    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]

    menu: {

        salad: 10,

        cheese: 20,

        beef: 55

   },

    total: 85

};

function burgerReducer(state = initialState, action){
        switch(action.type){
            case ADD_BREADMID:{
                const {menuItem, amount } = action.payload
                // console.log(action)
                if(amount === -1 && state.burger[menuItem] < 1){
                    return {...state}
                }
                let burgerUpdate = {...state.burger};
                burgerUpdate[menuItem] += amount;
                state.burger = burgerUpdate;
                // Tinh tổng tiền
                state.total += amount * state.menu[menuItem];
                return {...state}
            };

            default:
                return state
        }
};

export default burgerReducer;
