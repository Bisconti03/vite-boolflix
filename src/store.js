import { reactive } from 'vue';

export const store = reactive({
    
    movieList:[],
    serieList:[],

    URLcompiled : "https://api.themoviedb.org/3/search/movie?api_key=a128312f2280ae963dae465e3067fc0c",

    URLcompiledList :"https://api.themoviedb.org/3/search/tv?api_key=a128312f2280ae963dae465e3067fc0c",
     
    imageURL: "https://image.tmdb.org/t/p/w342",

    add: "&query=",



});