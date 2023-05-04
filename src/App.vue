<script setup lang="ts">
import {useContactStore} from './store/contactStore'
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue'

const contactStore = useContactStore()
onMounted(() => {
  contactStore.getContacts()
})

</script>

<template>
  <div class="bg-gray-800 items-center min-h-screen h-full">
    <Navbar></Navbar>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
