<template>
    <section class="artist-info-main">
        <img class="artist-img" src="https://beatrice-burger.co.il/wp-content/uploads/2019/01/1_0006_258A8051-1.jpg" alt="">
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