<template lang="pug">
  section.intro
    div.content
      h1 {{$t('intro.title.top')}}<br>{{ $t('intro.title.main') }}
      h4 {{ $t('intro.shortInfo') }}
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
section
  display: flex
  justify-content: center
  align-items: center
  max-width: $max-width
  height: $normal-section-height
  margin: 0 auto
  div
    width: 50%
    height: 50%
    h1
      font-size: 3rem
</style>