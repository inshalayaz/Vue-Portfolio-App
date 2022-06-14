<template>
  <div class="home">
   
  <v-container>

    <v-row>
      <v-col class="col-md-1">
        <div class="yellow-background"></div>
      </v-col>
      <v-col class="col-md-4"> 
        <ImageCard></ImageCard>
       </v-col>
      <v-col class="col-md-7">
        <PersonalDetails></PersonalDetails>
      </v-col>
    </v-row>

  </v-container>




  </div>
</template>

<script>

import PersonalDetails from '../components/personalDetails.vue'
import ImageCard from '../components/ImageCard.vue';

export default {
  name: "home",
  components: {
    PersonalDetails,
    ImageCard
}
};
</script>


<style>
  .yellow-background{
    position: fixed;
    height: 200%;
    width: 100%;
    transform: rotate(-15deg);
    left: -83%;
    top: -50%;
    background: #ffb400
}
</style>