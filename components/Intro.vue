<template lang="pug">
  section.intro
    div.content
      h3 {{ $t('intro.top') }}
      h1 {{ $t('intro.bot') }}
    div.action
      button(class='button-normal' type='input') .my projects
      button(type='input') .contact me
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
section
  @extend %main-section
  display: flex
  flex-direction: column
  justify-content: space-evenly
  align-items: center
  .content
    h1
      font-size: 3rem
    h3
      font-weight: 200
  .action
    display: flex
    justify-content: space-evenly
    width: 50%
button
  @extend %button-normal
button:hover
  @extend %button-normal-hover
button:active
  @extend %button-normal-clic
</style>