const Record = require('../model/recordModel')
const mongoose = require('mongoose')

// get all workouts
const getRecords = async (req, res) => {
  //only if SPECIFIC USER
    // const user_id = req.user._id
    //   const workouts = await Workout.find({user_id}).sort({createdAt: -1})

  const records = await Record.find().sort({createdAt: -1})

  

  res.status(200).json(records)
}

// get a single workout
const getRecord = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Not valid id'})
  }

  const record = await Record.findById(id)

  if (!record) {
    return res.status(404).json({error: 'Cannot find workout id'})
  }
  
  res.status(200).json(record)
}


// create new workout

const createRecord = async (req, res) => {
  const {name, position, level} = req.body

  let emptyFields = []

  if(!name) {
    emptyFields.push('name')
  }
  if(!position) {
    emptyFields.push('position')
  }
  if(!level) {
    emptyFields.push('level')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    // const user_id = req.user._id
    const record = await Record.create({name, position, level})
    res.status(200).json(record)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout
const deleteRecord = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Delete not found'})
  }
            console.log('DELETE ID:\n',id)
  const record = await Record.findOneAndDelete({_id: id})

  if (!record) {
    return res.status(400).json({error: 'Delete not found'})
  }

  res.status(200).json(record)
}

// update a workout
const updateRecord = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Update not found'})
  }

  const record = await Record.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!record) {
    return res.status(400).json({error: 'Update not found'})
  }

  res.status(200).json(record)
}


module.exports = {
    createRecord,
    getRecords,
    getRecord,
    deleteRecord,
    updateRecord
}