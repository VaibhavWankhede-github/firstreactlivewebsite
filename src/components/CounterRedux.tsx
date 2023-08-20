import React from 'react';
import * as counterReducer from "../redux/counter/counter.reducer";
import {useSelector} from "react-redux";
import {AppDispatch, RootState, useAppDispatch} from "../redux/store";

let CounterRedux: React.FC = () => {
    const dispatch:AppDispatch = useAppDispatch();
    // get data from redux
    const counterState:counterReducer.InitialState = useSelector((store:RootState) => {
        return store[counterReducer.counterFeatureKey];
    })

    let clickIncr = (): void => {
        dispatch({
            type : `${counterReducer.incrementCounter}`
        })
    };

    let clickDecr = (): void => {
        dispatch({
            type : `${counterReducer.decrementCounter}`
        })
    };

    let clickIncrBy = (value: number): void => {
        dispatch({
            type : `${counterReducer.incrementCounterBy}`,
            payload : {
                value : value
            }
        })
    };

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3 display-3">{counterState.count}</p>
                                <button onClick={clickIncr} className="btn btn-success m-1">Increment</button>
                                <button onClick={clickDecr} className="btn btn-warning m-1">Decrement</button>
                                <button onClick={() => clickIncrBy(5)} className="btn btn-danger m-1">Increment by 5
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default CounterRedux;