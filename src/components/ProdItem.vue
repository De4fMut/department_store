<template>
    <div v-bind:style="{'background-image': 'url(' + imageUrl + ')' }" 
    class="item" 
    @click="log"
    >
        <my-button @click="log">Get log</my-button>
        <div>{{ item.title }}</div>
        <div>
            {{ item.regular_price.value + " " + item.regular_price.currency }}
        </div>
    </div>
</template>

<script>
export default {
    // {'background-image': 'url(' + require('@/assets/images/1.png') + ')' }
    props: {
        items: {
            type: Array,
            required: true,
        },
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            imageUrl: require('@/assets' + this.item.image),
        }
    },
    methods: {
        log() {
            console.log()
        }
    },
}
</script>

<style lang="scss" scoped>
.item {
    flex: 1 0 300px;
    border: 5px solid rgb(63, 209, 129);
    height: 400px;
    padding: 50px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
