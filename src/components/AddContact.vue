<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue';
import {useContactStore} from '../store/contactStore'

const namee = ref<string>('')
const emaill = ref<string>()
const phonee = ref<string>()

const contactStore = useContactStore()

async function fetchAddContact() {
  await contactStore.addContact(namee.value,emaill.value,phonee.value)
  await contactStore.getContacts()
}
</script>

<template>
  <div class="w-1/4 flex flex-col gap-2 mt-10">
    <input class="w-full border-[1px] p-1 bg-transparent border-yellow-400" placeholder="name" v-model="namee">
    <input class="w-full border-[1px] p-1 bg-transparent border-yellow-400" placeholder="email" v-model="emaill">
    <input class="w-full border-[1px] p-1 bg-transparent border-yellow-400" placeholder="phone" v-model="phonee">
    <div class="p-2 flex items-center justify-center">
      <button @click="fetchAddContact()" class="border-[1px] p-2 text-white border-yellow-400">Add Contact</button>
    </div>
  </div>
</template>