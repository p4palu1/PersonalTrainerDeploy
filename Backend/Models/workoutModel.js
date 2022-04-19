import mongoose from 'mongoose'

const clientSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const workoutSchema = mongoose.Schema(
  {
    isPrivate: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      default: 1.0,
    },
    equipment: {
      type: String,
      required: true,
    },
    revenuePerClient: {
      type: Number,
      required: true,
      default: 100.0,
    },
    totalRevenue: {
      type: Number,
      required: true,
      default: 100.0,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    clients: [clientSchema],
    isHappened: {
      type: Boolean,
      required: true,
      default: false,
    },
    updatedAt: {
      type: Date,
    },
    maxClients: {
      type: Number,
      required: true,
    },
    currentClients: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Workout = mongoose.model('Workout', workoutSchema)

export default Workout