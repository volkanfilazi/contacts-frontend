<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import {useAuthStore} from '../store/authStore'
import { CurrentUser } from '../interface/user';
import { useStorage } from '@vueuse/core'
import { useRouter } from "vue-router";

const router = useRouter()
const useAuth = useAuthStore()
const response = ref<CurrentUser|null>(null)
const isLoading = ref<boolean>(true)

async function fetchCurrentUser(){
  response.value = await useAuth.currentUser()
  isLoading.value = false
}

watchEffect(async () =>{
  await fetchCurrentUser()
})

 function logout(){
  const accessToken = useStorage("token","")
  accessToken.value = ""
  router.push({ name: 'login' });
  fetchCurrentUser()
}
</script>

<template>
  <div class="w-full h-[100px] bg-red-500">
    <ul class="flex gap-2 justify-end items-center h-full mr-5">
      <li class="cursor-pointer" v-if="isLoading">Loading...</li>
      <li @click="router.push({ name: 'contacts' });" class="cursor-pointer" v-if="!isLoading && response">Contacts</li>
      <li @click="router.push({ name: 'admin' });" class="cursor-pointer" v-if="!isLoading && response && response.admin">Admin</li>
      <li class="cursor-pointer" v-if="!isLoading && !response">Login</li>
      <li class="cursor-pointer" v-if="!isLoading && !response">Register</li>
      <li class="cursor-pointer text-yellow-400" v-if="!isLoading && response"><span v-if="response.admin">admin</span><span v-if="!response.admin">user</span> {{ response.name }}</li>
      <li class="cursor-pointer" v-if="!isLoading && response" @click="logout()">Logout</li>
    </ul>
  </div>
</template>