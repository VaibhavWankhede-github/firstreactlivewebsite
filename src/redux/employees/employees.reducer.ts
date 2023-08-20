import {IEmployee} from "../../models/IEmployee";
import {EmployeeService} from "../../services/EmployeeService";
import {createSlice} from "@reduxjs/toolkit";

export const employeeFeatureKey = "employeeFeature";

export interface InitialState{
    employees: IEmployee[]
}

const initialState:InitialState = {
    employees : EmployeeService.getAllEmployees()
};

export const employeeSlice = createSlice({
    name : "employeeSlice",
    initialState : initialState,
    reducers : {
        selectCheckAction : (state, action) => {
            const {empId} = action.payload
            // update to the state
            state.employees = state.employees.map(employee => {
                if (employee.id === empId) {
                    return {
                        ...employee,
                        isSelected: !employee.isSelected
                    }
                } else return employee;
            });
        }
    },
})
export const {selectCheckAction} = employeeSlice.actions;
