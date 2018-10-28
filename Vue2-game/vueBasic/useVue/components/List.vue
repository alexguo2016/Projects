<template>
    <ul>
        <li v-for='(item, index) in list' :key='index' :item='item'>{{item}}</li>
    </ul>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
        }
    }
};
</script>

<style>
</style>
