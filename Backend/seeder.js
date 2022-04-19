import mongoose from "mongoose"
import dotenv from "dotenv"
import admins from "./data/admins.js"
import workouts from "./data/workouts.js"
import Workout from "./models/workoutModel.js"
import Admin from "./models/adminModel.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const importData = async () =>{
    try{
        await Workout.deleteMany()
        await Admin.deleteMany()

        const createdAdmins = await Admin.insertMany(admins)

        const adminUser = createdAdmins[0]._id

        const sampleWorkouts = workouts.map(workout => {
            return {...workout, user: adminUser}
        })

        await Workout.insertMany(sampleWorkouts) 
        console.log("data imported")
        process.exit()

    } catch(error){
        console.error(`${error}`)
        process.exit(1)
    }

}

const destroyData = async () =>{
    try{
        await Workout.deleteMany()
        await Admin.deleteMany()

        
        console.log("data destroyed")
        process.exit()

    } 
    catch(error){
        console.log(`${error}`)
        process.exit(1)
    }

}

if (process.argv[2] === "-d"){
    destroyData()
}
else{
    importData()
}