<script>
import { RouterView } from 'vue-router'
import AppHeader from "@/cmps/app-header.vue";
import UserMsg from './cmps/user-msg.vue';


export default {
  components: {
    AppHeader,
    UserMsg
  },
};
</script>

<template>
  <UserMsg />
  <AppHeader />
  <main class="app-main-container full">
    <RouterView />
  </main>
</template>

