<template>
   <div class="container">
      <div class="card">
        <div class="card-header">
          <h4>
             Students
             <RouterLink to="/students/create" class="btn btn-primary float-end">
              Add Student
             </RouterLink>
          </h4>
        </div>
        <div class="card-bo">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
             <tbody>
              <tr v-for="(student, index) in this.students" :key="index">
                <td>{{student.id  }}</td>
                <td>{{student.name  }}</td>
                <td>{{student.email  }}</td>
                 <td>
                  <RouterLink :to="{ path: '/students/edit/' + student.id }"  class="btn btn-warning ">
                    Edit
                 </RouterLink>
                 <button type="button" @click="deleteStudent(student.id)" class="btn btn-danger "  style= " marginLeft: 10px" >
                    Delete 
                  </button>
                 </td>
              </tr>
             </tbody>

          </table>
        </div>
      </div>
   </div>
  </template>

 <script>
import axios from 'axios';

 export default {
  name: 'students',
  data(){
    return {
      students: []
    }
  },
  mounted(){
    this.getStudents();
     //console.log(' student vue 3') 
  },
  methods: {
    getStudents() {
      axios.get('http://localhost:8090/students').then(response => {
        console.log(response.data);
        this.students = response.data;
 
      });
    },

    deleteStudent(studentId){
       if(confirm('Do you want to delete this record?')){

        axios.delete(`http://localhost:8090/students/${studentId}`).then(response => {

          alert('record deleted successfully');
          
          this.getStudents(); 

        }).catch(function(error){
                console.log(error);

            });

       }
    }

  }
 }
 </script>
  
  