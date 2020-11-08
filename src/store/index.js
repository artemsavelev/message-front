import Vue from 'vue'
import Vuex from 'vuex'
import req from './headers';

Vue.use(Vuex)

export default new Vuex.Store({
  // стейт (массив сообщений) который передается во VUE компонент
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
        ...message
      ];
    }

  },
  actions: {
    // метод для получения записей
    async fetchMessage({commit}) {
      const res = await req.requestData('http://192.168.88.2:8080/messages/getAll', 'GET');
      const messages = await res.json();
      // console.log(messages)
      commit('updateMessageMutations', messages);
    },

    // метод для добавления записей
    async addMessage({commit, state}, message) {
      const data = await req.responseData('http://192.168.88.2:8080/messages/addAll', 'POST', message);
      const messages = await data.json();
      //const index = state.message.findIndex(item => item.id === message.id);
      //console.log(messages);
      //console.log(index);
      commit('addMessageMutations', messages)
    }
  },
  getters: {
    allMessage(state) {
      return (state.message || []).sort((a, b) => -(a.id - b.id))
    }
  }

})
