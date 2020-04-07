import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// Mutation
const SET_TASK = "SET_TASK";
const SET_ACTIVE_MESSAGE = "SET_ACTIVE_MESSAGE";
const SET_LABEL = "SET_LABEL";
// const NEXT = "NEXT";
// const PREV = "PREV";

export default new Vuex.Store({
  state: {
    task: {
      /**
       * id,
       * guide,
       * label,
       * comuticate
       */
    },

    isLoaded: false,

    // 현재 레이블링중인 말풍선
    activeMessage: null,

  },

  getters: {
    vComunicate (state) {
      return Object.values(state.task.comunicate);
    }
  },

  mutations: {
    [SET_TASK] (state, {data, getters}) {
      state.task = data;
      state.isLoaded = true;

      // init 후 레이블링 할 첫번째 말풍선 세팅
      state.activeMessage = getters.vComunicate.find((item => {
        return item.isTask
      })).id;
    },

    [SET_ACTIVE_MESSAGE] (state, id) {
      state.activeMessage = id;
    },

    [SET_LABEL] (state, id) {
      if (state.task.comunicate[state.activeMessage].labelId === id) {
        state.task.comunicate[state.activeMessage].labelId = null;
      } else {
        state.task.comunicate[state.activeMessage].labelId = id;
      }
    }
  },

  actions: {
    init ({commit, getters}) {
      axios.get('http://localhost:3000/tasks')
      .then((result) => {

        const newObj = {};
        result.data.comunicate.forEach(row => {
          newObj[row.id] = {
            ...row, labelId: null
          }
        });

        commit('SET_TASK', {data: {...result.data, 
          comunicate: newObj
        }, getters: getters});

      }).catch((error) => {
        console.log(error.message);
      })
    },

    setActiveMessage ({commit}, id) {
      commit('SET_ACTIVE_MESSAGE', id);
    },

    selectLabel ({commit}, id) {
      commit('SET_LABEL', id);
    }
  }
})
