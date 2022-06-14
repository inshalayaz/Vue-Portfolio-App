import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  mutations: {
    updateName (state, value) {
      state.formData.fullName = value
    },
    updateEmail (state, value) {
      state.formData.email = value
    },
    updateSubject (state, value) {
      state.formData.subject = value
    },
    updateMessage (state, value) {
      state.formData.message = value
    }
  },
  actions: {}
});
