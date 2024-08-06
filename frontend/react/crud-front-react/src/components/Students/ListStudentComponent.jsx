import React, {useEffect, useState} from 'react'
import { deleteStudent, getAllStudents } from '../../services/StudentService'
import { useNavigate } from 'react-router-dom';



const ListStudentComponent = () => {

    const [students, setStudents] = useState([]);

    const navigator = useNavigate();


        useEffect(() => {
           getStudents();
        },[])

        function getStudents () {

            getAllStudents().then((response) => {
           
                setStudents(response.data);
               }).catch(error => {
                   console.error(error);
               })

        }

        function addNewStudent(){
            navigator('/add-student')

        }

        function updateStudent(id){
            navigator(`edit-student/${id}`)
        }

        function removeStudent(id){

            if(confirm('Do you want to delete this record?')){

            deleteStudent(id).then((response)=>{

                getStudents();

            }).catch(error=>{
                console.error(error);
            })
          }
        }


  return (
    <div className='container'>
        <h2 className='text-center'>List of Students</h2>
        <button className='btn btn-primary' onClick={addNewStudent} > Add Student </button>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id </th>
                    <th> Name</th>
                    <th> Email </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student =>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>
                            <button className='btn btn-success' onClick={() => updateStudent(student.id)}>Update</button>
                            <button className='btn btn-danger' onClick={() => removeStudent(student.id)} style={{ marginLeft: "10px" }} >Delete</button>
                        </td>

                    </tr>)
                }
                

            </tbody>
        </table>


    </div>
  )
}

export default ListStudentComponent