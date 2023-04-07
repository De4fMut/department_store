<template>
    <div class="items">
        <prod-item 
        v-for="item in items" 
        :key="item.id" 
        :item="item" 
        />
    </div>
</template>

<script>
import ProdItem from "@/components/ProdItem.vue";

export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    components: {
        ProdItem,
    },
};
</script>

<style scoped lang="scss">
.items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px auto 0;
}
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
