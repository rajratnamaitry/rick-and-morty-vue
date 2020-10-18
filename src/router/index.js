import { createRouter, createWebHistory } from 'vue-router'
import EpisodeList from '@/components/episode-list/episodeList.vue'
import CharacterList from '@/components/character-list/characterList.vue'

const routes = [{
      path: '/episode',
      name :'episode',
      component: EpisodeList
  },{
      path :'/character',
      name :'character',
      component: CharacterList
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
