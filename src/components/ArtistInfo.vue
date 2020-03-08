<template>
    <section class="artist-info-main" v-if="artist && artist.images">
        <img class="artist-img" :src="artist.images[1].url">
        <div class="artist-info-container" v-if="artist">
            <h2>Name: {{artist.name}}</h2>
            <h2>Genre: {{artist.genres.join(', ')}}</h2>
            <h2>Number of followers: {{artist.followers.total}}</h2>
        </div>

    </section>
</template>

<script>
export default {
    props:['artist'],

}
</script>