<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Students</h4>
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
                    <button type="button" @click="saveStudent" class="btn btn-primary">Save</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'studentCreate',
    data(){
        return{
        model: {
            student:{
                name: '',
                email: ''

            }
        }
    }

    },
    methods: {
         saveStudent(){
            
            axios.post('http://localhost:8090/students', this.model.student)
            .then(response => {
               console.log(response);
             
               

               this.model.student = {
                name: '',
                email: ''
            }

            alert('student successfully added');

            this.$router.push('/students');
           

            }).catch(function(error){
                console.log(error);

            });
         }
    },
}

</script>