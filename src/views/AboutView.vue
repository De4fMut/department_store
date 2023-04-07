<template>
  <div class="about">
    <h1>This is an about page</h1>
    <prod-item :item="item"/>
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