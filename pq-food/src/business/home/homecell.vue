<template>
  <!-- <div>此类暂时没用上,用的vant默认的类</div> -->
  <div class="home-cell">
    <div class="cell-left">
      <img class="img-thumb" :src="food_img_url" >
    </div>
    <div class="cell-right">
      <div class="cell-right-title">
        {{food_title}}
      </div>
      <div class="cell-right-content">
        <!-- <div>头像url</div> -->
        <img :src="food_author_head" 
        alt=""
        class="cell-right-people-head">{{ food_author }}
      </div>
      <div class="cell-right-bottom">
        <!-- <div class="cell-right-bottom-browsenum">浏览数量</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    food_item:{
      type:Object
    }
  },
  data() {
    return {
      food_title:this.food_item.title_ko,
      food_img_url:this.food_item.cover_ko,
      food_author:this.food_item.food_author,
      food_author_head:this.food_item.cover_ko,
    }
  },
}
</script>

<style lang="less" scoped>
.home-cell {
  height: 4rem;
  // background-color: blue;
  display: flex;
}
.cell-left {
  width:4rem;
}
.img-thumb {
  width:4rem;
  height:4rem;
  background-size: 100%;
}
.cell-right {
  // background-color: green;
  margin-top: auto;
  margin-bottom: auto;
  padding: .2rem;
}
.cell-right-title {
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: .4rem;
  margin-bottom: .2rem;
}
.cell-right-people-head {
  width: .6rem;
  height: .6rem;
  margin: 0 .2rem .2rem 0;
  vertical-align: middle;
}
// .cell-right-bottom {

// }
</style>