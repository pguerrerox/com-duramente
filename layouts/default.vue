<template lang="pug">
  div.website
    div.viewport
      Header
      nuxt
      //- Footer
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="sass" scoped>
.website
  display: flex
  justify-content: center
  width: 100%
  background: #000000
  background: linear-gradient(to bottom, #434343, #000000)
.viewport
  max-width: $max-width
  width: 100%
  margin: 0 40px
</style>