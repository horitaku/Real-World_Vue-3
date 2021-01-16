<template>
  <div id="app" class="App">
    <ui5-shellbar
      primary-title="Smart Store Manager"
      show-notifications
      show-product-switch
      show-co-pilot
      :logo="loadLogo()"
    ></ui5-shellbar>
<!--    <img slot="logo" src="./../assets/logo.png"/>-->
      <img src="./../assets/logo.png"/>
  </div>
</template>

<script>
// import logo from './assets/img/logo.png'
// import profile from './assets/img/profile.png'

import '@ui5/webcomponents-fiori/dist/ShellBar'
import '@ui5/webcomponents-fiori/dist/ShellBarItem'
export default {
  name: "HeaderBar",
  components: {},
  data() {
    return {
      loadLogo() {
        return require('@/assets/logo.png')
      }
      // logo: require('@/assets/logo.png'),
      // profile: '@/assets/profile.png'
    };

  }

};

</script>

<style scoped>

</style>