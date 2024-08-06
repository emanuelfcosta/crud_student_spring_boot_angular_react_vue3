import React, { useEffect, useState } from 'react'
import { createStudent, getStudent, updateStudent } from '../../services/StudentService';
import { useNavigate, useParams } from 'react-router-dom';

const StudentComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({
        name: '',
        email: ''
    })

    const navigator = useNavigate();

    useEffect(() => {

        if(id){
            getStudent(id).then((response)=>{
                setName(response.data.name)
                setEmail(response.data.email)

            }).catch(error => {
                consol.error(error);
            })
        }

    },[id])



    function saveStudent(e){
        e.preventDefault();

        if(validateForm()){

            const student = {name,email}
            console.log(student)

            if(id){

                updateStudent(id,student).then((response) => {
                    console.log(response.data);
                    navigator('/students');
                }).catch(error => {
                    console.error(error);
                })

            } else {

                createStudent(student).then((response)=> {
                    console.log(response.data);
                    navigator('/students')
                }).catch(error => {
                    console.error(error);
                })

            }

        }   
    }

    function validateForm(){
        let valid = true;

        const errosCopy = {... errors}

        if(name.trim()){
            errosCopy.name = '';
        } else {
            errosCopy.name = 'name is required';
            valid = false;
        }

        if(email.trim()){
            errosCopy.email = '';
        } else {
            errosCopy.email = 'email is required';
            valid = false;
        }

        setErrors(errosCopy);

        return valid;
    }

    function pageTitle(){

        if (id){
            return <h2 className='text-center'>Update Student</h2>
        }else{
            return <h2 className='text-center'>Add Student</h2>
        }

    }

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form >
                        <div className='form-group mb-2'>
                           <label className='form-label'>Name:</label>
                           <input
                               type='text'
                               placeholder= 'name'
                               name='name'
                               value={name}
                               className={`form-control ${errors.name ? 'is-invalid':''}`}
                               onChange={(e) => setName(e.target.value)}
                           >
                           </input>
                           {errors.name && <div className='invalid-feedback'>{errors.name} </div>}
                        </div>
                        <div className='form-group mb-2'>
                           <label className='form-label'>Email:</label>
                           <input
                               type='text'
                               placeholder= 'email'
                               name='email'
                               value={email}
                               className={`form-control ${errors.email ? 'is-invalid':''}`}
                               onChange={(e) => setEmail(e.target.value)}
                           >
                           </input>
                           {errors.email && <div className='invalid-feedback'>{errors.email} </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveStudent}> Save </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default StudentComponent