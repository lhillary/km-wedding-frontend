// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Accommodations from '../views/Accommodations.vue'
import CityGuide from '../views/CityGuide.vue'
import Agenda from '../views/Agenda.vue'
import OtherDetails from '../views/OtherDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/accommodations', component: Accommodations },
  { path: '/city-guide', component: CityGuide },
  { path: '/agenda', component: Agenda },
  { path: '/other-details', component: OtherDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router