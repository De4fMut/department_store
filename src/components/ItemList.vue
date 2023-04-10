<template>
    <div class="items">
        <prod-item v-for="item in allItems" :key="item.id" :item="item" />
    </div>
    <div class="page__wrapper">
        <page-list
            v-for="pageNumber in allPages"
            :key="pageNumber"
            :pageNumber="pageNumber"
            :page="page"
            @getChangedPage="changePage"
        />
    </div>
</template>

<script>
import ProdItem from "@/components/ProdItem.vue";
import PageList from "@/components/PageList.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
    components: {
        ProdItem,
        PageList,
    },
    data() {
        return {
            ...mapState(["page"]),
        };
    },
    methods: {
        ...mapActions([
            "fetchItems",
            "fetchAllPages",
            "fetchPage",
            "fetchPageListItem",
        ]),
        changePage(pageNumber) {
            this.page = pageNumber;
            this.fetchPage(this.page);
            this.fetchPageListItem();
            console.log(this.page);
        },
    },
    computed: {
        ...mapGetters(["allItems", "allPages", "getPage", "getLimitedItems"]),
    },
    mounted() {
        this.fetchItems();
        this.fetchAllPages();
        this.changePage(1);
    },
};
</script>

<style scoped lang="scss">
.items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px auto 0;
    width: 960px;
    @media screen and (max-width: 999px) {
        width: 750px;
    }
    @media screen and (max-width: 779px) {
        width: 650px;
    }
    @media screen and (max-width: 669px) {
        width: 520px;
    }
    @media screen and (max-width: 550px) {
        width: 320px;
    }
    @media screen and (max-width: 350px) {
        width: 280px;
    }
}
.page__wrapper {
    display: flex;
    flex-direction: row;
}
</style>
