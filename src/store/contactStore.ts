import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'


export const useContactStore = defineStore('contact', () => {
  const KEY = "http://localhost:5001/api/contacts"
  const allFilms = ref<any>([])
  const accessToken = useStorage("token","")
  const config = {
    headers: { Authorization: `Bearer ${accessToken.value}` }
  };

  async function getContacts() {
    try {
      let response = await axios.get<any>(KEY,config)
      allFilms.value = response.data
      
      return response.data
    } catch (error: any) {
      console.log(error);
      
    }
  }

  async function addContact(name: string, email: string, phone: string) {
    await axios.post<any>(KEY,{
      name,
      email,
      phone
    },config)
  }

  async function deleteContact(id: string){
    try {
      await axios.delete<any>(`${KEY}/${id}`,config)
    } catch (error) {
      
    }
  }

  return {
    getContacts,
    allFilms,
    addContact,
    deleteContact
  }
})