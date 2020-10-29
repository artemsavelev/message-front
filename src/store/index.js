import Vue from 'vue'
import Vuex from 'vuex'
import req from './headers';

Vue.use(Vuex)

export default new Vuex.Store({
  // обозначаем массив, стейт который передается во VUE компонент
  state: {
    message: []
  },
  mutations: {
    updateMessageMutations(state, message) {
      state.message = message;
    },

    addMessageMutations(state, message) {
      state.message = [
        ...state.message,
        message
      ];
      // console.log(state.message);
    },

    addArrayMessageMutations(state, message) {
      state.message = message;
      // console.log(state.message);
    }

  },
  actions: {
    async fetchMessage({commit}) {
      const res = await req.requestData('http://192.168.88.2:8080/messages/', 'GET');
      const messages = await res.json();
      //console.log(messages)
      commit('updateMessageMutations', messages);
    },

    // метод для добавления одной записи
    async addMessage({commit, state}, message) {
      const data = await req.responseData('http://192.168.88.2:8080/message/add-one', 'POST', message);
      const messages = await data.json();
      //const index = state.message.findIndex(item => item.id === message.id);
      // console.log(messages);
      //console.log(index);
      commit('addMessageMutations', messages)
    },

    // метод для добавления массива записей
    async addArrayMessage({commit, state}, message) {
      const data = await req.responseData('http://192.168.88.2:8080/message/add-all', 'POST', message);
      const messages = await data.json();
      //const index = state.message.findIndex(item => item.id === message.id);
      //console.log(messages);
      //console.log(index);
      commit('addArrayMessageMutations', messages)
    }
  },
  getters: {
    allMessage(state) {
      return (state.message || []).sort((a, b) => -(a.id - b.id))
    }
  }

})
