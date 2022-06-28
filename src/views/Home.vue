<template>
  <div class="home">
    <v-container>
      <v-row>
        <div class="col-md-1 " v-if="!isMobile">
          <div class="yellow-background"></div>
        </div>
        <div class="col-md-4 col-sm-12">
          <ImageCard></ImageCard>
        </div>
        <div class="col-md-7 col-sm-12">
          <PersonalDetails></PersonalDetails>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import PersonalDetails from "../components/personalDetails.vue";
  import ImageCard from "../components/ImageCard.vue";

  export default {
    name: "home",
    components: {
      PersonalDetails,
      ImageCard,
    },
    computed: {
      isMobile() {
        return this.$store.state.isMobile;
      },
    },
  };
</script>

<style>
  .yellow-background {
    position: fixed;
    height: 200%;
    width: 100%;
    transform: rotate(-15deg);
    left: -83%;
    top: -50%;
    background: #ffb400;
  }
</style>
