<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '../store/authStore'
const useAuth = useAuthStore()

onMounted(async () => {
  await useAuth.getUsers()
})
</script>
<template>
  <div class="grid grid-flow-rows grid-cols-4 mt-5">
    <div class="flex bg-gray-600 flex-col mr-2 mt-2" v-for="user in useAuth.allUsers">
      <div class="flex gap-2 justify-end">
        <button class="bg-orange-500">edit</button>
        <button class="bg-red-600">delete</button>
      </div>
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user._id }}</p>
    </div>
  </div>
</template>