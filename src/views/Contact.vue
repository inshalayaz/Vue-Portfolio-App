<template>
    
    <v-container class="contact">
        <v-row>
            <v-col class="col-md-12">
            <PageTitle :heading="'Get in'" :span=" 'Touch' " :title="'contact'"></PageTitle>
            </v-col>

            <v-col class="col-md-5">
                <ContactLeft></ContactLeft>
            </v-col>
            <v-col class="col-md-7">
                <ContactRight></ContactRight>
            </v-col>



        </v-row>
    </v-container>


</template>

<script>
import ContactLeft from '../components/ContactLeft.vue';
import ContactRight from '../components/ContactRight.vue';
import PageTitle from '../components/PageTitle.vue';
export default {
    name: 'contact',
    components: {
    ContactLeft,
    ContactRight,
    PageTitle
}
}
</script>


<style>
   
</style>