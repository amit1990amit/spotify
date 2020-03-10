<template>
    <section class="search-container">
        <h1 class="text-center search-title">Search</h1>
        <form @submit="onSearch" >
            <div class="filter-container">
                <div class="searchItems filter-secodery">   
                    <el-input @submit="onSearch" placeholder="Search" v-model="query" required></el-input>
                </div>

                <el-select v-model="tag" placeholder="Select" required>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                
            </div>
            <button class="search-btn">Search</button>
        </form>
    </section>
</template>

<script>

export default {
    name: 'search-bar',
    data() {
        return {
            query:'',
            tag:'artist',
            options: [
            {
            value: "artist",
            label: "Artist"
            },
            {
            value: "track",
            label: "Track"
            }
        ]
        }
    },
    methods:{
        onSearch(){
            if(this.tag === 'artist'){
                this.$emit('searchArtist',this.query)
            } else if(this.tag === 'track') {
               this.$emit('searchTraks',this.query) 
            }
            
        }
    }
}
</script>