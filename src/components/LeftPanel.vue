<style lang="scss">

</style>

<template>
  <div>
    <div class="bg-dn-dark mb-3 rounded">
      <div class="bg-dn-darker p-3 rounded">
        <p class="text-muted">TASK Instruction</p>
        <p class="text-white m-0">{{guide.title}}</p>
      </div>
      <div class="text-muted p-3">
        {{guide.content}}
      </div>
    </div>

    <div class="bg-dn-dark rounded">
      <div class="p-3">
        <p class="text-white">Good Job!</p>
        <p class="text-muted m-0">I think AI will be smart soon :)</p>
      </div>

      <div class="p-3">
        <div class="d-flex justify-content-between mb-2">
          <small class="text-muted">Teaching Progress</small>
          <small class="text-white">
            {{`${progress}% (${finishLabel.length}/${allLabel.length})`}}
          </small>
        </div>
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="{width: progress + '%'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    props: {
      guide: Object
    },

    computed: {
      ...mapState([
        'task'
      ]),
      ...mapGetters([
        'vComunicate'
      ]),

      allLabel () {
        return this.vComunicate.filter((x) => {
          return x.isTask == true
        });
      },

      finishLabel () {
        return this.allLabel.filter((x) => {
          return x.labelId
        });
      },

      progress () {
        return this.finishLabel.length / this.allLabel.length * 100
      }
    }
    
  }
</script>