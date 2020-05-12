<template>
    <div id="app">
        <router-view />
        <Footbar v-show="$route.meta.showFooter"></Footbar>
    </div>
</template>

<script>
import Footbar from "./components/Footbar/Footbar.vue";
export default {
    components: {
        Footbar
    }
};
</script>

<style lang="scss">

* {
    padding: 0;
    margin: 0;
    touch-action: none; 
}
html {
    height: 100%;
}
ul {
    list-style: none;
}


</style>
