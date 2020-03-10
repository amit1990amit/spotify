<template>
  <div class="main-page"> 
    <SearchBar @searchTraks="searchTraks" @searchArtist="searchArtist"></SearchBar>
    <TrackList :tracks="tracks" v-if="isTracks"></TrackList>
    <ArtistInfo v-if="isArtist" :artist="artist"></ArtistInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '../components/SearchBar';
import ArtistInfo from '../components/ArtistInfo';
import TrackList from '../components/TrackList';

export default {
  name: 'home',
  data(){
    return {
      isTracks: false,
      isArtist: false
    }
  },
  components: {
    SearchBar,
    ArtistInfo,
    TrackList
  },
  methods:{
    searchTraks(query){
      this.isTracks = true;
      this.isArtist = false;
      this.$store.dispatch({type: 'loadTracks',query});
  
    },
    searchArtist(query){
      this.isTracks = false;
      this.isArtist = true;
      this.$store.dispatch({type: 'loadArtist',query});
    },
  },
  computed:{
    tracks(){
      return this.$store.getters.tracks;
    },
    artist(){
      return this.$store.getters.artist;
    }
  },
  created(){
    this.$store.dispatch({type: 'loadToken'})
  }
}
</script>
