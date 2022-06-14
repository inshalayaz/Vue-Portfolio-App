<template>
    <v-container>
        <v-row>
            <v-col class="col-md-12">
                <v-form class="contact-form" ref="formRef">
                <div class="name-email-info">
                    <v-col class="col-md-6">
                        <v-text-field color="secondary" :rules="nameRules" dense filled rounded outlined placeholder="YOUR NAME" v-model="fullName"></v-text-field>
                    </v-col>
                    <v-col class="col-md-6">
                        <v-text-field color="secondary" :rules="emailRules" dense filled rounded outlined placeholder="YOUR EMAIL" v-model="email" ></v-text-field>
                    </v-col>
                </div>
                <v-col class="col-md-12">
                    <v-text-field color="secondary" :rules="subjectRules" dense filled rounded outlined placeholder="YOUR SUBJECT" v-model="subject" ></v-text-field>
                </v-col>
                <v-col class="col-md-12">
                    <v-textarea color="secondary" :rules="messageRules" filled rounded outlined placeholder="YOUR MESSAGE" v-model="message" ></v-textarea>
                </v-col>
                <v-col class="col-md-4" >
                   <NewButton :icon="sendMailIcon" :value="'Send Message'"></NewButton>
                </v-col>
                </v-form>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
import { mdiSend } from '@mdi/js'
import NewButton from './NewButton.vue'
export default {
    name: "ContactRight",
   computed: {
    fullName: {
        get(){
            return this.$store.state.formData.fullName
        },
        set(value){
            this.$store.commit('updateName', value)
        }
    },
    email: {
        get(){
            return this.$store.state.formData.email
        },
        set(value){
            this.$store.commit('updateEmail', value)
        }
    },
    subject: {
        get(){
            return this.$store.state.formData.subject
        },
        set(value){
            this.$store.commit('updateSubject', value)
        }
    },
    message: {
        get(){
            return this.$store.state.formData.message
        },
        set(value){
            this.$store.commit('updateMessage', value)
        }
    },
   },
   data(){
    return{
        formRef: this.$refs.formRef,
        sendMailIcon: mdiSend,
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
        
      ],
       nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
       messageRules: [
        v => !!v || 'Message is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
       subjectRules: [
        v => !!v || 'Subject is required',
        v => v.length <= 150 || 'Name must be less than 150 characters',
      ],
    }
   },
    components: { NewButton }
}
</script>

<style>
    .v-text-field__slot input::placeholder{
        font-weight: 300
        ;
    }
    .name-email-info{
        display: flex;
    }
    .btn-icon{
        margin-left: 10px;
        border-radius: 50%;
        background-color: #FFB400;
        padding: 12px;
    }
</style>