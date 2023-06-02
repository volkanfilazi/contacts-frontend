<script setup lang="ts">
import {useContactStore} from '../store/contactStore'

const contactStore = useContactStore()

async function fetchDeleteContact(id: string){
  await contactStore.deleteContact(id)
  await contactStore.getContacts()
}


</script>

<template>
  <div class="grid grid-flow-row grid-cols-3 gap-2">
    <div class="border-[1px] border-yellow-400 mt-5 p-2" v-for="film in contactStore.allFilms">
    <p @click="fetchDeleteContact(film._id)" class="text-white cursor-pointer">delete</p>
    <p class="text-yellow-400">name :  <span class="text-white">{{ film.name }}</span></p>
    <p class="text-yellow-400">name :  <span class="text-white">{{ film._id }}</span></p>
    <p class="text-yellow-400">email: <span class="text-white">{{ film.email }}</span></p>
    <p class="text-yellow-400">phone: <span class="text-white">{{ film.phone }}</span></p>
  </div>
  </div>
</template>