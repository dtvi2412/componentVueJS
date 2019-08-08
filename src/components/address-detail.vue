<template>
    <div class="address-deatail">
        <h1>Form Contact Detail Page</h1>
        <h1>My address - detail : 0582452653</h1>
        <h2>My age : {{myAge}} year old</h2>
        <h2>My age child: {{ageChild}}</h2>
        <button @click="changeAge">UP 30 year old</button>
        <button @click="changeAgeChild">Edit my child old</button>
        
    </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
    props:{
        myAge:Number,
        ageChild:Number
    },
    methods:{
        changeAge(){
            this.myAge = 30;
            this.$emit('editAge',this.myAge);
        },
        changeAgeChild: function(){
            this.ageChild = 10;
            eventBus.$emit('ageChild',this.ageChild);
        }
    }
}
</script>

<style scoped>
.address-deatail{
    background-color:yellowgreen;
    width:100%;
}
</style>
