import Student from '../models/Student.js';

export const getAllStudents = async (req, res, next) => {
  try {
    const student = await Student.find();
    if (!student.length) {
      //   throw new Error();
      //   throw { message: 'student not found' };
      throw { statusCode: 404, message: 'student not found' };
    }
    res.json(student);
  } catch (error) {
    next(error);
  }
};