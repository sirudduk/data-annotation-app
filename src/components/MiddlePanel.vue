<style lang="scss">
  .middle-panel {
    .message {
      max-width: 300px;
      word-wrap: break-word;
    }
  }
</style>

<template>
  <div class="middle-panel bg-dn-dark rounded h-100 p-2">
    <div :class="['d-flex p-2', {'flex-row-reverse': item.isTask}]" 
      v-for="(item, idx) in comunicate" 
      :key="idx"
      @click="setActiveMessage(item.id)"
    >
      <span :class="['message rounded p-2 bg-dn-darker text-white', 
        {'text-primary bg-dn': item.id == activeMessage && item.isTask}]"
      >
        {{item.content}}
      </span>
      <span class="d-flex align-items-end mx-2">
        <small class="text-muted">{{item.date}}</small>
      </span>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  
  export default {
    props: {
      comunicate: Object
    },

    computed: {
      ...mapState([
        'activeMessage'
      ])
    },

    methods: {
      ...mapActions({
        setActiveMessage: 'setActiveMessage'
      })
    }
  }
</script>