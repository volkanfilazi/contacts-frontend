import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useContactStore = defineStore('contact', () => {
  const KEY = "http://localhost:5001/api/contacts"
  const allFilms = ref<any>([])

  async function getContacts() {
    try {
      let response = await axios.get<any>(KEY)
      allFilms.value = response.data
      return response.data
    } catch (error: any) {
      
    }
  }

  async function addContact(name: string, email: string, phone: string) {
    await axios.post<any>(KEY,{
      name,
      email,
      phone
    })
  }

  async function deleteContact(id: string){
    try {
      await axios.delete<any>(`${KEY}/${id}`)
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