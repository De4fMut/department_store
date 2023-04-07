<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: 'my-button'
};
</script>


<style lang="scss" scoped>
.btn{
    height: 20px;
    width: 100px;
    background-color: teal;
}
</style>
