<template>
    <div class="address">
        <h1>Form Contact Page</h1>
        <h1>My address : {{address}}</h1>
        <button @click="changeAdrees">Click Address</button>
        <h5>List Detail</h5>
        <h2>My name reverse : {{reverseName()}}</h2>
        <h2>My age: {{myAge}} </h2>
        <h2>My age child : {{ageChild}}</h2>
        <button @click="changeContactParent">Change Event Contact</button>
        <button @click="passCallBack">Rest Call Back</button>
        <button @click="up100">Up 100 year old</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
    //Props duoc dung de chuyen du lieu tu component cha sang con,va cac con truyen thong bao den cac cha thong qua su kien
    //Prop dat ten gi cung dc , mien ben thang cha dat giong la ok cha :(v-bind:...)
    //props:['cauthutoiyeu'],
    props:{
        cauthutoiyeu:{
            type : Object,
            //required bat buoc phai dien event ben component
            //required: true,
            //default khong co gia tri cua bien ben component cha thi van co gia tri co default
             default: 'Dang Thai Vi',
             
        },
        passCallBack:Function,
        myAge: Number,
        ageChild: Number
    },
    data: function(){
        return {
            address : '461 Doan Van Bo, TPHCM'
        }
    },
    methods: {
        changeAdrees: function(){
            this.address = '210E Nguyen Dinh Chieu';
        },
        reverseName: function(){
            return this.cauthutoiyeu.split("").reverse().join("");
        },
        changeContactParent(){
            this.cauthutoiyeu = 'Nani';
            this.$emit('changeNameParent',this.cauthutoiyeu);
        },
        up100(){
            this.myAge = 100;
            this.$emit('up100tuoi',this.myAge);
        }
    },
    created: function(){
        eventBus.$on('ageChild' , (age)=>{
            this.ageChild = age;
        })
    }
  

}
</script>

<style scoped>
.address{
    background-color: blueviolet;
}
</style>
