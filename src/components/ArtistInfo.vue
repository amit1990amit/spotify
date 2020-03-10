<template>
    <section class="artist-info-main" v-if="artist && artist.images">
        <img class="artist-img" :src="artist.images[1].url">
        <div class="artist-info-container" v-if="artist">
            <p><span class="bold">Name: </span>{{artist.name}}</p>
            <p><span class="bold">Genre: </span>{{artist.genres.join(', ')}}</p>
            <p><span class="bold">Number of followers: </span>{{artist.followers.total}}</p>
        </div>

    </section>
</template>

<script>
export default {
    props:['artist'],

}
</script>