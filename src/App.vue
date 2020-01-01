<template>
<div class="container">
  <keep-alive>
<component :is="selectedComponent">

</component>
</keep-alive>
  <div class="row">
    <app-header></app-header>
  </div>
</div>
</template>

<script>
import Calculator from './components/Calculator'
import ProfCalculator from './components/ProfesionalCalculator';
import NewCalculator from'./components/newcalculator'
import Header from './components/Header'
export default {
  data(){
    return{
      selectedComponent:"appNewcalculator"
    }
  },
  components:{
    appCalculator:Calculator,
    appProfCalculator:ProfCalculator,
    appNewcalculator:NewCalculator,
    appHeader:Header
  }
}
</script>
<style>
body{
  background-color: gainsboro
}
.container{
    text-align: center;
}
</style>