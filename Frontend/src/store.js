import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { signForWorkoutReducer, updateWorkoutReducer, workoutCreateReducer, workoutDeleteReducer, workoutListReducer, workoutReducer } from "./reducers/workoutReducers"
import { adminDetailsReducer, adminLoginReducer, adminUpdateReducer } from "./reducers/adminReducers"



const reducer = combineReducers({
    workoutList: workoutListReducer,
    workoutSingle: workoutReducer,
    workoutSignFor: signForWorkoutReducer,
    workoutUpdate: updateWorkoutReducer,
    workoutCreate: workoutCreateReducer,
    workoutDelete: workoutDeleteReducer,
    adminLogin: adminLoginReducer,
    adminDetails: adminDetailsReducer,
    adminUpdate: adminUpdateReducer,
})

const adminInfoFromStorage = localStorage.getItem('adminInfo') ? JSON.parse
(localStorage.getItem('adminInfo')) : null

const workoutsFromStorage = localStorage.getItem('workouts') ? JSON.parse
(localStorage.getItem('workouts')) : null

const initialState = {
    adminLogin: {adminInfo: adminInfoFromStorage},
    workoutList: {workouts: workoutsFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store