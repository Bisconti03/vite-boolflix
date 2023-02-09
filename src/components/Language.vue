<script>


export default {
    name: "Language",

  data() {
    return {
      
    }
  },

  props : ["flag"],

 
}
</script>

<template>
     <img :src="'https://gds.baguette.engineering/flags/' + (
     flag === 'en' ? 'gb' :
     flag === 'ja' ? 'jp' :
     flag === 'da' ? 'dk' :
     flag === 'cs' ? 'cz' :
     flag === 'ko' ? 'kr' :
     flag === 'hi' ? 'in' :
     flag === 'xx' ? 'gb' :
     flag
) + '.png'" :alt="'' " >
</template>

<style lang="scss" scoped>
img {
  width: 40px;
}
</style>