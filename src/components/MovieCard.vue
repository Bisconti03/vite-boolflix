<script>
import { store } from '../store';
import Language  from './Language.vue'

export default {
    name: "MovieCard",

  data() {
    return {
      store,
      hover: false,
    }
  },

  components: {
    Language
  },

  props: ["typ" ]
}
</script>

<template>

   <div class="card"
    @mouseover="hover = true"
    @mouseleave="hover = false">
    <img :src="store.imageURL + typ.poster_path" alt="">

    <div class="data" v-if="hover">
      <ul>
        
        <li>
          <strong>
            Title: </strong>{{ typ.title}}</li>
        <li>
          <strong>
            Original Title: </strong>{{ typ.original_title }}</li>
        <li>
          <strong>
            Language: </strong> <Language :flag="typ.original_language"/>
        </li>
        
        <li><div>
                <strong>Vote: </strong>
                <span v-if="Math.ceil((typ.vote_average / 2)) === 1">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>
                <span v-else-if="Math.ceil((typ.vote_average / 2)) === 2">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>
                <span v-else-if="Math.ceil((typ.vote_average / 2)) === 3">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>
                <span v-else-if="Math.ceil((typ.vote_average / 2)) === 4">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>
                <span v-else>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>

            </div></li>

            <li><strong>
              Overview: 
            </strong>{{ typ.overview }}</li>
    </ul>
    </div>
   </div>
    
</template>

<style lang="scss" scoped>
.card {
  width: 342px;
  height: 513px;
  position: relative;
  margin-bottom: 30px;
  margin-left: 25px;

  
}



.data {
  width: 342px;
  height: 513px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  
  img {
    width: 30px;
  }


    
  
}

i {
  color: orange;
}
</style>