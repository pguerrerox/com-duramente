<template lang="pug">
  header
    nav
      ul.navbar
        li.navbar-item
          n-link(:to="localePath('/')") {{ $t('header.home') }}
        li.navbar-item
          n-link(:to="localePath('/blog')") {{ $t('header.blog') }}
      div.lang
        n-link(
          v-for="x in allLocales"
          :key="x.code"
          :to="switchLocalePath(x.code)") /{{ x.code }}
</template>

<script>
export default {
  computed: {
    allLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  }
};
</script>

<style lang="sass" scoped>
nav
  display: flex
  width: 100%
  height: $header-height
  justify-content: flex-end
  align-items: center
  ul
    display: flex
    flex-direction: row
    li
      list-style: none
      @extend %margin15
      a
        // font-weight: bold
        // color: $terciary
      a:hover
       @extend %markerRed
  div a
    // color: $terciary
  ul, div
    @extend %margin15
  .nuxt-link-exact-active
    @extend %markerRed
</style>