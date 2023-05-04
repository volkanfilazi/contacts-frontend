import { createRouter, createWebHistory } from 'vue-router';
import Register from '../pages/RegisterPage.vue'
import Login from '../pages/LoginPage.vue'
import ShowContacts from '../components/ShowContacts.vue'
import AdminPage from '../pages/AdminPage.vue'

const routes = [
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '/admin', name: 'admin', component: AdminPage },
  { path: '/contacts', name: 'contacts', component: ShowContacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;