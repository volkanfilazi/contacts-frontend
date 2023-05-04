<script setup lang="ts">
  import { ref } from 'vue';
import {useAuthStore} from '../store/authStore'
import { useRouter } from "vue-router";

 
const useAuth = useAuthStore()
const router = useRouter();


 const name = ref<string>('')
 const email = ref<string>('')
 const password = ref<string>('')

 function goToLogin(){
  router.push({ name: 'login' })

 }
</script>
<template>
  <div class="flex flex-col gap-5 justify-center items-center h-full">
    <input class="border-[1px] bg-transparent border-yellow-400 p-1" placeholder="name" type="text" v-model="name">
    <input class="border-[1px] bg-transparent border-yellow-400 p-1" placeholder="email" type="text" v-model="email">
    <input class="border-[1px] bg-transparent border-yellow-400 p-1" placeholder="password" type="text" v-model="password">
    <button @click="useAuth.createRegister(name,email,password)" class="border-[1px] border-yellow-400 p-2 text-white">Register</button>  
    <div class="flex flex-col gap-5 items-center">
      <p v-if="useAuth.registerErrorMessage" class="border-[1px] border-red-600 p-2 text-red-900">{{ useAuth.registerErrorMessage }}</p>
      <p>go to the <span @click="goToLogin()" class="text-yellow-400 p-1">Login</span> page</p>
    </div>
  </div>
</template>