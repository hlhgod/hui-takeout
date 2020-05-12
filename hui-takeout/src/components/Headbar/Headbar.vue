<template>
    <div>
        <slot name="left"></slot>
        <p>{{title}}</p>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    props:["title"]
}
</script>

<style lang="scss" scoped>
    div{
        background-color: #6da1a8;
        height: 40px;
        width: 96%;
        padding: 5px 2%;
        position: fixed;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        p{
            font-size: 24px;
            flex: 1;
        }

    }
</style>