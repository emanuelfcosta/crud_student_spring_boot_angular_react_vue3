import axios from "axios";

const STUDENT_API_BASE_URL = 'http://localhost:8090/students';


export const getAllStudents = () => axios.get(STUDENT_API_BASE_URL);

export const createStudent = (student) => axios.post(STUDENT_API_BASE_URL, student)

export const getStudent = (studentId) => axios.get(STUDENT_API_BASE_URL + '/' + studentId)

export const updateStudent = (studentId, student) => axios.put(STUDENT_API_BASE_URL + '/' + studentId,student)

export const deleteStudent = (studentId) => axios.delete(STUDENT_API_BASE_URL + '/' + studentId)