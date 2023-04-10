<template>
    <div class="home">
        <Hello msg="Welcome to Your Vue.js App" />
        <my-button>Get log</my-button>
        <item-list />
    </div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/HelloWorld.vue";
import ItemList from "@/components/ItemList.vue";
// import json from "@/assets/products.json";
// import { mapGetters, mapActions } from "vuex";

export default {
    name: "home",
    components: {
        Hello,
        ItemList,
    },
};
</script>

<style lang="scss" scoped>
.home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>