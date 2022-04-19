import asyncHandler from "express-async-handler"
import Workout from "../Models/workoutModel.js"


//@desc Fetch all workouts
//@route GET /api/workouts
//@access Public
const getWorkouts = asyncHandler( async(req, res) => {
   
    const keyword = req.query.keyword ? {
        description: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

     const workouts = await Workout.find({...keyword})
    
    res.json(workouts)
})

//@desc Fetch a single workout
//@route GET /api/workouts/:id
//@access Public
const getWorkoutsById = asyncHandler( async(req, res) => {
    const workout = await Workout.findById(req.params.id)
    
    if(workout){
        res.json(workout)
    } else {
        res.status(404).json({ message: 'Workout not found'})
    }
})


//@desc Add client to workout
//@route POST /api/workouts/:id
//@access Public
const addClientToWorkout = asyncHandler( async(req, res) => {
    const workout = await Workout.findById(req.params.id)
    const {name, email, phoneNumber} = req.body

    if(workout){
        if(workout.clients.find(client => client.name == name || client.email == email || client.phoneNumber == phoneNumber)){
            res.status(401).json({ message: 'Already Signed Up'})
        } else {
            const user = {
                name, 
                email, 
                phoneNumber
            } 

            workout.clients.push(user)

            const updatedWorkout = await workout.save()

            res.json(updatedWorkout)
        }
        

    } else {
        res.status(404).json({ message: 'Workout not found'})
    }
})

// @desc  update workout detailes
// @route PUT /api/workouts/:id
// @access Private

const updateWorkout = asyncHandler(async(req, res) => {
    const workout = await Workout.findById(req.params.id)

    if(workout){
        workout.date = req.body.date || workout.date
        workout.duration = req.body.duration || workout.duration
        workout.equipment = req.body.equipment || workout.equipment
        workout.revenuePerClient = req.body.revenuePerClient || workout.revenuePerClient
        workout.description = req.body.description || workout.description
        workout.currentClients = req.body.currentClients || workout.currentClients
        workout.maxClients = req.body.maxClients || workout.maxClients
        

        const updatedWorkout = await workout.save()

        res.json({
        _id: updatedWorkout._id,
        date: updatedWorkout.date,
        duration: updatedWorkout.duration,
        revenuePerClient: updatedWorkout.revenuePerClient,
        description: updatedWorkout.description,
        currentClient: updatedWorkout.currentClients,
        maxClients: updatedWorkout.maxClients,
        })

    }else{
        res.status(401)
        throw new Error('Workout not found')
    }
})

//@desc create a new workout
//@route POST /api/workouts
//@access Private
const createWorkout = asyncHandler( async(req, res) => {
    const workout = new Workout({
        date: req.body.date,
        duration: req.body.duration,
        equipment: req.body.equipment,
        revenuePerClient: req.body.revenuePerClient,
        description: req.body.description,
        currentClients: req.body.currentClients,
        maxClients: req.body.maxClients,
        isPrivate: req.body.isPrivate || false,
        createdAt: Date.now()
    })
    try{
        const createdWorkout = await workout.save()
        res.status(201).json(createdWorkout)    
    } catch(error) {
        res.status(401).send(error)
    }
    
})

// @desc delete a workout
// @route DELETE /api/workouts/:id
// @access Private

const deleteWorkout = asyncHandler( async(req, res) => {
     const workout = await Workout.findById(req.params.id)

        if(workout){
            await workout.remove()
            res.json({message: 'workout removed'})
        } else{
            res.status(404)
            throw new Error("workout not found")
        }
    
})


export { getWorkouts, getWorkoutsById, addClientToWorkout, updateWorkout, createWorkout, deleteWorkout }