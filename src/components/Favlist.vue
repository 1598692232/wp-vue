<template>
    <div>
        <div v-for="n in list">{{n}}</div>
    </div>
</template>

<script>
    'use strict'
    export default {

        data(){
            return{
                list:[344,2,3],
                msg:
                        "Hello World!"
            }
        }
    }
</script>

<style>
    html{
        background: #ddd;
    }
</style>