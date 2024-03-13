const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//Post a new workout
router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
