<template>
    <div class="item">
        <input type="image" :src="imageUrl" alt="this.item.title" />
        <div>{{ item.title }}</div>
        <div>
            {{ item.regular_price.value + " " + item.regular_price.currency }}
        </div>
        <my-button @click="getItem">Get log</my-button>
    </div>
</template>

<script>
export default {
    // {'background-image': 'url(' + require('@/assets/images/1.png') + ')' }
    props: {
        // items: {
        //     type: Array,
        //     required: true,
        // },
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            imageUrl: require("@/assets" + this.item.image),
        };
    },
    methods: {
        getItem() {
            console.log(this.item)
        } 
    },
};
</script>

<style lang="scss" scoped>
.item {
    flex: 0 1 300px;
    position: relative;
    border: 5px solid rgb(63, 209, 129);
    border-radius: 50px;
    height: 400px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    @media screen and (max-width: 699px) {
        height: 300px;
        flex: 0 0 225px
    }
    input {
        display: block;
        position: absolute;
        top: 10px;
        height: 300px;
        width: inherit;
        @media screen and (max-width: 699px) {
        height: 225px;
        }
    }
}
</style>
