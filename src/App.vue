<template>
  <div id="mainPage">
    <h1>Page Say: {{ test }}</h1>
    <contact-component></contact-component>
  </div>
</template>

<script>

export default {
  data: function(){
    return {
      test : 'Hello VietNam'
    }
  }
}
</script>

<style>
</style>
