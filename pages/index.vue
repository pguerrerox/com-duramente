<template lang="pug">
  main
    Intro
    About
    Projects
</template>

<script>
import Header from "~/components/Header";
import Intro from "~/components/Intro";
import About from "~/components/About";
import Projects from "~/components/Projects";

export default {
  components: {
    Header,
    Intro,
    About,
    Projects
  }
};
</script>

<style lang="sass" scoped>
main
  display: flex
  flex-direction: column
  justify-items: center
</style>
