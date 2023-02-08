import { reactive } from 'vue';

export const store = reactive({
    
    movieList:[],

    URLcompiled : "https://api.themoviedb.org/3/search/movie?api_key=a128312f2280ae963dae465e3067fc0c",

    add: "&query=",

});