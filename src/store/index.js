import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import SpotifyService from '../service/SpotifyService';

export default new Vuex.Store({
  state: {
    tracks:[],
    artist:null
  },
  getters:{
    tracks(state){
      return state.tracks
    },
    artist(state){
      return state.artist
    }
  },
  mutations: {
    setTracks(state,{tracks}){
      console.log('b5',tracks)
      state.tracks = tracks
    },
    setArtist(state,{artist}){
      state.artist = artist
    }
  },
  actions: {
    async loadTracks(context, {query}){
      console.log('b2')
      const tracks = await SpotifyService.getTracks(query);
      console.log('b4',tracks)
      context.commit({type: 'setTracks', tracks})
    },
    async loadArtist(context, {query}){
      const artist = await SpotifyService.getArtist(query);
      context.commit({type: 'setArtist', artist})
    },
    async loadToken(context){
      console.log('ssss',context)
      await SpotifyService.saveToken()
    }
  },
  modules: {
  }
})






