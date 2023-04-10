<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ $store.state.likes }}</h1>
  </div>
</template>

<script>
import ProdItem from "@/components/ProdItem.vue";
import json from '@/assets/products.json'


export default {
  data(){
    return{
      items: json
    }
  },
  components:{
    ProdItem,
  }
}
</script>