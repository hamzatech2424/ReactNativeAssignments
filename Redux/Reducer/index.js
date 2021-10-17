import ReducerForAssignment from "./ReducerForAssignment";
import ReducerForMaps from "./ReducerForMaps";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
    ReducerForAssignment,
    ReducerForMaps
});


export default rootReducer;