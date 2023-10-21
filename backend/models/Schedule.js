const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  influencer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  meetingTime: {
    type: Date,
    required: true
  },
  meetingLink: {
    type: String,
    required: true
  },
  meetingNotes: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);