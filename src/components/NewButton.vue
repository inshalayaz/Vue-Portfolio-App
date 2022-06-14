<template>
    <v-btn class="pr-0 new-btn" color="secondary" @click="handleSubmit" outlined rounded x-large >
         <span class="text--primary">{{value}}</span> 
        <v-icon color="white" class="btn-icon" > {{icon}} </v-icon>
    </v-btn>
</template>

<script>
import router from '../router'


export default {
    name: 'newButton',
    props: ['icon', 'value'],
    data(){
        return {
            formData: this.$store.state.formData,
        }
    },
    methods: {
        handleSubmit(){
            if(this.$route.name === 'contact'){
                if(this.formData.message && this.formData.subject && this.formData.email && this.formData.fullName){
                    console.log(this.formData)
                    alert('Form Submitted Successfully')
                    
                }else{
                    alert('Please Fill All Form Fields')
                }

            }
        }
    },
    
}
</script>


<style>
 .new-btn span{
        color: #fff!important;
       
    }
    .new-btn{
         transition: all .25s ease-in-out;;
    }
    .new-btn:hover{
        background: #FFB400!important;
        transition: all .25s ease-in-out;
    }
    .btn-icon{
        margin-left: 10px;
        border-radius: 50%;
        background-color: #FFB400;
        padding: 12px;
    }
</style>