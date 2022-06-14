<template>
<v-app>
<Header />
  <router-link to="/" />
  <router-link to="/about" />
  <transition name="slide-fade">
      <router-view />
    </transition>
</v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',

  components: {
    Header,
  },


 mounted(){
  if(localStorage.getItem('darkMode') == 0){
    this.$vuetify.theme.isDark = false
  }else {
    this.$vuetify.theme.isDark = true
  }
 }

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;0,700;1,300&display=swap');  *::-webkit-scrollbar {
  display: none;
}

 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>