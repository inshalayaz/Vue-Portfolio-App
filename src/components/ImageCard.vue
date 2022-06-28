<template>
  <div class="img-card">
    <v-card class="auto-mx">
      <v-img src="../assets/me2.jpeg" height="450px" width="450px"></v-img>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "ImageCard",
    computed: {
      isMobile() {
        return this.$store.state.isMobile;
      },
    },
  };
</script>

<style>
  .img-card {
    position: relative;
    top: 130px;
    right: 100px;
  }

  @media (max-width: 960px) {
    .img-card {
      position: inherit;
      display: flex;
      justify-content: center;
    }
  }
</style>
