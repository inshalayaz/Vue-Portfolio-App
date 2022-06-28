<template>
  <v-container class="about">
    <v-row>
      <!-- Left Section -->
      <div class="col-md-12">
        <PageTitle
          :heading="'about'"
          :span="'me'"
          :title="'resume'"
        ></PageTitle>
      </div>
      <div class="personal-info">
        <div class="col-md-6 ">
          <div class="col-md-12 col-sm-12">
            <h2 class="about-details-heading">Personal Info</h2>
          </div>
          <div class="col-md-12 col-sm-12">
            <ul class="about-list">
              <li v-for="info in aboutInfo" class="mb-6" :key="info.id">
                <span class="text--secondary">{{ info.name }}: </span>
                <span>{{ info.value }}</span>
              </li>
            </ul>
          </div>

          <div class="col-md-12 col-sm-12 cv-btn-container">
            <a
              href="inshal_cv.pdf"
              download="Inshal Cv.pdf"
              style="text-decoration: none"
            >
              <NewButton :icon="downloadIcon" value="Download Cv"></NewButton>
            </a>
          </div>
        </div>
        <!-- Right Section -->
        <div class="col-md-6 ">
          <div class="col-md-12 about-card-section">
            <div
              class="col-md-6 col-sm-12"
              v-for="stat in stats"
              :key="stat.id"
            >
              <AboutCard :number="stat.number" :text="stat.text"></AboutCard>
            </div>
          </div>
        </div>
      </div>
      <!-- Skills Section -->
      <div class="col-md-12">
        <v-divider class="light"></v-divider>
        <div class="col-md-12 skills-section">
          <AboutSkills></AboutSkills>
        </div>
      </div>

      <!-- Education And Experience Section -->
      <div class="col-md-12">
        <v-divider class="light"></v-divider>
        <div class="col-md-12 education-experience-section">
          <AboutExperience></AboutExperience>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
  import PageTitle from "../components/PageTitle.vue";
  import NewButton from "../components/NewButton.vue";
  // import img from '../assets/inshal_cv.pdf'
  import { mdiDownload } from "@mdi/js";
  import AboutCard from "../components/AboutCard.vue";
  import AboutSkills from "../components/AboutSkills.vue";
  import AboutExperience from "../components/AboutExperience.vue";
  export default {
    name: "about",
    components: {
      PageTitle,
      NewButton,
      AboutCard,
      AboutSkills,
      AboutExperience,
    },
    data() {
      return {
        downloadIcon: mdiDownload,
        stats: [
          {
            id: 0,
            number: "2",
            text: "years of experience",
          },
          {
            id: 1,
            number: "17",
            text: "completed projects",
          },
          {
            id: 2,
            number: "8",
            text: "happy customers",
          },
          {
            id: 3,
            number: "3",
            text: "Awards Won",
          },
        ],
        aboutInfo: [
          {
            id: 0,
            name: "First Name",
            value: "Inshal",
          },
          {
            id: 1,
            name: "Last Name",
            value: "Ayaz",
          },
          {
            id: 2,
            name: "Age",
            value: "23",
          },
          {
            id: 3,
            name: "Nationality",
            value: "Pakistan",
          },
          {
            id: 4,
            name: "Freelance",
            value: "Available",
          },
          {
            id: 5,
            name: "Address",
            value: "Karachi",
          },
          {
            id: 6,
            name: "Phone",
            value: "+92-3162969299",
          },
          {
            id: 7,
            name: "Email",
            value: "inshal.ayaz14@gmail.com",
          },
        ],
      };
    },
  };
</script>

<style>
  .personal-info {
    display: flex;
  }
  .about-details-heading {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .about-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
  }
  .about-list li {
    flex: 0 0 50%;
  }
  .about-card-section {
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 959px) {
    .personal-info {
      flex-direction: column;
    }
    .cv-btn-container {
      text-align: center;
    }
    .about-list li {
      flex: 100%;
    }
  }
</style>
