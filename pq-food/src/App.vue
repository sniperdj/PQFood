<template>
  <div id="app" class="layout_box">
    <!-- <router-view/> -->
    <pqtabbar></pqtabbar>
  </div>
</template>

<script>
import '@/assets/style/normalize.css'
import pqtabbar from './components/base-ui/tabbar/pqtabbar.vue'

export default {
  name: 'App',
  components: {
    pqtabbar
  }
}
</script>
