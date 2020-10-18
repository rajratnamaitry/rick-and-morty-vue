<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a :href="'/episode'">Episode List </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Character List
        </li>
      </ol>
    </nav>
    <div className="m-4">
      <div className="row">
        <div v-for="characterUrl in characterList" v-bind:key="characterUrl" >
          <CharacterCard v-bind:characterUrl=characterUrl></CharacterCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import CharacterCard from '@/components/character-card/characterCard.vue';
    import router from '@/router/index.js';
    const goToPage = () => {
       return fetch('https://rickandmortyapi.com/api/episode/'+router.currentRoute._value.query.id)
            .then(res => res.json())
    }
    export default {
        name: 'CharacterList',
        components: {
            CharacterCard
        },
        data () {
            return {
                characterList : []
            }
        },
        mounted() {
          goToPage().then(result => {
                this.characterList = result['characters'];
            })
        }
    }
    
</script>