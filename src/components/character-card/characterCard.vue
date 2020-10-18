
<template>
  <div>
    <div v-if="!isLoading" className="card mb-3 m-2" :style="{ width: '440px'}">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img v-bind:src="character?.image" className="card-img" v-bind:alt="character?.name"/>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{{character?.name}}</h5>
            <p className="card-text">
              {{character?.status}} - {{character?.species}}
            </p>
            <p className="card-text">
              <small className="text-muted">{{character?.location?.name}} </small>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isLoading" className="card mb-3 m-2" :style="{width: '440px'}">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
        name: 'CharacterCard',
        props:{
            characterUrl: String
        },
        data () {
            return {
                character : [],
                isLoading: true
            }
        },
        mounted(){
            fetch(this.characterUrl)
            .then(res => res.json()).then(result => {
                this.isLoading = false;
                this.character = result;
            })
        }
    }
</script>