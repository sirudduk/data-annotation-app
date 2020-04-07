<style lang="scss">
  .main-wrap {
    height: calc(100% - 143px);
    overflow: scroll;
  }
</style>

<template>
  <div class="main-wrap container py-3" v-if="isLoaded">
    <div class="row">
      <div class="col-sm">
        <LeftPanel :guide="task.guide"/>
      </div>

      <div class="col-lg">
        <MiddlePanel :comunicate="task.comunicate"/>
      </div>

      <div class="col-sm">
        <RightPanel :labels="task.labels"/>
      </div>
    </div>
  </div>
  
  <!-- init data가 들어오면 화면 로딩 -->
  <div class="spinner-border text-light" role="status" v-else></div>
</template>

<script>

  import LeftPanel from './LeftPanel.vue'
  import RightPanel from './RightPanel.vue'
  import MiddlePanel from './MiddlePanel.vue'

  import {mapActions, mapState} from 'vuex'



  export default {
    computed: {
      ...mapState([
        'isLoaded',
        'task'
      ])
    },
    methods: {
      ...mapActions({
        init: 'init'
      })
    },
    created () {
      this.init();
    },

    components: {
      LeftPanel,
      RightPanel,
      MiddlePanel
    }
  }
</script>