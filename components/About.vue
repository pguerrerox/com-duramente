<template lang="pug">
  section.aboutme
    h2.marked {{ $t('about.title') }}
    div.content
      p {{ $t('about.content') }}
</template>

<style lang="sass" scoped>
section
  @extend %small-section
  display: flex
  flex-direction: column
  justify-content: center
  .marked
    @extend %markerRed
  .content
    white-space: pre-wrap
</style>