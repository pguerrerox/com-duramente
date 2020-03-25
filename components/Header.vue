<template lang="pug">
  header
    h1 Header
    nav
      ul.navbar
        li.navbar-item
          n-link(:to="localePath('/')") .home
        li.navbar-item
          n-link(:to="localePath('/blog')") .blog
      div.lang
        n-link(
          v-for="x in allLocales"
          :key="x.code"
          :to="switchLocalePath(x.code)") {{ x.code }}
</template>

<script>
export default {
  computed: {
    allLocales(){
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="sass">

</style>