<template>
  <div>
    <slot :header="header" :footer="footer">
    </slot>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

export default Component({})(
  class Settings extends Vue {
    header = 'Settings Header'
    footer = 'Settings Footer'
  }
)
</script>
