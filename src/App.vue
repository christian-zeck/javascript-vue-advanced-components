<template>
  <Settings>
    <Layout slot-scope="{ header, footer }">
      <Header slot="header" :header="header"></Header>
      <div slot="content">{{ message }}</div>
      <Footer slot="footer" :footer="footer"></Footer>
    </Layout>
  </Settings>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Settings from './Settings'
import Layout from './Layout'
import { Header, Footer } from '@/components'

export default Component({
  props: {
    message: {
      default: 'Hello from default prop'
    }
  },
  components: {
    Settings,
    Layout,
    Header,
    Footer
  }
})(
  class App extends Vue {
    onClick() {
      this.message = 'Goodbye'
    }
  }
)
</script>
