import {ADD_BREADMID} from "../constants/burgerConstant";

export const addBreadmid = (menuItem, amount) =>{
    return {
        type: ADD_BREADMID,
        payload:{
            menuItem,
            amount
        }
    }
}