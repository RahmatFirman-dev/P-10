<template>
  <div id="app">
    <Navbar />
    <div class="content-wrapper">
      <Sidebar />
      <main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"/>        
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  components: {Navbar, Sidebar}
}
</script>
