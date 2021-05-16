import { createStore } from 'vuex';

export default createStore({
  state: {
    filledForm: {
      bedTime: '',
      birthday: null,
      breakfastTime: '',
      gender: '',
      height: '',
      mealType: '',
      name: '',
      needs: [],
      phone: '',
      supplementsHabit: null,
      waterType: '',
      weight: '',
      work: '',
    },
  },
  actions: {
  },
  mutations: {
    SET_FILLED_FORM(state, form) {
      state.filledForm = form;
    },
  },
  modules: {
  },
});
