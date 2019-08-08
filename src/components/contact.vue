<template>
  <div class="component">
    <div class="component-contain">
      <div class="row">
        <div>
          <h3>Hello My Name is {{cauthuYeuThich}} and {{age}} year old</h3>
          <h3>My age child {{child}} year old</h3>
          <button @click="changeName">Click change Name</button>
        </div>
        <div class="row-address">      
          <component-address 
              :cauthutoiyeu="cauthuYeuThich" 
              v-on:changeNameParent="cauthuYeuThich = $event"
              v-bind:passCallBack='resetCauThuYeuThich'
              :myAge="age"
              @up100tuoi="age = $event"
              :ageChild='child'
              >
          </component-address>     
        </div>
        <div class="row-address-detail">         
          <component-address-detail
              :myAge="age"
              @editAge='age =$event' 
              :ageChild='child'
          >
            </component-address-detail>         
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import address from './address.vue';
import addressDetail from './address-detail.vue';
export default {
  data: function(){
    return {
      cauthuYeuThich : 'Nani',
      name : 'Dang Thai Vi',
      age: 21,
      child: 5
    }
  },
  methods: {
    changeName:function(){
      this.cauthuYeuThich = 'Falcao';
      this.name = 'Ronaldo';
      
    },
    resetCauThuYeuThich(){
      this.cauthuYeuThich = 'Nani';
    }
  },
  components :{
    'component-address' : address,
    'component-address-detail' : addressDetail,
  }
}
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
  div.row{
    border: 1px solid black;
    width: 100%;
  }
  .component{
    width:100%;
  }
  .component-contain{
    width:80%;
  }
  .row{
    text-align: center;
    width:80%;
  }
  .row-address{
    border: 1px solid black;
    width:45%;
    margin-top:4rem;
    margin-left:2rem;
    margin-bottom: 2rem;
    background-color: blueviolet;
    float:left;
  }
  .row-address-detail{
    border: 1px solid black;
    width: 45%;
    float:left;
    margin-top:4rem;
    margin-left:2rem;
    margin-bottom: 2rem;
    background-color:yellowgreen;
  }
  .clear{
    clear: both;
  }

</style>
