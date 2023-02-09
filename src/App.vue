<script>
import axios from 'axios';
import { store } from './store';
import MovieCard from './components/MovieCard.vue';
import SerieCard from './components/SerieCard.vue'




export default {
  data() {
    return {

      search: "",
      store,
    }
  },

  components: {
    MovieCard,
    SerieCard
  },


  methods: {
      getMovies() {

        if (this.search !== "" ) {

          axios
          .get(store.URLcompiled + store.add + this.search)

          .then(response => {

            store.movieList = response.data.results;

            console.log(response.data.results)
          });

          axios
          .get(store.URLcompiledList + store.add + this.search)

          .then(response => {

            store.serieList = response.data.results;

            console.log(response.data.results)
          });


          this.search = "";

        }
      }
    

  }


  
}

</script>

<template>

  <header>
    <div>
      <h1>BOOLFLIX</h1>
    </div>
    <div>
      <input type="text" v-model="this.search" @keyup.enter="getMovies">
      <button @click="getMovies">Search</button>
    </div>
    
  </header>
   
  <main>
    
    <div class="card-container">


      
      <MovieCard  v-for="movie in (store.movieList)" :typ="movie" />
      <SerieCard  v-for="serie in (store.serieList)" :typ="serie" />

      
      
    </div>

  

  </main>

  
  
</template>

<style lang="scss">
@import './styles/main';
@import './styles/partials/reset.scss';

header {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:black ;
  padding: 30px 20px;

    h1 {
      color: red;
    }

    input {
      width: 250px;
      height: 25px;
    }

    button {
      height: 25px;
      

    }
}

main {
  background-color: grey;
  height: 90vh;
  overflow-y: auto;

  .card-container {
  display: flex;
  flex-wrap: wrap;
  
  padding-top: 30px;
  
}
}


</style>
