<template lang="pug">
  section.projects
    h2.marked {{ $t('projects.title') }}
    div(v-for='p in projects')
      pBlock
</template>

<script>
import pBlock from "~/components/ProjectBlock"

export default {
  components: {
    pBlock
  },
  data(){
    return {
      projects: [1,2,3,4,5]
    }
  }
}
</script>

<style lang="sass" scoped>
section
  .marked
    @extend %markerRed
    display: flex
    justify-content: flex-end
</style>