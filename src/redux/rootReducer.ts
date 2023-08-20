import {combineReducers} from "@reduxjs/toolkit";
import * as counterReducer from "./counter/counter.reducer";
import * as employeeReducer from "./employees/employees.reducer";
import * as userReducer from "./users/user.reducer";

const rootReducer: any = combineReducers({
    [counterReducer.counterFeatureKey] : counterReducer.counterSlice.reducer,
    [employeeReducer.employeeFeatureKey] : employeeReducer.employeeSlice.reducer,
    [userReducer.userFeatureKey] : userReducer.userSlice.reducer
});
export default rootReducer;