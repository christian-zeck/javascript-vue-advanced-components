import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => (
    <App message="test">
      <div slot="header">This is a header</div>
      <div slot="footer">This is a footer</div>
    </App>
  )
})
