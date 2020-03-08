<template>
    <section class="tracks-list">
        <div class="list-title">
            <h2>artist name</h2>
            <h2>albom name</h2>
        </div>
        <TrackInfo class=track-info v-for="(track,idx) in tracks" :key="idx" :track="track"></TrackInfo>
    </section>
</template>

<script>
import TrackInfo from './TrackInfo';
export default {
    props:['tracks'],
    components:{
        TrackInfo
    }
}
</script>