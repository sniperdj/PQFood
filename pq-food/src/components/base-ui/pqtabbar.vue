<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item badge="3">
                <span>自定义</span>
                <template #icon="props">
                    <img :src="props.active ? icon.active : icon.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, Button } from 'vant';

export default {
    data() {
        return {
            active: 0,
            icon: {
                active: 'https://img01.yzcdn.cn/vant/user-active.png',
                inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
            },
        }
    },
    components:{
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem,
        [Button.name]:Button
    }
}
</script>

<style scoped>

</style>