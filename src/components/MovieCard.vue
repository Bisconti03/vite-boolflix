<script>
import { store } from '../store';

export default {
    name: "MovieCard",

  data() {
    return {
      store
    }
  },

  props: ["btb" ]
}
</script>

<template>
    <ul>
        <li>{{ btb.title }}</li>
        <li>{{ btb.original_title }}</li>
        <li>{{ btb.original_language }}</li>
        <li>{{ btb.vote_average }}</li>
    </ul>
</template>

<style lang="scss" scoped>

</style>