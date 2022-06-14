import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: { 
    dark: true,
    themes: {
      dark: {
        primary: '#323232',
        secondary: '#ffb400'
      }
    }
  },
    icons: {
        iconfont: 'mdiSvg', 
      },
});
