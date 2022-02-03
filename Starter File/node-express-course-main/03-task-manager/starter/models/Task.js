const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please pass name'],
        trim: true,
        maxlength: [20,'Name should be less than 20 chars..']
    },
    completed:{
        type: Boolean,
        default: true,
    },
})

module.exports = mongoose.model('Task',TaskSchema)