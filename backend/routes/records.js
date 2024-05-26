const express = require('express')
const {
  createRecord,
  getRecords,
  getRecord,
  deleteRecord,
  updateRecord
} = require('../controllers/recordControllers')

//injects middleware to ALL routes!!!
//              const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
        // router.use(requireAuth)

// GET all workouts
router.get('/record', getRecords)

//GET a single workout
router.get('/record/:id', getRecord)

// POST a new workout
router.post('/record/add', createRecord)

// DELETE a workout
router.delete('/:id', deleteRecord)

// UPDATE a workout
router.post('/update/:id', updateRecord)


module.exports = router