<script>
import axios from 'axios';
import { store } from './store';
import MovieCard from './components/MovieCard.vue'




export default {
  data() {
    return {

      search: "",
      store,
    }
  },

  components: {
    MovieCard
  },


  methods: {
      getMovies() {

        if (this.search !== "" ) {

          axios
          .get(store.URLcompiled + store.add + this.search)

          .then(response => {

            store.movieList = response.data.results;

            console.log(response.data.results)
          })

          this.search = "";

        }
      }
    

  }


  
}

</script>

<template>
   <input type="text" v-model="this.search" @keyup.enter="getMovies">
  <button @click="getMovies">Cerca</button>
  

  <MovieCard  v-for="movie in (store.movieList)" :btb="movie" />

  
</template>

<style lang="scss">
@import './styles/main';


</style>
