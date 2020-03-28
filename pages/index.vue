<template lang="pug">
  main
    div.topSection
    Header
    Intro
    About
    //- Skills
</template>

<script>
import Header from "~/components/Header";
import Intro from "~/components/Intro";
import About from "~/components/About";
import Skills from "~/components/Skills";

export default {
  components: {
    Header,
    Intro,
    About,
    Skills
  }
};
</script>

<style lang="sass" scoped>
.topSection
  z-index: -1
  position: absolute
  width: 100%
  height: 100vh
  background-image: url('~assets/imgs/cool-background.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: top right
  background: #000000
  background: -webkit-linear-gradient(to bottom, #434343, #000000)
  background: linear-gradient(to bottom, #434343, #000000)
</style>
