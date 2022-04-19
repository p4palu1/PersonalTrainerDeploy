import express from "express"
import asyncHandler from "express-async-handler"
import Workout from "../Models/workoutModel.js"
import { getWorkouts, getWorkoutsById, addClientToWorkout, updateWorkout, createWorkout, deleteWorkout } from "../controllers/workoutController.js"
import protect from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").get(getWorkouts).post(protect, createWorkout)
router.route("/:id").get(getWorkoutsById).post(addClientToWorkout).put(protect, updateWorkout).delete(protect, deleteWorkout)


export default router

