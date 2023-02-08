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

  props: ["btb" ]
}
</script>

<template>

   
    <ul>
        <li>{{ btb.title }}</li>
        <li>{{ btb.original_title }}</li>
        <li>
            <Language :flag="btb.original_language"/>
        </li>
        <li>{{ btb.vote_average }}</li>
    </ul>
</template>

<style lang="scss" scoped>

</style>