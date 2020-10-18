<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Episode List</li>
            </ol>
        </nav>
        <div class="container-fluid">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" v-if="info?.prev" ><a class="page-link" v-on:click="onClickNavigate(info?.prev)" >Previous</a></li>
                    <li class="page-item" v-if="info?.next" ><a class="page-link" v-on:click="onClickNavigate(info?.next)" >Next</a></li>
                </ul>
            </nav>
                <div class="list-group">
                    <div v-for="episode in episodeList" v-bind:key="episode.id" >
                        <EpisodeCard v-bind:episode=episode ></EpisodeCard>
                    </div> 
                </div>
        </div>
    </div>
</template>

<script>
    import EpisodeCard from './../episode-card/episodeCard';
    const goToPage = (url) => {
        return fetch(url)
            .then(res => res.json())
    }

    export default {
        name: 'EpisodeList',
        components: {
            EpisodeCard
        },
        data () {
            return {
                episodeList : [],
                info: null
            }
        },
        mounted () {
            goToPage("https://rickandmortyapi.com/api/episode/")
                .then(result => {
                    this.episodeList = result['results'];
                    this.info = result['info'];
            });
        },
        methods:{
            onClickNavigate(url){
                goToPage(url)
                .then(result => {
                    this.episodeList = result['results'];
                    this.info = result['info'];
            }); 
            }
        }
    }
</script>