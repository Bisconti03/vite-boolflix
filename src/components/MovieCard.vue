<script>
import { store } from '../store';
import Language  from './Language.vue'

export default {
    name: "MovieCard",

  data() {
    return {
      store
    }
  },

  components: {
    Language
  },

  props: ["btb", "type" ]
}
</script>

<template>

   
    <ul>
        <li>{{type === "film" ? btb.title : btb.name}}</li>
        <li>{{type === "film" ? btb.original_title : btb.original_name }}</li>
        <li>
            <Language :flag="btb.original_language"/>
        </li>
        <li>{{ btb.vote_average }}</li>
    </ul>
</template>

<style lang="scss" scoped>

</style>