<template>
    <div class="foodclass">
        食品首页列表
    </div>
</template>

<script>
import network from "@/network/network.js"
export default {
    data() {
        return {
            
        }
    },
    created() {
      
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        let url = "api/recipe";
        network.get(url).then((res) => {
          console.log("res : ", res);
        }).catch((err) => {
          console.log("error : ", err);
        })
      },
    },
}
</script>

<style>

</style>