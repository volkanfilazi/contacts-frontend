import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import {CurrentUser} from '../interface/user'

export const useAuthStore = defineStore('auth', () => {
  const KEY = "http://localhost:5001/api/user"
  const allUsers = ref<CurrentUser[]>([])
  const accessToken = useStorage("token","")
  const registerErrorMessage = ref<string>()
  const loginErrorMessage = ref<string>()
  const loginSuccessMessage = ref<string>()

  async function createRegister(name: string, email: string, password: string) {
    try {
      let response = await axios.post<any>(`${KEY}/register`,{
        name,
        email,
        password
      })
      if(response.data){
        registerErrorMessage.value = "Your account has been successfully created!"
      }
      return response.data
    } catch (error: any) {
      registerErrorMessage.value = error.response.data.message
    }
  }

  async function login(email: string, password: string){
    try {
      let response = await axios.post<any>(`${KEY}/login`,{
        email,
        password
      })
      console.log(accessToken.value);
      console.log(response.data.token);
      
      accessToken.value = response.data.token
      
      if(response.data){
        loginSuccessMessage.value = "Login is success"
        loginErrorMessage.value = ""
      }
      return response
    } catch (error) {
      loginErrorMessage.value = error.response.data.message
      loginSuccessMessage.value = ""
    }
  }

  async function currentUser(){
    const config = {
      headers: { Authorization: `Bearer ${accessToken.value}` }
    };
    try {
      let response = await axios.get<CurrentUser>(`${KEY}/current`,config)
      if(response.data){
        console.log(response.data);
        
        return response.data
      }
    } catch (error) {
    }
  }

  async function getUsers(){
    const config = {
      headers: { Authorization: `Bearer ${accessToken.value}` }
    };
    try {
      let response = await axios.get<CurrentUser[]>(`${KEY}/register`,config)
      if(response.data){
        console.log(response.data);
        allUsers.value = response.data
        return response.data
      }
    } catch (error) {
    }
  }
  return {
    createRegister,
    registerErrorMessage,
    login,
    loginErrorMessage,
    currentUser,
    loginSuccessMessage,
    getUsers,
    allUsers
  }
})