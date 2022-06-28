<template>
  <div class="contact-heading">
    <h1>
      {{ heading }} <span class="secondary--text">{{ span }}</span>
    </h1>
    <span
      class="title-big"
      :class="this.$vuetify.theme.isDark ? titleColorDark : titleColorLight"
      >{{ title }}</span
    >
  </div>
</template>

<script>
  export default {
    name: "pageTitle",
    props: ["heading", "span", "title"],
    data() {
      return {
        titleColorDark: "title-color-dark",
        titleColorLight: "title-color-light",
      };
    },
  };
</script>

<style>
  .contact-heading {
    padding: 80px 0;
    text-align: center;
  }
  .contact-heading h1 {
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-size: 51px;
  }
  .title-big {
    font-size: 110px;
    left: 0;
    letter-spacing: 10px;
    line-height: 0.7;
    position: relative;
    right: 0;
    top: 5%;
    text-transform: uppercase;
    font-weight: 800;
    transform: translateY(-50%);
  }
  .title-color-dark {
    color: hsla(0, 0%, 100%, 0.07);
  }
  .title-color-light {
    color: rgba(15, 15, 15, 0.07);
  }

  @media (max-width: 960px) {
    .title-big {
      font-size: 80px;
    }
  }
</style>
