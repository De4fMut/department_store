<template>
    <div class="home">
        <Hello msg="Welcome to Your Vue.js App" />
        <my-button @click="log">Get log</my-button>
        <item-list 
        :items="items" 
        />
    </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/HelloWorld.vue'
import ItemList from '@/components/ItemList.vue'
import json from '@/assets/products.json'



export default {
  name: 'home',
  data() {
    return {
      items: json,
    }
  },
  components: {
    Hello,
    ItemList,
  },
  methods: {
    log(item){
      console.log(this.item)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
