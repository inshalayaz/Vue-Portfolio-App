<template>
  <v-container class="personal-details">
    <v-row>
      <!-- <div class="col-md-1">
        <h1 class="secondary--text ">___</h1>
      </div> -->
      <div class="col-md-11 col-sm-12  details-text">
        <h1 class="secondary--text">I'm Inshal Ayaz.</h1>
        <h1>Front-End Developer</h1>
      </div>
      <div class="col-md-10 col-sm-12 description">
        <p class="body-1">
          I'm a front-end developer currenty working in Securiti as an Intern.
          Focused on crafting clean & user-friendly experiences, I am passionate
          about building excellent software that improves the lives of those
          around me.
        </p>
      </div>

      <div class="col-md-8 col-sm-12 btn-container">
        <router-link to="/about" style="text-decoration: none">
          <NewButton :icon="rightArrowIcon" value="More About Me"></NewButton>
        </router-link>
      </div>
    </v-row>
  </v-container>
</template>

<script>
  import { mdiArrowRightThick } from "@mdi/js";
  import NewButton from "./NewButton.vue";

  export default {
    name: "PersonalDetails",

    components: {
      NewButton,
    },

    data() {
      return {
        rightArrowIcon: mdiArrowRightThick,
      };
    },
  };
</script>

<style>
  .personal-details {
    margin-top: 150px;
  }
  .details-text h1 {
    font-family: "Poppins", sans-serif;
    font-size: 45px;
  }

  .description p {
    margin: 15px 0 28px;
    line-height: 35px !important;
  }
  .about-btn span {
    color: #fff !important;
  }
  .about-btn {
    transition: all 0.25s ease-in-out;
  }
  .about-btn:hover {
    background: #ffb400 !important;
    transition: all 0.25s ease-in-out;
  }
  .btn-icon {
    margin-left: 10px;
    border-radius: 50%;
    background-color: #ffb400;
    padding: 12px;
  }

  @media (max-width: 960px) {
    .personal-details {
      margin-top: 80px;
    }
    .description,
    .btn-container,
    .details-text h1 {
      text-align: center;
    }
  }
</style>
