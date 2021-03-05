<template>
    <div>
        <router-view />

        <van-tabbar v-model="active">
            <van-tabbar-item replace to="/home" icon="home-o">食品</van-tabbar-item>
            <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

export default {
    data() {
        return {
            active: 0,
        }
    },
    components:{

    }
}
</script>

<style scoped>

</style>