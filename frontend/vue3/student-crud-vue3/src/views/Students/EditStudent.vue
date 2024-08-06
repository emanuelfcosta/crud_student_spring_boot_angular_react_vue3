<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Students</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.student.name" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" v-model="model.student.email"  class="form-control">
                </div>
                <div class="mb-3">
                    <button type="button" @click="updateStudent" class="btn btn-primary">Update</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'studentEdit',
    data(){
        return{
        studentId: null,   
        model: {
            student:{
                name: '',
                email: ''

            }
        }
    }

    },
    mounted(){
       this.studentId =  this.$route.params.id;
       this.getStudentData(this.$route.params.id);
    },
    methods: {

        getStudentData(studentId){

            axios.get(`http://localhost:8090/students/${studentId}`).then(response => {
            

                this.model.student = response.data;

            }).catch(function(error){
                console.log(error);

            });

        },
         updateStudent(){
            
            axios.put(`http://localhost:8090/students/${this.studentId}`, this.model.student)
            .then(response => {
               console.log(response);
             
               alert("student successfully updated");

               this.$router.push('/students');


            }).catch(function(error){
                console.log(error);

            });
         }
    },
}

</script>