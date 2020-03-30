<template lang="pug">
  main
    Intro
    //- About
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
main
  display: flex
  flex-direction: column
  justify-items: center
</style>
