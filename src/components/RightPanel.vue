<style lang="scss">
</style>

<template>
  <div class="bg-dn-dark mb-3 rounded">
    <div class="bg-dn-darker p-3 rounded">
      <p class="text-white">{{labels.title}}</p>
      <p class="text-muted m-0"><small>{{labels.content}}</small></p>
    </div>
    <div class="text-muted p-3">
      <button :class="['btn btn-secondary btn-lg btn-block', {'active': item.id == task.comunicate[activeMessage].labelId}]"
        @click="selectLabel(item.id)"  
        v-for="item in labels.label" 
        :key="item.id"
      >
        {{item.title}}
      </button>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    props: {
      labels: Object
    },
    computed: {
      ...mapState([
        'activeMessage',
        'task'
      ])
    },
    methods: {
      ...mapActions([
        'selectLabel'
      ])
    }
  }
</script>