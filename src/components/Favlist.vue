<template>
    <div>
        <div v-for="n in list">div</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list: [1,2,3],
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    html{
        background: #ddd;
    }
</style>