<template>
  <v-container>
    <v-row>
      <div class="col-md-12">
        <h2 class="contact-details-heading mb-4">Don't be Shy !</h2>
        <p class="body-1">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      <div
        class="col-md-12"
        style="display: flex"
        v-for="contact in contactDetails"
        :key="contact.id"
      >
        <div class="col-md-2 contact-details-icon">
          <v-icon color="secondary" large> {{ contact.icon }} </v-icon>
        </div>
        <div class="col-md-10 contact-details-text">
          <p class="text--secondary text-uppercase mb-2">{{ contact.title }}</p>
          <span class="text font-weight-medium"> {{ contact.value }} </span>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
  import { mdiMap, mdiEmailOpenOutline, mdiPhone } from "@mdi/js";
  export default {
    name: "ContactLeft",
    data() {
      return {
        contactDetails: [
          {
            id: 0,
            icon: mdiMap,
            title: "Address Point",
            value: "Malir Colony H-Area H5/8 Karachi, Pakistan",
          },
          {
            id: 1,
            icon: mdiEmailOpenOutline,
            title: "Mail Me",
            value: "inshal.ayaz14@gmail.com",
          },
          {
            id: 2,
            icon: mdiPhone,
            title: "Call Me",
            value: "+92-316-2969299",
          },
        ],
      };
    },
  };
</script>

<style>
  .contact-details-heading {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media (max-width: 680px) {
    .contact-details-text,
    .contact-details-icon {
      text-align: center;
    }
  }
</style>
