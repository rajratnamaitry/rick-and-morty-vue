<template>
  <div>
    <a class="list-group-item list-group-item-action"  v-on:click="goToEpisode(episode.id)" >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ episode.episode }} - {{ episode.name }}</h5>
        <small> {{ episode.air_date }}</small>
      </div>
    </a>
  </div>
</template>

<script>
    import router from '@/router/index.js';
    const goToEpisode = (e)=>{
        router.push("character?id="+e);
    };
    export default {
            name: 'EpisodeCard',
            props: {
                episode: Object
            },
            methods: {
                goToEpisode
            }
        }
</script>