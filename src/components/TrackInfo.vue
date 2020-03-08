<template>
    <section class="albom-info">
        <h2>{{track.artists[0].name}}</h2>
        <h2>{{track.name}}</h2>
    </section>
</template>

<script>
export default {
    props:['track']
}
</script>