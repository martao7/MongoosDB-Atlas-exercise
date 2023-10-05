import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  first_name: {
    type: String,
    required: [true, 'first name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  }

});